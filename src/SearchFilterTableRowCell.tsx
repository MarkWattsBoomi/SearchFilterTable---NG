import { FCMModalButton } from "fcmkit/lib/ModalDialog/FCMModalButton";
import React from "react";
import { SFT } from "./SearchFilterTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';
import { FlowDisplayColumn } from "fcmlib/lib/FlowDisplayColumn";
import { FlowObjectData } from "fcmlib/lib/FlowObjectData";
import { SearchFilterTableRow } from "./SearchFilterTableRow";
import { FlowObjectDataProperty } from "fcmlib/lib/FlowObjectDataProperty";
import { eContentType } from "fcmlib/lib/FCMNew";
import { FlowObjectDataArray } from "fcmlib/lib/FlowObjectDataArray";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

declare const manywho: any;

export class SearchFilterTableRowCell extends React.Component<any,any> {
    
    constructor(props: any) {
        super(props);
        const row: SearchFilterTableRow = this.props.row;
        const root: SFT = this.props.root;
        let objData: FlowObjectData = root.rowMap.get(row.props.id)?.objectData;

        this.state = {isEditing: false, currentValue: objData.properties[this.props.fdc.developerName].value};
        this.editColumn = this.editColumn.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.rollBack = this.rollBack.bind(this);
    }

    editColumn(e: any){
        e.preventDefault();
        e.stopPropagation();
        const row: SearchFilterTableRow = this.props.row;
        const root: SFT = this.props.root;
        let objData: FlowObjectData = root.rowMap.get(row.props.id)?.objectData;
        root.selectedRow = objData.externalId;
        root.lastRememberedRow = root.selectedRow;
        console.log("On Edit");
        this.setState({isEditing: true});
        e.currentTarget.focus();
    }

    keyDown(e: any){
        switch(e.key){
            case "Escape":
                e.preventDefault();
                e.stopPropagation();
                console.log("Escape");
                this.setState({isEditing: false});
                break;
            case "Enter":
                this.updateValue(e);
                break;
            default:
                //do whatever
                e.preventDefault();
                e.stopPropagation();
                break;
        }
    }

    updateValue(e: any) {
        //e.preventDefault();
        //e.stopPropagation();
        console.log("Edit Done");
        let val: any;
        switch(e.currentTarget.type){
            case "date":
                let dt: Date = new Date(e.currentTarget.value);
                if(!isNaN(dt.getTime()) && dt.getTime() > 0){
                    val = dt;
                }
                break;
            case "checkbox":
                val=e.currentTarget.checked;
                break;
            case "number":
                val=parseFloat(e.currentTarget.value);
                break;
            case "text":
            default:
                val = e.currentTarget.value;
                break;
        }
        const root: SFT = this.props.root;
        const row: SearchFilterTableRow = this.props.row;
        let objData: FlowObjectData = root.rowMap.get(row.props.id)?.objectData;
        root.selectedRow = objData.externalId;
        root.lastRememberedRow = root.selectedRow;
        //if(this.state.currentValue !== val){
            if(!root.modifiedRows.has(objData.externalId)){
                let clone: FlowObjectData = objData.clone();
                clone.externalId = objData.externalId;
                clone.internalId = objData.internalId;
                root.modifiedRows.set(clone.externalId, clone);
            }
            objData = root.modifiedRows.get(objData.externalId);
            objData.properties[this.props.fdc.developerName].value = val;
            root.saveModified();
            this.setState({currentValue: val});
        //}
        
    }

    onBlur(e: any) {
        this.setState({isEditing: false});
    }

    rollBack(e: any){
        //e.preventDefault();
        e.stopPropagation();
        console.log("Rollback");
        const root: SFT = this.props.root;
        const row: SearchFilterTableRow = this.props.row;
        const objData: FlowObjectData = root.rowMap.get(row.props.id)?.objectData;
        const modObjData: FlowObjectData = root.modifiedRows.get(row.props.id);
        const fdc: FlowDisplayColumn = this.props.fdc;
        modObjData.properties[fdc.developerName].value = objData.properties[fdc.developerName].value;
        let anyChanges: boolean = false;
        Object.keys(modObjData.properties).forEach((developerName: string) => {
            let val1: any;
            let val2: any;
            switch(modObjData.properties[developerName].contentType){
                case eContentType.ContentDateTime:
                    val1=(modObjData.properties[developerName].value as Date).getTime();
                    val2=(objData.properties[developerName].value as Date).getTime();
                    break;
                default:
                    val1=modObjData.properties[developerName].value;
                    val2=objData.properties[developerName].value;
                    break;
            }
            if(val1 !== val2){
                anyChanges=true;
            }
        })
        if(anyChanges===false){
            //remove it
            root.modifiedRows.delete(row.props.id);
        }
        root.saveModified();
        this.forceUpdate();
    }

