import * as React from 'react';
import {SFTCommonFunctions} from './CommonFunctions';
import {SFT} from './SearchFilterTable';
//import { FCMModalButton } from 'fcmkit/lib/ModalDialog/FCMModalButton';
import { FlowObjectData } from 'fcmlib/lib/FlowObjectData';
import { FlowDisplayColumn } from 'fcmlib/lib/FlowDisplayColumn';
//import { eContentType } from 'fcmlib/lib/FCMNew';
//import { FlowObjectDataProperty } from 'fcmlib/lib/FlowObjectDataProperty';
//import { FlowObjectDataArray } from 'fcmlib/lib/FlowObjectDataArray';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
//import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';
import { SearchFilterTableRowCell } from './SearchFilterTableRowCell';
// declare const manywho: IManywho;
declare const manywho: any;

export class SearchFilterTableRow extends React.Component<any, any> {

    rowElement: any;
    constructor(props: any) {
        super(props);
        this.state = {enabledOutcomes: [], rowClasses: []};
        this.selectRow = this.selectRow.bind(this);
        this.addRowClass = this.addRowClass.bind(this);
        //this.editColumn = this.editColumn.bind(this);
    }

    async componentDidMount(): Promise<void> {
        const enabledOutcomes: string[] = [];
        const root: SFT = this.props.root;
        const objData: FlowObjectData = root.rowMap.get(this.props.id)?.objectData;
        const keys: string[] = Object.keys(root.component.outcomes);
        for (let pos = 0 ; pos < keys.length ; pos++) {
            if (root.component.outcomes[keys[pos]].isBulkAction === false) {
                if(!root.supressedOutcomes.has(root.component.outcomes[keys[pos]].developerName)) {
                    if (SFTCommonFunctions.assessRowOutcomeRule(root.component.outcomes[keys[pos]], objData, root) === true) {
                        enabledOutcomes.push(keys[pos]);
                    }
                }
            }
        }
        if(root.lastRememberedRow){
            if(objData.properties[root.rowRememberColumn]?.value === root.lastRememberedRow){
                //this.rowElement.scrollIntoView({inline: "start", block: "start", behavior: "instant"});
                //this.rowElement.scrollIntoView();
            }
        }
        this.setState({enabledOutcomes});
        //root.forceUpdate();
    }

    selectRow(e: any) {
        const root: SFT = this.props.root;
        const objData: FlowObjectData = root.rowMap.get(this.props.id)?.objectData;
        root.selectRow(objData);
    }

    addRowClass(className: string){
        if(this.state.rowClasses.indexOf(className)<0){
            let classes = this.state.rowClasses;
            classes.push(className);
            this.setState({rowClasses: classes})
        }
    }

    render() {

        const root: SFT = this.props.root;
        const objData: FlowObjectData = root.rowMap.get(this.props.id)?.objectData;
        if(!objData) {
            console.log("missing");
        }
        let rowClass: string="";
        if(root.selectedRow === objData.externalId) {
            rowClass += " sft-table-row-selected "
        }
        if(root.selectedRowMap.has(objData.externalId)) {
            rowClass += " sft-table-row-tagged "
        }

        rowClass=rowClass+ " " + (this.state.rowClasses as string[]).join(" ");
        const buttons: any[] = [];
        let anyoutcomes: boolean = false;
        for(let key of Object.keys(root.component.outcomes)){
            if (root.component.outcomes[key].isBulkAction === false) {
                
                let showOutcome: boolean = this.state.enabledOutcomes.indexOf(key) >= 0;
                if(!root.supressedOutcomes.has(key)) {
                    anyoutcomes=true;
                    if(root.component.getAttribute("greyDissabled","false").toLowerCase()==="true"){
                        let btn: any = SFTCommonFunctions.makeOutcomeButton(root,root.component.outcomes[key],root.iconSuffix,objData,!showOutcome);
                        buttons.push(btn);
                    }
                    else {
                        if (showOutcome === true) {
                            let btn: any = SFTCommonFunctions.makeOutcomeButton(root,root.component.outcomes[key],root.iconSuffix,objData,false);
                            buttons.push(btn);
                        }
                    }
                }
            }
        };

        const cols: any[] = [];

        if (root.component.isMultiSelect){
            cols.push(
                <td
                    className="sft-table-cell sft-table-cell-check"
                    key="#CHECK#"
                >
                    <input
                        className="sft-checkbox"
                        type="checkbox"
                        onClick={(event: any) => {root.toggleSelect(event, this.props.id); }}
                        checked={root.selectedRowMap.has(this.props.id)}
                        title={"Select Row"}
                        onChange={(e: any)=>{return}}
                    />
                </td>,
            );
        } else {
            if (root.component.getAttribute("showRadio","false").toLowerCase()==="true"){
                cols.push(
                    <td
                        className="sft-table-cell"
                        key="#CHECK#"
                    >
                        <input
                            className="sft-radio"
                            type="radio"
                            checked={root.selectedRow===objData.externalId}
                            title={"Select Row"}
                            onChange={(e: any)=>{return}}
                        />
                    </td>,
                );
            }
        }

        root.userColumns.forEach((collName: string) => {
            if (collName === '#BUTTONS#') {
                if (anyoutcomes) {
                    cols.push(
                        <td
                            key="#BUTTONS#"
                            className="sft-table-cell"
                        >
                            <div
                                className="sft-table-cell-buttons"
                            >
                                {buttons}
                            </div>
                        </td>,
                    );
                }
            } else {
                const col: FlowDisplayColumn = root.colMap.get(collName);
                if (col) {
                    //let cellResult: any = this.formatValue(col, root, objData);
                    //const val: any = cellResult.result;
                    //if(rowClass.length > 0 && cellResult.rowClass.length>0) {
                    //    rowClass+= " ";
                    //}
                    //rowClass+= cellResult.rowClass;

                    cols.push(
                        <SearchFilterTableRowCell 
                            key={col.developerName}
                            fdc={col}
                            root={root}
                            row={this}
                        />
                        /*
                        <td
                            key={col.developerName}
                            className={"sft-table-cell " + cellResult.cellClass}
                        >
                            {val}
                        </td>,*/
                    );
                } else {
                    console.log('Failed to get a definition for col ' + collName);
                }
            }

        });
        return (
            <tr
                key={this.props.id}
                className={"sft-table-row " + rowClass}
                ref={(element: any) => {this.rowElement = element}}
                onClick={this.selectRow}
            >
                {cols}
            </tr>
        );
    }

}
