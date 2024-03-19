import { FlowDisplayColumn } from 'fcmlib/lib/FlowDisplayColumn';
import {RowItem} from './RowItem';
import { FlowObjectData } from 'fcmlib/lib/FlowObjectData';
import { eContentType } from 'fcmlib/lib/FCMNew';
import { FlowObjectDataArray } from 'fcmlib/lib/FlowObjectDataArray';
import { Workbook, Worksheet } from 'exceljs';

export class SpreadsheetExporter {

    static async export(
            columns: Map<string, FlowDisplayColumn>, 
            allRows: Map<string, RowItem>, 
            partitions: Map<string,any>,
            fileName: string
        ) {
        let file: string = '';
        let body: string = '';
        let headers: string = '';
        let row: string = '';
        let rows: any[];
        let wb: Workbook = new Workbook();
        let sheet: Worksheet;

        //build the generic columns row 
        let cols: any[] = [];
        columns?.forEach((col: FlowDisplayColumn) => {
            cols.push(col.label || col.developerName);
        });

        // temp holder for per partition rows
        

        if(partitions && partitions.size > 1) {
            let items: Map<string,RowItem>
            //one sheet per partition
            partitions.forEach((partition: Map<string, any>, key: string)=>{
                items = new Map();
                sheet = wb.addWorksheet(key);
                rows = [];
                rows.push(cols);
                allRows.forEach((row: RowItem)=>{
                    if(partition.has(row.id)){
                        items.set(row.id, row)
                    }
                });
                rows.push(...this.buildRows(columns, items));
                sheet.addRows(rows);
            });
        }
        else {
            // just one sheet
            sheet = wb.addWorksheet("All");
            rows = [];
            rows.push(cols);
            rows.push(...this.buildRows(columns, allRows));
            sheet.addRows(rows);
        }

        let buffer = await wb.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' });
        const link = document.createElement('a');
        if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName + ".xlsx");
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
    }
    
    static buildRows(cols: Map<string, FlowDisplayColumn>, items: Map<string,RowItem>) : any[] {
        let rows: any[] = [];
        items.forEach((item: RowItem) => {
            let row: any[] = [];
            let objData: FlowObjectData = item.objectData;
            cols.forEach((col: FlowDisplayColumn) => {
                switch (col.contentType) {
                    case eContentType.ContentString:
                        row.push(objData.properties[col.developerName].value);
                        break;

                    default:
                        row.push(objData.properties[col.developerName].value);
                        break;
                }

            });
            rows.push(row);
        });
        return rows;
    }
        
        /*
        let buffer = await wb.csv.writeBuffer();
        const blob = new Blob([buffer], { type: 'text/csv;charset=utf-8' });
        const link = document.createElement('a');
        if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', this.records.model.name + ".csv");
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        */
            /*
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
        // }*/
    
}


