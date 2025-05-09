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
                this.rowElement.scrollIntoView({inline: "nearest", block: "start", behavior: "auto"});
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

    /*
    editColumn(e: PointerEvent, fdc: FlowDisplayColumn){
        e.preventDefault();
        e.stopPropagation();
        console.log("On Edit");
        let input: any;
        const root: SFT = this.props.root;
        const row: FlowObjectData = root.rowMap.get(this.props.id)?.objectData;
        let col: FlowObjectDataProperty = row?.properties[fdc.developerName]
        // depending on the type we need to replace the current target with an edit cell
        switch(fdc.contentType){
            case eContentType.ContentString:
                input = (
                    <input type='text' defaultValue={col.value as string}></input>
                );
                break;
            case eContentType.ContentNumber:
                <input type='number' defaultValue={col.value as number}></input>
                break;
            case eContentType.ContentBoolean:
                <input type='checkbox' checked={col.value as boolean}></input>
                break;
            case eContentType.ContentDateTime:
                <input type='date' defaultValue={(col.value as string).substring(0,10)}></input>
                break;
        }
    }

    
    // handles special contents like uris & dataUri
    formatValue(fdc: FlowDisplayColumn, root: SFT, row: FlowObjectData): any {
        let result: any;
        let rowClass: string = "";
        let cellClass: string = "";
        let col: FlowObjectDataProperty;
        let onEdit: any;
        if(fdc.isEditable){
            onEdit = (e: any)=>{this.editColumn(e, fdc)}
        }

        if(root.component.getAttribute("ComplexColumns","false").toLowerCase() === "true"){
            let colsName: string = root.component.getAttribute("ComplexColumnsChildren","Columns");
            let colName: string = root.component.getAttribute("ComplexColumnName","Name");
            let colValue: string = root.component.getAttribute("ComplexColumnValue","Value");
            
            (row.properties[colsName].value as FlowObjectDataArray).items.forEach((c: FlowObjectData) => {
                let cname: string = c.properties[colName].value as string;
                if(cname===fdc.developerName) {
                    let val: any = c.properties[colValue].value;
                    let colType: eContentType = root.colMap.get(fdc.developerName).contentType;
                    col=FlowObjectDataProperty.newInstance(cname,colType,c);
                }
            });
        }
        else {
            col = row?.properties[fdc.developerName]
        }
        if (col && col.developerName) {
            if (root.columnRules.has(col.developerName)) {
                let ruleResult: any = root.columnRules.get(col.developerName).generateColumnContent(col, row, root);
                result = ruleResult.content;
                rowClass = (ruleResult.rowClass? ruleResult.rowClass : "");
                cellClass = (ruleResult.cellClass? ruleResult.cellClass : "");
            } else {
                if (fdc.componentType?.length > 0) {
                    const columnProps = {
                        id: row.internalId,
                        propertyId: col.typeElementPropertyId,
                        contentValue: col.value,
                        objectData: col.value,
                        flowKey: root.component.id,
                        contentType: col.contentType,
                        contentFormat: col.contentFormat,
                        row,
                        sft: root,
                        component: root.component
                    };
                    if(typeof manywho !== 'undefined'){
                        result = React.createElement(manywho.component.getByName(fdc.componentType), columnProps);
                    }
                    else {
                        result = React.createElement((0,eval)(fdc.componentType) , columnProps);
                    }
                } else {
                    switch (fdc.contentType) {
                        case eContentType.ContentDateTime:
                            let dt: Date = new Date(col.value as string);
                            if ((dt instanceof Date && !isNaN(dt.getTime())) === true && dt.getTime()>0) {
                                let str: string = '';
                                switch (root.component.getAttribute('DateFormat', 'LOCALE')) {
                                    case 'UTC':
                                        str = dt.toUTCString();
                                        break;
                                    case 'JSON':
                                        str = dt.toJSON();
                                        break;
                                    default:
                                        str = dt.toLocaleString();
                                        break;
                                }
                                result = (
                                    <span
                                        className="sft-table-cell-text"
                                        onClick={onEdit}
                                    >
                                        {str}
                                    </span>
                                );
                            } else {
                                <span className="sft-table-cell-text" />;
                            }
                            break;

                        case eContentType.ContentString:
                            switch (true) {
                                case this.isXML(col.value as string) === true:
                                    result = (
                                        <button
                                            onClick={(e: any) => {this.showXML(col.developerName, col.value as string); }}
                                        >
                                            {'View XML'}
                                        </button>
                                    );
                                    break;

                                case this.isJSON(col.value as string) === true:
                                    result = (
                                        <button
                                            onClick={(e: any) => {this.showJSON(col.developerName, col.value as string); }}
                                        >
                                            {'View JSON'}
                                        </button>
                                    );
                                    break;

                                case this.isContent(col.value as string) === true:
                                    result = (
                                        <button
                                            onClick={(e: any) => {this.showContent(col.developerName, col.value as string); }}
                                        >
                                            {'View Content'}
                                        </button>
                                    );
                                    break;

                                case (col.value as string).startsWith('http:'):
                                case (col.value as string).startsWith('https:'):
                                    let inner: any;
                                    if (this.isUrlImage(col.value as string)) {
                                        inner = (
                                            <img
                                                src={col.value as string}
                                                style={{height: '2rem', width: 'auto'}}
                                                alt={col.value as string}
                                                title={col.value as string}
                                            />
                                        );
                                    } else {
                                        inner = col.value;
                                    }
                                    result = (
                                        <a
                                            href={(col.value as string)}
                                            target="_blank"
                                        >
                                            {inner}
                                        </a>
                                    );
                                    break;

                                case (col.value as string).startsWith('data:'):
                                    const mime = (col.value as string).split(';')[0].split(':')[1];
                                    switch (true) {
                                        case mime.startsWith('audio/'):
                                            result = (
                                                <audio
                                                    controls={true}
                                                    style={{width: '100%', minWidth: '9rem'}}>
                                                    <source src={(col.value as string)} type={mime}/>
                                                </audio>
                                            );
                                            break;

                                        case mime.startsWith('video/'):
                                            result = (
                                                <button
                                                    className="sft-table-cell-button"
                                                    onClick={(e: any) => {root.playVideo('Video', (col.value as string), mime); }}
                                                >
                                                    Play Video
                                                </button>
                                            );
                                            break;

                                        default:
                                            const dnld: string = this.makeFileName('file', mime);
                                            result = (
                                                <a href={(col.value as string)} target="_blank" download={dnld}>Download File</a>
                                            );
                                            break;
                                    }

                                    break;

                                case root.maxColText > 0 && (col.value as string).length > root.maxColText:
                                    result = (
                                        <button
                                            onClick={(e: any) => {this.showContent(col.developerName, col.value as string); }}
                                        >
                                            {'View Content'}
                                        </button>
                                    );
                                    break;

                                default:
                                    result = (
                                        <span
                                            className="sft-table-cell-text"
                                            onClick={onEdit}
                                        >
                                            {(col.value as string)}
                                        </span>
                                    );
                                    break;
                            }

                            break;
                        case eContentType.ContentNumber:
                            if (((col as any).value as string) === '') {
                                result = (
                                    <span
                                        className="sft-table-cell-text"
                                        onClick={onEdit}
                                    />
                                );
                            } else {
                                result = (
                                    <span
                                        className="sft-table-cell-text"
                                        onClick={onEdit}
                                    >
                                        {(col.value as string)}
                                    </span>
                                );
                            }
                            break;
                        case eContentType.ContentBoolean:
                            if ((((col as any).value as string)+"")?.toLowerCase() === 'true') {
                                result = (
                                    <FontAwesomeIcon 
                                        icon={faCircleCheck}
                                        className="sft-table-cell-text sft-table-cell-boolean sft-table-cell-boolean-true"
                                        onClick={onEdit}
                                    />
                                );
                            } else {
                                result = (
                                    <FontAwesomeIcon 
                                        icon={faCircleXmark}
                                        className="sft-table-cell-text sft-table-cell-boolean sft-table-cell-boolean-false"
                                        onClick={onEdit}
                                    />
                                );
                            }
                            break;

                        default:
                            result = (
                                <span
                                    className="sft-table-cell-text"
                                    onClick={onEdit}
                                >
                                    ???
                                </span>
                            );
                            break;
                    }
                }
            }
        } else {
            console.log('One of the columns in the table had a null name.  Check the table display columns settings in Flow');
        }
        return {result,rowClass, cellClass};
    }

    isUrlImage(url: string): boolean {
        url+="";
        if (
            url.endsWith('jpg') ||
            url.endsWith('jpeg') ||
            url.endsWith('jfif') ||
            url.endsWith('png') ||
            url.endsWith('bmp') ||
            url.endsWith('ico') ||
            url.endsWith('webp') ||
            url.endsWith('gif') ||
            url.endsWith('svg')
        ) { return true; } else {
            return false;
        }
    }

    isJSON(value: string): boolean {
        value+="";
        if (value === 'null') { value = ''; }
        try{
            if (value.indexOf('{') < 0) { return false; }
        }
        catch(e){
            console.log("bang")
        }
        try {
            value = value.replaceAll('\\n ', '');
            value = value.replaceAll('\\n}', '}');
            value = value.replaceAll('\\', '"');
            value = value.replaceAll('\"', '"');
            const obj = JSON.parse(value);
            return true;
        } catch (e) {
            return false;
        }
    }

    showJSON(title: string, value: string) {
        const root: SFT = this.props.root;
        value = value.replaceAll('\\n ', '');
        value = value.replaceAll('\\n}', '}');
        value = value.replaceAll('\\', '"');
        value = value.replaceAll('\"', '"');
        const jj: string = JSON.stringify(JSON.parse(value), undefined, 4);
        // jj = jj.replaceAll('/&', '&amp;').replaceAll('/<', '&lt;').replaceAll('/>', '&gt;');

        const content = (
            <div
                style={{
                    overflow: 'visible'
                }}
            >
                <div
                    style={{
                        overflow: 'visible',
                        whiteSpace: 'pre',
                        textAlign: 'left',
                        fontSize: '1rem',
                    }}
                >
                    {jj}
                </div>
            </div>

        );
        root.messageBox.showDialog(
            null,
            title, 
            content, 
            [new FCMModalButton('Ok', root.messageBox.hideDialog)]);
    }

    isContent(value: string): boolean {
        value+="";
        if (value === 'null') { value = ''; }
        if (value.indexOf('\\n') > 0 || /<\/?[a-z][\s\S]*>/i.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    showContent(title: string, value: string) {
        value = value.replaceAll('\\n', '<br>');
        value = value.replaceAll('<br><br>', '<br>');
        const content = (
            <div
                style={{
                    overflow: 'visible',
                }}
            >
                <pre>
                <code
                    style={{
                        overflow: 'visible',
                        whiteSpace: 'pre',
                        fontSize: '1rem',
                    }}
                    dangerouslySetInnerHTML={{__html: value}}
                />
                </pre>
            </div>

        );
        const root: SFT = this.props.root;
        root.messageBox.showDialog(
            null,
            title, 
            content, 
            [new FCMModalButton('Ok', root.messageBox.hideDialog)]);
    }

    isXML(value: string): boolean {
        value+="";
        if (value === 'null') { value = ''; }
        if (value.startsWith("<?xml")) {
            return true;
        } else {
            return false;
        }
    }

    showXML(title: string, value: string) {
        value = value.replaceAll('\\n', '<br>');
        value = value.replaceAll('<br><br>', '<br>');
        const content = (
            <div
                style={{
                    overflow: 'visible',
                }}
            >
                <pre>
                <code>
                    {value}
                </code>
                </pre>
            </div>

        );
        const root: SFT = this.props.root;
        root.messageBox.showDialog(
            null,
            title, 
            content, 
            [new FCMModalButton('Ok', root.messageBox.hideDialog)]);
    }

    makeFileName(name: string, mimeType: string): string {
        const fileName: string = name;
        switch (mimeType) {
            case 'audio/webm': return fileName + '.webm';

            default: return fileName;
        }
    }
    */
}