    formatValue(fdc: FlowDisplayColumn, root: SFT, row: FlowObjectData, isModified: boolean): any {
        let result: any;
        let rowClass: string = "";
        let cellClass: string = "";
        let col: FlowObjectDataProperty;
        let onEdit: any;
        if(fdc.isEditable){
            onEdit = this.editColumn;
        }

        let rollback: any;
        if(isModified){
            rollback=(
                <FontAwesomeIcon 
                    style={{margin: "auto 0", cursor: "pointer"}}
                    icon={faClockRotateLeft}
                    onClick={this.rollBack}
                    title="Revert changes"
                />
            );
            rowClass += "modified";
            cellClass+= "modified";
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
                        id: row.externalId,
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
                            if(this.state.isEditing){
                                result = (
                                    <input 
                                        type="date"
                                        defaultValue={dt?.toISOString().substring(0,10)}
                                        onBlur={this.updateValue}
                                        onKeyUp={this.keyDown}
                                        autoFocus={true}
                                    />
                                );
                            }
                            else {
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
                                        <div style={{display: "flex", flexDirection: "row"}}  onClick={onEdit}>
                                            <span
                                                className="sft-table-cell-text"
                                                onClick={onEdit}
                                            >
                                                {str}
                                            </span>
                                            {rollback}
                                        </div>
                                    );
                                } else {
                                    result = (
                                        <div style={{display: "flex", flexDirection: "row"}}  onClick={onEdit}>
                                                <span
                                                    className="sft-table-cell-text"
                                                    
                                                />
                                                {rollback}
                                        </div>
                                    );
                                    <span 
                                        className="sft-table-cell-text" 
                                        onClick={
                                            onEdit
                                        }/>;
                                }
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
                                    
                                    if(this.state.isEditing){
                                        result = (
                                            <input 
                                                type="text"
                                                defaultValue={col.value as string}
                                                onChange={this.updateValue}
                                                onBlur={this.onBlur}
                                                onKeyUp={this.keyDown}
                                                autoFocus={true}
                                            />
                                        );
                                    }
                                    else {
                                        result = (
                                            <div style={{display: "flex", flexDirection: "row"}}  onClick={onEdit}>
                                                <span
                                                    className="sft-table-cell-text"
                                                    
                                                >
                                                    {(col.value as string)}
                                                </span>
                                                {rollback}
                                            </div>
                                        );
                                    }
                                    break;
                            }

                            break;
                        case eContentType.ContentNumber:
                            if(this.state.isEditing){
                                result = (
                                    <input 
                                        type="number"
                                        value={col.value as number}
                                        onChange={this.updateValue}
                                        onBlur={this.onBlur}
                                        onKeyUp={this.keyDown}
                                        autoFocus={true}
                                    />
                                );
                            }
                            else {
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
                            }
                            break;
                        case eContentType.ContentBoolean:
                            if(fdc.isEditable){
                                result = (
                                    <input 
                                        type="checkbox"
                                        className="sft-table-cell-text sft-table-cell-boolean sft-checkbox"
                                        checked={col.value as boolean}
                                        onChange={this.updateValue}
                                        onKeyUp={this.keyDown}
                                    />
                                );
                            }
                            else {
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

    render(){
        const root: SFT = this.props.root;
        const row: SearchFilterTableRow = this.props.row;
        const objData: FlowObjectData = root.rowMap.get(row.props.id)?.objectData;
        const modObjData: FlowObjectData = root.modifiedRows.get(objData.externalId);
        const fdc: FlowDisplayColumn = this.props.fdc;
        let modified: boolean = false;
        if(modObjData){
            switch(fdc.contentType){
                case eContentType.ContentDateTime:
                    if((modObjData.properties[fdc.developerName].value as Date).getTime() !== (objData.properties[fdc.developerName].value as Date).getTime()){
                        modified=true;
                    }
                    break;
                default:
                    if(modObjData.properties[fdc.developerName].value !== objData.properties[fdc.developerName].value){
                        modified=true;
                    }
                    break;  
            }
        }
        //let col: FlowObjectDataProperty = objData?.properties[this.props.fdc.developerName]
        let cellResult: any = this.formatValue(fdc, root, modObjData || objData, modified);
        //!!! need to pass cellResult.rowClass back up to parent
        if(cellResult.rowClass && cellResult.rowClass.length > 0){
            row.addRowClass(cellResult.rowClass);
        }
        
        const val: any = cellResult.result;
        return(
            <td
                key={fdc.developerName}
                className={"sft-table-cell " + cellResult.cellClass}
            >
                {val}
            </td>
        );
    }
}