import { FlowDisplayColumn } from 'fcmlib/lib/FlowDisplayColumn';
import {RowItem} from './RowItem';
import { FlowObjectData } from 'fcmlib/lib/FlowObjectData';
import { eContentType } from 'fcmlib/lib/FCMNew';
import { FlowObjectDataArray } from 'fcmlib/lib/FlowObjectDataArray';

export class ModelExporter {

    static export(columns: Map<string, FlowDisplayColumn>, data: Map<string, RowItem>, fileName: string) {
        let file: string = '';
        let body: string = '';
        let headers: string = '';
        let row: string = '';

        data.forEach((item: RowItem) => {

            if (headers.length === 0) {
                headers = this.buildHeaders(columns, item.objectData);
            }
            row = this.buildRow(columns, item.objectData);
            body += row;
        });

        let BOM = "\uFEFF";
        file = BOM + headers + body;
        
        const blob = new Blob([file], { type: 'text/csv;charset=utf-8' });
        // if (navigator.msSaveBlob) { // IE 10+
        //    navigator.msSaveBlob(blob, fileName);
        // } else {
        const link = document.createElement('a');
        if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        // }
    }

    static buildHeaders(cols: Map<string, FlowDisplayColumn>, values: FlowObjectData): string {
        let headers: string = '';
        cols.forEach((col: FlowDisplayColumn) => {
            switch (col.contentType) {
                case eContentType.ContentList:
                    const children: FlowObjectDataArray = values.properties[col.developerName].value as FlowObjectDataArray;
                    children.items.forEach((item: FlowObjectData) => {
                        if (headers.length > 0) {
                            headers += ',';
                        }
                        headers += '"' + item.properties['ATTRIBUTE_DISPLAY_NAME'].value + '"';
                    });

                    break;

                default:
                    if (headers.length > 0) {
                        headers += ',';
                    }
                    headers += '"' + col.label + '"';
                    break;
            }

        });
        headers += '\r\n';
        return headers;
    }

    static buildRow(cols: Map<string, FlowDisplayColumn>, values: FlowObjectData): string {
        let row: string = '';
        cols.forEach((col: FlowDisplayColumn) => {
            switch (col.contentType) {
                case eContentType.ContentList:
                    const children: FlowObjectDataArray = values.properties[col.developerName].value as FlowObjectDataArray;
                    children.items.forEach((item: FlowObjectData) => {
                        if (row.length > 0) {
                            row += ',';
                        }
                        row += '"' + item.properties['ATTRIBUTE_VALUE'].value + '"';
                    });

                    break;
                case eContentType.ContentDateTime:
                    if (row.length > 0) {
                        row += ',';
                    }
                    row += '"' + (values.properties[col.developerName].value as Date).toISOString() + '"';
                    break;    
                default:
                    if (row.length > 0) {
                        row += ',';
                    }
                    row += '"' + values.properties[col.developerName].value + '"';
                    break;
            }

        });
        row += '\r\n';
        return row;
    }
}
