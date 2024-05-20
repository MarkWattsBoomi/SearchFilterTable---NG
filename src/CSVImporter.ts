import { Csv, Workbook } from "exceljs";
import { Readable, Stream } from "stream";
import { Buffer} from "buffer";
import * as fs from "fs";
import { FlowObjectDataArray } from "fcmlib/lib/FlowObjectDataArray";
import { FlowObjectData } from "fcmlib/lib/FlowObjectData";
import { FlowObjectDataProperty } from "fcmlib/lib/FlowObjectDataProperty";
import { eContentType } from "fcmlib/lib/FCMNew";

export class SFTCSVCell {
    value: string;

    constructor(value: string){
        this.value = value;
    }
}
export class SFTCSVRow {
    cells: Map<string,SFTCSVCell>;

    constructor(){
        this.cells = new Map();
    }
}

export class SFTCSVFile {
    headers: SFTCSVCell[];
    rows: SFTCSVRow[];
    badRows: string[];

    
    ingestFile(file: string) {
        //clean
        this.headers = [];
        this.rows = [];
        this.badRows = [];
        // split rows
        let srcCols: string[];
        let srcRows: string[] = file.split("\r\n");
        if(srcRows.length>0){
            srcCols = srcRows[0].split(",");
            srcCols.forEach((srcCol : string) => {
                srcCol = srcCol.replace(/^\"(.+)\"$/,"$1");
                this.headers.push(new SFTCSVCell(srcCol));
            });
        }
        for(let rowPos = 1 ; rowPos < srcRows.length ; rowPos++) {
            srcCols = srcRows[rowPos].split(",");
            if(srcCols.length===this.headers.length) {
                let newRow: SFTCSVRow = new SFTCSVRow();
                for(let cellPos = 0 ; cellPos < srcCols.length ; cellPos++) {
                    let srcCol: string = srcCols[cellPos].replace(/^\"(.+)\"$/,"$1");
                    newRow.cells.set(this.headers[cellPos].value, new SFTCSVCell(srcCol));
                }
                this.rows.push(newRow);
            }
            else {
                this.badRows.push("Row " + rowPos + " " + srcRows[rowPos]);
                //bad row
            }
        }

    }

    toFlowObjectDataArray(objectDataTypeName: string) : FlowObjectDataArray {
        let objDataArray: FlowObjectDataArray = new FlowObjectDataArray();
        this.rows.forEach((row: SFTCSVRow) => {
            let objData: FlowObjectData = FlowObjectData.newInstance(objectDataTypeName);
            this.headers.forEach((header: SFTCSVCell) => {
                objData.addProperty(FlowObjectDataProperty.newInstance(header.value,eContentType.ContentString, row.cells.get(header.value).value));
            });
            objData.isSelected = true;
            objDataArray.addItem(objData);
        });
        return objDataArray;
    }
}

export class STFCSVImporter {

    static async loadCSV() : Promise<SFTCSVFile>{
        let pickerOpts: any = {
            types: [
                {
                    description: 'CSV Files',
                    accept: {
                        'text/csv': ['.csv'],
                    },
                },
            ],
            excludeAcceptAllOption: true,
            multiple: false,
        };
        
        try{
            let handle: any[] = await (window as any).showOpenFilePicker(pickerOpts);
            if(handle[0].kind === 'file') {
                let file: File = await handle[0].getFile();
                let data: string = await STFCSVImporter.fileReadAsText(file);
                let csv: SFTCSVFile = new SFTCSVFile();
                csv.ingestFile(data);
                
                return csv;
            }
        }
        catch(e) {
            console.log(e);
            return null;
        }
    }

    static async fileReadAsBinary(file: any): Promise<any> {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException('Problem reading file'));
            };
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsArrayBuffer(file);
        });
    }

    static async fileReadAsText(file: any): Promise<any> {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException('Problem reading file'));
            };
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsText(file);
        });
    }
}