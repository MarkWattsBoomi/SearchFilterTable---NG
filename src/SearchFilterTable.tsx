import * as React from 'react';
import {CellItem} from './CellItem';
import {SFTColumnCriteria, eColumnComparator} from './ColumnCriteria';
import {SFTColumnFilters,  eFilterEvent, eSortDirection } from './ColumnFilters';
import {ColumnPickerForm} from './ColumnPickerForm';
import { ColumnRule, ColumnRules } from './ColumnRule';
import {FilterManagementForm} from './FilterManagementForm';
import {ModelExporter} from './ModelExporter';
import {MultiSelect} from './MultiSelect';
import {RowItem} from './RowItem';
import './SearchFilterTable.css';
import {SearchFilterTableFooter} from './SearchFilterTableFooter';
import {SearchFilterTableHeader} from './SearchFilterTableHeader';
import {SearchFilterTableHeaders} from './SearchFilterTableHeaders';
import {SearchFilterTableRibbon} from './SearchFilterTableRibbon';
import {SearchFilterTableRibbonSearch} from './SearchFilterTableRibbonSearch';
import {SearchFilterTableRow} from './SearchFilterTableRow';
import {SFTCommonFunctions} from './CommonFunctions';
import { FCMContextMenu } from 'fcmkit/lib/ContextMenu/FCMContextMenu';
import { FCMModal } from 'fcmkit/lib/ModalDialog/FCMModal';
import { FCMModalButton } from 'fcmkit/lib/ModalDialog/FCMModalButton';
import { GenericDB } from './DB/GenericDB';
import { SearchFilterTableFooterNav } from './SearchFilterTableFooterNav';
import { FCMCore } from 'fcmlib/lib/FCMCore';
import { FlowDisplayColumn } from 'fcmlib/lib/FlowDisplayColumn';
import { FlowValue } from 'fcmlib/lib/FlowValue';
import { FlowOutcome } from 'fcmlib/lib/FlowOutcome';
import { FlowObjectData } from 'fcmlib/lib/FlowObjectData';
import { FlowObjectDataArray } from 'fcmlib/lib/FlowObjectDataArray';
import { eContentType } from 'fcmlib/lib/FCMNew';
import { FlowObjectDataProperty } from 'fcmlib/lib/FlowObjectDataProperty';
import { SFTColumnFilter } from './ColumnFilter';
import { SpreadsheetExporter } from './SpreadsheetExporter';
import { SFTCSVFile, STFCSVImporter } from './CSVImporter';
import { Workbook } from 'exceljs';

// declare const manywho: IManywho;
declare const manywho: any;



export enum ePaginationMode {
    none,
    local,
    external
}

export class SFT extends React.Component<any,any> {
    version: string = '1.0.0';
    context: any;
    currentMapElementId: string;

    component: FCMCore;

    contextMenu: FCMContextMenu;
    messageBox: FCMModal;
    form: any;  // this is the form being shown by the message box

    // this contains the master copy of the model data, it doesn't change unless data reloaded
    rowMap: Map<string, any> = new Map();

    // this contains the display time subset of rowMap which is filtered & sorted, it changes with each query etc,  Used to build the actual rows
    currentRowMap: Map<string, any> = new Map();
    // currentRowMap: Array<string> = [];//Map<string,any> = new Map();

    // this contains the partitioned pages
    partitionedRowMaps: Map<string, Map<string, any>> = new Map();
    selectedPartition: string;

    // this holds the max items per page
    maxPageRows: number = 5;

    // this holds the items in pages
    currentRowPages: Array<Map<string, any>> = [];

    // this holds the current pagination page number
    currentRowPage: number = 0;

    // this contains the display time subset of currentRowMap which is selected, each query removes any items no longer in results
    selectedRowMap: Map<string, any> = new Map();

    // these are the child row React objects, they are re-populated with each filter, search etc
    rows: Map<string, SearchFilterTableRow> = new Map();

    // these are the html child elements used in render.  Built from currentRowMap
    rowElements: any[];

    // this is the column definition map, it doesn't change unless data reloaded
    colMap: Map<string, FlowDisplayColumn> = new Map();

    // this is the column value map, it conatins all possible values for each column, it doesn't change unless data reloaded
    colValMap: Map<string, Map<any, any>> = new Map();

    // this is the column value map, it conatins all possible values for each column, it doesn't change unless data reloaded
    userColumns: string[] = [];

    // this is the table headers React component
    headers: SearchFilterTableHeaders;

    // The title bar
    titleElement: any;

    // this is the table headers html element
    headersElement: any;

    // this is the footer React component
    ribbon: SearchFilterTableRibbon | SearchFilterTableRibbonSearch;

    // this is the ribbon html element
    ribbonElement: any;

    // this is the footer React component
    footer: SearchFilterTableFooter | SearchFilterTableFooterNav;

    // this is the footer html element
    footerElement: any;

    // these are the child column React objects, it doesn't change unless data reloaded
    cols: Map<string, any> = new Map();

    // these are the html column header child elements used in render.  Built from colMap
    colElements: any[];
    
    // these are the filter & sort controllers
    filters: SFTColumnFilters = new SFTColumnFilters(this);

    // the scrolling element
    scroller: HTMLDivElement;

    // dynamic columns flag
    dynamicColumns: boolean = false;

    // max col text size before converting to button
    maxColText: number = -1;

    // column formatting rules map - allows us to specify special actions on clicking a cell
    columnRules: Map<string, ColumnRule> = new Map();
    manywho: any;

    retries: number = 0;

    loaded: Boolean = false;
    runAgain: boolean = false;

    supressedOutcomes: Map<string,boolean> = new Map();;

    rowRememberColumn: string;
    lastRememberedRow: string;
    tableBody: any;

    selectedRow: string;

    // flag to switch on / off all pagination
    paginationMode: ePaginationMode;
    previousPageOutcome: string;
    nextPageOutcome: string;

    //icon suffix to allow optional per org icons
    iconSuffix: string;

    // field to tell us what page we are on
    externalPage: string;
    externalPaginationPage: number;

    //beta
    db: GenericDB;

    // title value
    title: string;

    //core buttons
    filterIcon: string;
    clearFilterIcon: string;
    downloadIcon: string;
    colpickIcon: string;

    mounting: boolean = false;
    preLoaded: boolean = false;

    topRowComponents: any;

    supressEvents: boolean = false;

    oldModel: FlowObjectDataArray;

    outcomeIcons: Map<string,string>;

    exportFileName: string;

    constructor(props: any) {
        super(props);
        this.component = this.props.parent;

        //this.flowMoved = this.flowMoved.bind(this);
        //this.flowMoving = this.flowMoving.bind(this);
        this.showContextMenu = this.showContextMenu.bind(this);
        this.hideContextMenu = this.hideContextMenu.bind(this);
        
        this.coreLoad = this.coreLoad.bind(this);
        this.buildCoreTable = this.buildCoreTable.bind(this);
        this.buildRibbon = this.buildRibbon.bind(this);
        this.buildFooter = this.buildFooter.bind(this);

        this.filtersChanged = this.filtersChanged.bind(this);
        this.globalFilterChanged = this.globalFilterChanged.bind(this);
        this.partitionFilterChanged = this.partitionFilterChanged.bind(this);
        this.manageFilters = this.manageFilters.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
        this.cancelFilters = this.cancelFilters.bind(this);

        this.toggleSelect = this.toggleSelect.bind(this);
        this.toggleSelectAll = this.toggleSelectAll.bind(this);

        this.firstPage = this.firstPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.gotoPage = this.gotoPage.bind(this);

        this.maxPerPageChanged = this.maxPerPageChanged.bind(this);

        this.doExport = this.doExport.bind(this);
        this.doSpreadsheet = this.doSpreadsheet.bind(this);

        this.doImport = this.doImport.bind(this);
        this.doExportSample = this.doExportSample.bind(this);

        this.playAudio = this.playAudio.bind(this);
        this.playVideo = this.playVideo.bind(this);

        this.showColumnPicker = this.showColumnPicker.bind(this);
        this.applyColumns = this.applyColumns.bind(this);
        this.cancelColumns = this.cancelColumns.bind(this);
        this.columnsReordered = this.columnsReordered.bind(this);

        this.cancelOutcomeForm = this.cancelOutcomeForm.bind(this);
        this.okOutcomeForm = this.okOutcomeForm.bind(this);

        this.bringColumnIntoView = this.bringColumnIntoView.bind(this);
        this.selectRow = this.selectRow.bind(this);
        this.refreshRows = this.refreshRows.bind(this);

        this.loadSelected = this.loadSelected.bind(this);
        this.loadSingleSelected = this.loadSingleSelected.bind(this);

        this.loadModelData = this.loadModelData.bind(this);

        let pmode: string = this.component.getAttribute('PaginationMode', "local").toLowerCase();
        switch(pmode) {
            case "none":
                this.paginationMode = ePaginationMode.none;
                break;
            case "local":
                this.paginationMode = ePaginationMode.local;
                break;
            case "external":
                this.paginationMode = ePaginationMode.external;
                this.previousPageOutcome = this.component.getAttribute('PreviousPageOutcome');
                this.supressedOutcomes.set(this.previousPageOutcome,true);
                this.nextPageOutcome = this.component.getAttribute('NextPageOutcome');
                this.supressedOutcomes.set(this.nextPageOutcome,true);
                this.externalPage = this.component.getAttribute('ExternalPaginationPage');
                break;
        }

        this.iconSuffix=this.component.getAttribute("iconSuffixValue","");
        this.title=this.component.label;
        this.filterIcon=this.component.getAttribute("filterIcon","");
        this.clearFilterIcon=this.component.getAttribute("clearFilterIcon","");
        this.downloadIcon=this.component.getAttribute("exportIcon","");
        this.colpickIcon=this.component.getAttribute("colpickIcon","");

        this.maxPageRows = parseInt(localStorage.getItem('sft-max-' + this.component.id) || this.component.getAttribute('PaginationSize', undefined) || '10');
        localStorage.setItem('sft-max-' + this.component.id, this.maxPageRows.toString());

        this.rowRememberColumn = this.component.getAttribute("RetainRowColumn");
        if(this.rowRememberColumn){
            this.lastRememberedRow = sessionStorage.getItem('sft-lastrow-' + this.component.id);
        }
        
        this.exportFileName=this.component.getAttribute("exportFileName","export");
    }

    async componentDidMount() {
        
        if(this.mounting === true || this.supressEvents === true) {
            if(this.supressEvents===true) {this.supressEvents=false}
            //this.runAgain = true;
            return
        }
        else {
            await this.coreLoad();
        }
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return true;
    }

    async coreLoad() {
        this.mounting = true;
        console.log(this.component.developerName + "=" + this.component.id);
        // will get this from a component attribute
        this.loaded=false;
        // build tree
        this.maxPageRows = parseInt(localStorage.getItem('sft-max-' + this.component.id || this.component.getAttribute('PaginationSize', undefined) || '10'));
        this.filters.loadFromStorage(localStorage.getItem('sft-filters-' + this.component.id));

        // calculate if we are in dynamic column mode
        if (this.component.attributes.UserColumnsValue) {
            this.dynamicColumns = true;
        } // it will have defaulted to false

        if (this.component.attributes.MaxColumnTextLength) {
            this.maxColText = parseInt(this.component.attributes.MaxColumnTextLength);
        } // it defaults to -1 which means dont apply this
        this.columnRules = await ColumnRules.parse(this.component.getAttribute('ColumnRules', '{}'), this);
        await this.preLoad();
        await this.buildCoreTable();
        this.loaded = true;
        this.mounting = false;
        await this.buildTableRows();
        if(this.runAgain){
            this.runAgain=false;
            //await this.preLoad();
            //await this.buildCoreTable();
            await this.buildTableRows();
        }        
    }

    async componentUpdated(changeDetected: boolean) {
        let JSONStateName: string = this.component.getAttribute('JSONModelValue');
        let modelTypeName: string = this.component.getAttribute('ModelTypeName',"GetOpportunities RESPONSE - Opportunity");
        let model: FlowObjectDataArray;
        let redraw: boolean = false;
        if(JSONStateName) {
            let jsonField: FlowValue = await this.component.getValue(JSONStateName);
            let jsonString: string = jsonField.value as string;
            if(jsonString && jsonString.length > 0) {
                model = FlowObjectDataArray.fromJSONString(jsonField.value as string, this.component.getAttribute('JSONModelPrimaryKey'), this.component.columns, modelTypeName);
                
                if(model.items.length !== this.rowMap.size) {
                    redraw=true;
                }
            }
        }
        else{
            //compare current rows to what the componentObjectData would generate
            model = this.component.objectData;
            if(JSON.stringify(model) != JSON.stringify(this.oldModel || {})){
                redraw=true;
            }

        }
        if (this.component.attributes.UserColumnsValue && this.component.attributes.UserColumnsValue !== 'LOCAL_STORAGE') {
            const userFields: FlowValue = await this.component.getValue(this.component.attributes.UserColumnsValue);
            if (userFields && (userFields.value as string).length > 0) {
                let userFieldsVal = (userFields.value as string).replaceAll(" ","");
                let currentCols = this.userColumns.join(",").replaceAll(" ","");
                if(userFieldsVal !== currentCols){
                    redraw=true;
                }
            }
        }
        if(this.loaded){
            if(redraw === true) {
                await this.coreLoad();;
            }
            else{
                await this.preLoad();
                this.buildRibbon();
                //this.saveSelected();
                this.forceUpdate();
            }
        }
    }

    async preLoad() : Promise<any> {
        //preload any column rule values & inflate any props
        //let flds: Map<string,FlowValue> = new Map();
        //let alreadyDone: string[] = [];
        this.preLoaded = false;
        this.outcomeIcons = new Map();
        let outcomes: string[] = Array.from(Object.keys(this.component.outcomes));
        for(let pos = 0 ; pos < outcomes.length ; pos++) {
            let outcome: FlowOutcome = this.component.outcomes[outcomes[pos]];
            if (outcome.attributes.rule && outcome.attributes.rule.value.length > 0) {
                try {
                    const rule = JSON.parse(outcome.attributes.rule.value);
                    rule.field = await this.component.inflateValue(rule.field, true);
                    rule.value = await this.component.inflateValue(rule.value, true);
                }
                catch (e) {
                    console.log('The rule on outcome ' + outcome.developerName + ' is invalid');
                }
            }
            if(outcome.attributes.iconValue && outcome.attributes.iconValue.value.length>0){
                let val: string = await this.component.inflateValue(outcome.attributes.iconValue.value);
                this.component.outcomes[outcomes[pos]].attributes.iconValue.value = val;
                this.outcomeIcons.set(outcome.id, val);
            }
            else{
                this.outcomeIcons.set(outcome.id, outcome.attributes.icon?.value);
            }
        }
        //now parse all columnRules
        if(this.columnRules && this.columnRules.size > 0) {
            this.columnRules.forEach((rule: ColumnRule) => {
                if(rule.mode?.toLowerCase() === "outcome") {
                    this.supressedOutcomes.set(rule.outcomeName,true);
                }
            });
        }
        this.supressedOutcomes.set("OnSelect",true);
        
        //other inflations
        this.title = await this.component.inflateValue(this.title);
        this.iconSuffix = await this.component.inflateValue(this.iconSuffix);
        this.filterIcon = await this.component.inflateValue(this.filterIcon);
        this.clearFilterIcon = await this.component.inflateValue(this.clearFilterIcon);
        this.downloadIcon = await this.component.inflateValue(this.downloadIcon);
        this.colpickIcon = await this.component.inflateValue(this.colpickIcon);
        this.topRowComponents = this.component.getAttribute("TopRowComponents");
        this.topRowComponents = await this.component.inflateValue(this.topRowComponents);
        this.exportFileName = await this.component.inflateValue(this.exportFileName);
        if(this.topRowComponents && this.topRowComponents.length>0){
            try {
                this.topRowComponents = JSON.parse(this.topRowComponents);
                for(let pos = 0 ; pos < this.topRowComponents.length ; pos++) {
                    this.topRowComponents[pos].state = await this.component.inflateValue(this.topRowComponents[pos].state);
                    this.topRowComponents[pos].value = await this.component.getValue(this.topRowComponents[pos].state);
                    console.log("TRC " + this.topRowComponents[pos].label + " - pre-loading value to " + this.topRowComponents[pos].value.value);
                };
            }
            catch(e) {
                console.log("Failed to parse 'TopRowComponents'")
                this.topRowComponents = [];
            }
        }

        if(this.paginationMode===ePaginationMode.external){
            if(this.externalPage) {
                let pg: string = await this.component.inflateValue(this.externalPage);
                this.externalPaginationPage = parseInt(pg);
                if(isNaN(this.externalPaginationPage)){this.externalPaginationPage=1}
            }
        }

        this.preLoaded = true;
        this.ribbon?.generateButtons();
        return true;
    }

    showInfo() {
        
        const content = (
            <div
                dangerouslySetInnerHTML={{__html: this.component.content}}
            />
        );
        this.messageBox.showDialog(
            null,
            'Information', 
            content, 
            [new FCMModalButton('Close', this.messageBox.hideDialog)]
        );
    }

    showColumnPicker() {
        const content = (
            <ColumnPickerForm
                root={this}
                ref={(element: ColumnPickerForm) => {this.form = element; }}
            />
        );
        this.messageBox.showDialog(
            null,
            'Select Columns', 
            content, 
            [new FCMModalButton('Apply', this.applyColumns), new FCMModalButton('Cancel', this.cancelColumns)]);
    }

    cancelColumns() {
        this.messageBox.hideDialog();
        this.form = undefined;
    }

    async applyColumns() {
        this.userColumns = this.form.selectedColumns;
        this.saveUserColumns();
        this.messageBox.hideDialog();
        this.form = undefined;
        this.headers.forceUpdate();
        this.rows.forEach((row: SearchFilterTableRow) => {
            row.forceUpdate();
        });
        // this.forceUpdate();

    }

    async columnsReordered() {
        this.saveUserColumns();
        this.headers.forceUpdate();
        this.rows.forEach((row: SearchFilterTableRow) => {
            row.forceUpdate();
        });
        // this.forceUpdate();
    }

    getColumnUniques(name: string, criteria: SFTColumnCriteria): any {
        return (
           <MultiSelect
                id={name}
                allItems={this.colValMap.get(name)}
                selectedItems={criteria}
           />
        );
    }

    filtersChanged(key: string, event: eFilterEvent) {
        // get the column header for key column if exists
        this.headers?.forceUpdate();
        localStorage.setItem('sft-filters-' + this.component.id, this.filters.getForStorage());
        switch (event) {
            case eFilterEvent.sort:
                if (this.filters.get(key).sort !== eSortDirection.none) {
                    const col: SearchFilterTableHeader = this.headers.headers.get(key);
                }
                this.sortRows();
                this.bringColumnIntoView(key)
                break;

            case eFilterEvent.filter:
                this.filterRows();
                break;
        }
    }

    bringColumnIntoView(col: any) {
        let header: any =  this.headers.headers.get(col);
        header?.th?.scrollIntoView({inline: "nearest", block: "start", behavior: "auto"});
    }

    globalFilterChanged(value: string) {
        // do some other search
        this.filters.globalCriteria = value;
        this.filtersChanged('', eFilterEvent.filter);
    }

    partitionFilterChanged(key: string) {
        this.selectedPartition = key;
        let partitionField: string = this.component.getAttribute("partitionColumn");
        if(this.selectedPartition){
            this.filters.items.set(
                partitionField, 
                new SFTColumnFilter(
                    partitionField,
                    this.filters, 
                    undefined, 
                    [new SFTColumnCriteria(eColumnComparator.equalTo, this.selectedPartition)]
                )
            )
        }
        else {
            this.filters.filterClear(partitionField); 
        }
        this.filtersChanged('', eFilterEvent.filter);
    }

    manageFilters() {

        const content = (
            <FilterManagementForm
                parent={this}
                ref={(form: FilterManagementForm) => {this.form = form; }}
            />
        );
        this.messageBox.showDialog(
            null,
            'Manage Filters', 
            content, 
            [new FCMModalButton('Apply', this.applyFilters), new FCMModalButton('Cancel', this.cancelFilters)]);
    }

    cancelFilters() {
        this.form = undefined;
        this.messageBox.hideDialog();
    }

    applyFilters() {
        this.filters = this.form.newFilters;
        this.form = undefined;
        this.messageBox.hideDialog();
        this.filtersChanged('', eFilterEvent.filter);
    }

    maxPerPageChanged(max: number) {
        this.maxPageRows = max || 10;
        localStorage.setItem('sft-max-' + this.component.id, this.maxPageRows.toString());
        this.paginateRows();
        this.buildTableRows();
        this.forceUpdate();
    }

    // stores / deletes a ref to a table row as it's created or destroyed
    setRow(key: string, element: SearchFilterTableRow) {
        if (element) {
            this.rows.set(key, element);
        } else {
            if (this.rows.has(key)) {
                this.rows.delete(key);
            }
        }
    }

    // stores / deletes a ref to the column headers
    setRibbon(element: SearchFilterTableRibbon | SearchFilterTableRibbonSearch) {
        if(element) this.ribbon = element;
    }

    // stores / deletes a ref to the column headers
    setHeaders(element: SearchFilterTableHeaders) {
        if(element)this.headers = element;
    }

    // stores / deletes a ref to the footer component
    setFooter(element: SearchFilterTableFooter | SearchFilterTableFooterNav) {
        if(element)this.footer = element;
    }

    

    async loadUserColumns() {
        let userFieldsVal: string = '';
        if (this.component.attributes.UserColumnsValue !== 'LOCAL_STORAGE') {
            const userFields: FlowValue = await this.component.getValue(this.component.attributes.UserColumnsValue);
            if (userFields && (userFields.value as string).length > 0) {
                userFieldsVal = userFields.value as string;

            }
        } else {
            userFieldsVal = localStorage.getItem('sft_' + this.component.id + '_cols') || '';
        }
        let cols: string[] = [];
        if (userFieldsVal && userFieldsVal.length > 0) {
            cols = userFieldsVal.split(',');
        }
        this.userColumns = [];
        cols.forEach((col: string) => {
            this.userColumns.push(col.trim());
        });
    }

    async saveUserColumns() {
        let userCols = '';
        this.userColumns.forEach((col: string) => {
            if (userCols.length > 0) {
                userCols += ',';
            }
            if (col) {
                userCols += col.trim();
            } else {
                console.log('One of the columns in the table had a null name.  Check the table display columns settings in Flow');
            }
        });

        if (this.component.attributes.UserColumnsValue !== 'LOCAL_STORAGE') {
            const userFields: FlowValue = await this.component.getValue(this.component.attributes.UserColumnsValue);
            userFields.value = userCols;
            await this.component.setValues(userFields);
        } else {
            localStorage.setItem('sft_' + this.component.id + '_cols', userCols);
        }
    }

    

    ///////////////////////////////////////////////////////////////////////////////////////////
    // reads the model
    // constructs the a flat a map of rows ready for searching, sorting and direct access
    // also builds the display column map
    ///////////////////////////////////////////////////////////////////////////////////////////
    async buildCoreTable() {
        // await this.loadSelected();
        

        // sort display cols on order
        this.colMap = new Map();
        // use the cols from the displayColumns if defined
        let cols: FlowDisplayColumn[];
        let colMap: Map<string,FlowDisplayColumn> = new Map();;
        if (this.component.columns && this.component.columns.length > 0) {
            cols = this.component.columns?.sort((a: any, b: any) => {
                switch (true) {
                    case a.DisplayOrder > b.DisplayOrder:
                        return 1;
                    case a.DisplayOrder === b.DisplayOrder:
                        return 0;
                    default:
                        return -1;
                }
            });
            cols.forEach((col: FlowDisplayColumn) => {
                colMap.set(col.developerName, col);
            });
        } else {
            // use whole model
            if(this.component.getAttribute("ComplexColumns","false").toLowerCase() === "true"){
                let colsName: string = this.component.getAttribute("ComplexColumnsChildren","Columns");
                let colName: string = this.component.getAttribute("ComplexColumnName","Name");
                let colType: string = this.component.getAttribute("ComplexColumnType","Type");
                this.component.objectData.items?.forEach((item: FlowObjectData) => {
                    (item.properties[colsName].value as FlowObjectDataArray).items.forEach((col: FlowObjectData) => {
                        let cname: string = col.properties[colName].value as string;
                        if(!colMap.has(cname)) {
                            let cdef: any = 
                                {
                                    developerName: cname,
                                    label: cname,
                                    contentType: eContentType.ContentObject,
                                }
                            colMap.set(cname, cdef);
                        }
                    });

                    
                });
            }
            
            // this.model.dataSource
        }

        if (this.dynamicColumns === true) {
            await this.loadUserColumns();
        }

        const populateDefaults: boolean = this.dynamicColumns === false || (this.dynamicColumns === true && (this.userColumns.length === 0 || (this.userColumns.length === 1 && this.userColumns.indexOf('#BUTTONS#') >= 0)));

        if (populateDefaults) {
            this.userColumns = [];
        }

        colMap.forEach((col: FlowDisplayColumn) => {
            this.colMap.set(col.developerName, col);
            this.colValMap.set(col.developerName, new Map());
            if (populateDefaults) {
                this.userColumns.push(col.developerName);
            }
        });

        // now allow for button re-location if not already defined
        if (this.userColumns.indexOf('#BUTTONS#') < 0) {
            let outcomesPos: number = 0;
            switch (this.component.getAttribute('OutcomesPosition', '0').toLowerCase()) {
                case 'first':
                case 'start':
                case '0':
                    outcomesPos = 0;
                    break;
                case 'last':
                case 'end':
                    outcomesPos = this.userColumns.length;
                    break;
                default:
                    try {
                        outcomesPos = parseInt(this.component.getAttribute('OutcomesPosition', '0'));
                        if (outcomesPos > this.userColumns.length) {
                            outcomesPos = this.userColumns.length;
                        }
                    } catch (e) {
                        console.log('OutcomesPosition had an invalid value');
                        outcomesPos = 0;
                    }
                    break;
            }
            // insert buttons column
            this.userColumns.splice(outcomesPos, 0, '#BUTTONS#');
        }

        if (this.dynamicColumns === true && populateDefaults === true) {
            await this.saveUserColumns();
        }

        let inlineSearch: boolean = true;
        if(!this.ribbonElement) {
            switch (this.component.getAttribute('RibbonStyle', 'search')) {

                case 'search':
                    this.ribbonElement = (
                        <SearchFilterTableRibbonSearch
                            key="ribbon"
                            root={this}
                            ref={(element: SearchFilterTableRibbonSearch) => {this.setRibbon(element); }}
                        />
                    );
                    inlineSearch = false;
                    break;

                case 'ribbon':
                default:
                    this.ribbonElement = (
                        <SearchFilterTableRibbon
                            key="ribbon"
                            root={this}
                            ref={(element: SearchFilterTableRibbon) => {this.setRibbon(element); }}
                        />
                    );
                    break;
            }
        }

        if(!this.headersElement){
            this.headersElement = (
                <SearchFilterTableHeaders
                    root={this}
                    inlineSearch={inlineSearch}
                    ref={(element: SearchFilterTableHeaders) => {this.setHeaders(element); }}
                />
            );
        }

        if(!this.footerElement){
            switch (this.component.getAttribute('FooterStyle', 'default')) {
                case "default":
                    this.footerElement = (
                        <SearchFilterTableFooter
                            root={this}
                            ref={(element: SearchFilterTableFooter) => {this.setFooter(element); }}
                        />
                    );
                    break;

                case "nav":
                    this.footerElement = (
                        <SearchFilterTableFooterNav
                            root={this}
                            ref={(element: SearchFilterTableFooterNav) => {this.setFooter(element); }}
                        />
                    );
                    break; 
            }
        }
        

        if(this.rowRememberColumn){
            this.lastRememberedRow = sessionStorage.getItem('sft-lastrow-' + this.component.id);
        }

        //await this.loadModelData();
    
        // save the selected items to state
//await this.saveSelected();
        const end: Date = new Date();
    
        //load selectedSingleItem
        await this.loadSingleSelected();
        // we just loaded the core row data, trigger the filters to generate and sort the currentRowMap
        await this.loadModelData();
        await this.filterRows();
    }

    async loadModelData() {
        
        // construct Item
        
        
        let JSONStateName: string = this.component.getAttribute('JSONModelValue');
        let modelTypeName: string = this.component.getAttribute('ModelTypeName',"GetOpportunities RESPONSE - Opportunity");
        let model: FlowObjectDataArray;
        if(JSONStateName) {
            let jsonField: FlowValue = await this.component.getValue(JSONStateName);
            let jsonString: string = jsonField.value as string;
            if(jsonString && jsonString.length > 0) {
                model = FlowObjectDataArray.fromJSONString(jsonField.value as string, this.component.getAttribute('JSONModelPrimaryKey'), this.component.columns, modelTypeName);
            }
        }
        else {
            model = this.component.objectData;
        }
        // save this for posterity
        this.oldModel = model;

        //this.db = await GenericDB.newInstance(this.componentId, this.colMap);
        //this.db.ingestObjectDataArray(model);
        if(model) {
            const stateSelectedItems: Map<string, any> = await this.loadSelected();
            const isSelectedColumn: string = this.component.getAttribute('IsSelectedColumn');
            this.rowMap = new Map();
            this.selectedRowMap = new Map();
            this.rows = new Map();
            model.items.forEach((item: FlowObjectData) => {
                
                if (stateSelectedItems) {
                    if (stateSelectedItems.has(item.internalId) && stateSelectedItems.get(item.internalId).isSelected === true) {
                        this.selectedRowMap.set(item.internalId, undefined);
                    }
                }
                // also set it its explicitly selected
                // if it's selected in the model or we have an IsSelectedField attribute then pre-select it
                if (
                    item.isSelected === true || (
                        isSelectedColumn && (
                            item.properties[isSelectedColumn]?.value as boolean === true ||
                            item.properties[isSelectedColumn]?.value as number > 0
                        )
                    )
                ) {
                    this.selectedRowMap.set(item.internalId, undefined);
                }
        
                const node = new RowItem();
                node.id = item.internalId;

                this.colMap.forEach((col: FlowDisplayColumn) => {
                    node.columns.set(col.developerName, new CellItem(col.developerName, item.properties[col.developerName]?.value as any));
                    this.colValMap.get(col.developerName).set(item.properties[col.developerName]?.value, item.properties[col.developerName]?.value);
                });

                node.objectData = item;

                this.rowMap.set(node.id, node);
            });
            //await this.saveSelected();
        }
        let partition = this.component.getAttribute("partitionColumn");
        this.partitionedRowMaps= new Map();
        if(partition && this.colMap.has(partition)){
            this.rowMap.forEach((row: RowItem) => {
                let div: CellItem = row.columns.get(partition);
                if(!this.partitionedRowMaps.has(div.originalValue)){
                    this.partitionedRowMaps.set(div.originalValue, new Map());
                }
                this.partitionedRowMaps.get(div.originalValue).set(row.id, row.id);
            });
        }
    }

    // filters the currentRowMap
    async filterRows() {
        const start: Date = new Date();
        // list or service
        if(this.component?.objectDataRequest){
            //service - we need to send an objectDataRequst
            //
            let odr = this.component.objectDataRequest;
            let newOdr = JSON.parse(JSON.stringify(odr));
            newOdr.listFilter.where = [
                {
                    columnName:"Filters",
                    criteriaType:"EQUAL",
                    value:this.filters.getForFSS()
                }
            ];
            //odr.listFilter.limit=200;
            //odr.listFilter.search=this.filters.globalCriteria || "";
            let sortColumn: any = this.filters?.getSortColumn();
            let XHR = this.component.requestObjectData(newOdr);
            await this.loadModelData();
            this.currentRowMap = new Map();
            if (this.rowMap.size > 0) {
                this.rowMap.forEach((item: RowItem, key: string) => {
                    this.currentRowMap.set(key, item);
                });
            }
        }   
        else {
            // why doing this ???
            ///await this.loadModelData();
            this.currentRowMap = new Map();
            if (this.rowMap.size > 0) {
                this.currentRowMap = this.filters.filter(this.rowMap);
            }
        }

        // remove any selected items not in the currentRowMap
        this.selectedRowMap.forEach((item: RowItem, internalId: string) => {
            if (!this.currentRowMap.has(internalId)) {
                //this.selectedRowMap.delete(internalId);
            }
        });

        //load selectedSingleItem
        await this.loadSingleSelected();

        const end: Date = new Date();

        if(this.component?.objectDataRequest){
            this.paginateRows();
        }
        else {
            this.sortRows();
        }       

    }

    // sorts the currentRowMap by getting the current sort column from filters
    sortRows() {
        const start: Date = new Date();
        if (this.currentRowMap.size > 0) {
            this.currentRowMap = this.filters.sort(this.currentRowMap, this.rowMap);
        }
        const end: Date = new Date();
        this.paginateRows();
    }

    // this goes through currentRowMap and splits them into pages based on maxPageRows
    paginateRows() {
        const start: Date = new Date();
        this.currentRowPages = [];
        let currentPage: Map<string, RowItem> = new Map();
        this.currentRowPage = 0;
        

        this.currentRowMap.forEach((item: RowItem, key: string) => {
            let objData: FlowObjectData = this.rowMap.get(key).objectData;
            let objKey: string;
            if(this.lastRememberedRow) {
                objKey = "" + objData.properties[this.rowRememberColumn]?.value as string;
            }
            if ((currentPage.size < this.maxPageRows) || this.paginationMode !== ePaginationMode.local) {
                currentPage.set(key, item);
                if(objKey && this.lastRememberedRow && objKey===this.lastRememberedRow){
                    this.currentRowPage = this.currentRowPages.length;
                }
            } else {
                this.currentRowPages.push(currentPage);
                currentPage = new Map();
                currentPage.set(key, item);
                if(objKey && this.lastRememberedRow && objKey===this.lastRememberedRow){
                    this.currentRowPage = this.currentRowPages.length;
                }
            }
        });
        // add any stragglers
        this.currentRowPages.push(currentPage);
        
        const end: Date = new Date();
        this.buildTableRows();
    }

    async firstPage() {
        this.currentRowPage = 0;
        this.buildTableRows();
        this.forceUpdate();
    }

    previousPage() {
        switch(this.paginationMode) {
            case ePaginationMode.local:
                if (this.currentRowPage > 1) { this.currentRowPage -= 1; } else { this.currentRowPage = 0; }
                this.buildTableRows();
                this.forceUpdate();
                break;
            case ePaginationMode.external:
                if(this.previousPageOutcome && this.component.outcomes[this.previousPageOutcome]){
                    this.component.triggerOutcome(this.previousPageOutcome);
                }
                break;
        }      
    }

    nextPage() {
        switch(this.paginationMode) {
            case ePaginationMode.local:
                if (this.currentRowPage < (this.currentRowPages.length - 1)) { this.currentRowPage += 1; } else { this.currentRowPage = this.currentRowPages.length - 1; }
                this.buildTableRows();
                this.forceUpdate();
                break;
            case ePaginationMode.external:
                if(this.nextPageOutcome && this.component.outcomes[this.nextPageOutcome]){
                    this.component.triggerOutcome(this.nextPageOutcome);
                }
                break;
        }  
    }

    lastPage() {
        this.currentRowPage = this.currentRowPages.length - 1 ;
        this.buildTableRows();
        this.forceUpdate();
    }

    gotoPage(page: number) {
        this.currentRowPage = page - 1 ;
        this.buildTableRows();
        this.forceUpdate();
    }

    async selectRow(objData: FlowObjectData) {
        //if(this.selectedRow !== objData.externalId){
            this.selectedRow = objData.externalId;
            await this.doOutcome("OnSelect",objData);
            this.buildRibbon();
            this.buildFooter();
            this.refreshRows();
        //}
        //else{
        //    this.selectedRow=undefined; 
        //    await this.doOutcome("OnSelect",undefined);
        //    this.refreshRows();
        //}
    }

    refreshRows() {
        this.rows.forEach((row: SearchFilterTableRow) => {
            row.forceUpdate();
        });
    }

    /////////////////////
    // toggles all rows selected status
    /////////////////////
    toggleSelectAll(event: any) {
        if (event.target.checked) {
            this.currentRowMap.forEach((item: RowItem, key: string) => {
                this.selectedRowMap.set(key, '');
            });
        } else {
            this.currentRowMap.forEach((item: RowItem, key: string) => {
                this.selectedRowMap.delete(key);
            });
            //this.selectedRowMap.clear();
        }

        this.rows.forEach((row: SearchFilterTableRow) => {
            row.forceUpdate();
        });
        this.buildRibbon();
        this.buildFooter();
        this.saveSelected();
    }

    toggleSelect(event: any, key: string) {
        event.stopPropagation();
        if (event.target.checked) {
            this.selectedRowMap.set(key, '');
        } else {
            this.selectedRowMap.delete(key);
        }
        this.rows.get(key).forceUpdate();
        this.buildRibbon();
        this.buildFooter();
        this.saveSelected();
    }

    // store the selected items to state
    async saveSelected() {
        if(this.rowMap?.size > 0){
            const selectedItems: FlowObjectDataArray = new FlowObjectDataArray();
            this.rowMap.forEach((item: FlowObjectData, key: string) => {
                const tItem: FlowObjectData = this.rowMap.get(key).objectData;
                if(this.selectedRowMap.has(key)){
                    tItem.isSelected = true;
                }
                else {
                    tItem.isSelected = false;
                }
                selectedItems.addItem(tItem);
            });
            
            this.supressEvents = true;
            this.component.setStateValue(selectedItems);
        }
    }

    // load selected items from state
    async loadSelected(): Promise<Map<string, any>> {
        let stateSelected: Map<string, any>;
        const selectedItems: FlowObjectDataArray = this.component.getStateValue() as FlowObjectDataArray;
        if (selectedItems && selectedItems.items) {
            stateSelected = new Map();
            for (let pos = 0 ; pos < selectedItems.items.length ; pos++) {
                stateSelected.set(selectedItems.items[pos].internalId, selectedItems.items[pos]);
            }
        }
        return stateSelected;
    }

    //gets the single selected item from rowlevelstate
    async loadSingleSelected(): Promise<any> {
        this.selectedRow = undefined;
        if (this.component.getAttribute('RowLevelState', '').length > 0 ) {
            const rls: FlowValue = await this.component.getValue(this.component.getAttribute('RowLevelState'));
            if(rls.value) {
                // are we using a specific column
                if(this.rowRememberColumn) {
                    for(let val of this.rowMap.values()) {
                        let objData: FlowObjectData = val?.objectData;
                        if((rls.value as FlowObjectData).properties[this.rowRememberColumn]?.value ===
                            objData.properties[this.rowRememberColumn]?.value) {
                                this.selectedRow = objData.externalId;
                            }
                        
                    }
                }
                else {
                    this.selectedRow = (rls.value as FlowObjectData).externalId;
                }
            }      
        }
    }
    /////////////////////////////////////////////////////////////////////
    // Builds the rowElements from the currentRowMap and forces a redraw
    ////////////////////////////////////////////////////////////////////
    async buildTableRows() {
        this.rowElements = [];
    
        // loop over rowmap if defined
        if (this.currentRowMap && this.currentRowMap.size > 0 && this.currentRowPages && this.currentRowPages.length > 0 && this.currentRowPages[this.currentRowPage]) {
            this.currentRowPages[this.currentRowPage].forEach((node: RowItem, key: string) => {
                this.rowElements.push(
                    <SearchFilterTableRow
                        key={key}
                        root={this}
                        id={key}
                        ref={(element: SearchFilterTableRow) => {this.setRow(key , element); }}
                    />,
                );
                
            });
        }
        else {
            //there's no row or pages
            this.rowElements.push(
                <tr
                    key={"none"}
                    className="sft-table-row"
                >
                    <td colSpan={1000}>
                        <div className="sft-table-row-noresults" >
                            <span className="sft-table-row-noresults-title">{this.component.getAttribute("noResults","No Results Available")}</span>
                            {this.filters.isFiltered() ? <span className="sft-table-row-noresults-subtitle">{this.component.getAttribute("noResultsFilter","( This may be due to the filters applied )")}</span> : null}
                        </div>
                    </td>
                </tr>
            );
        }
        this.buildRibbon();
        this.buildFooter();
        this.forceUpdate();
    }

    //////////////////////////////////////////////////////
    // builds title bar buttons based on attached outcomes
    //////////////////////////////////////////////////////
    buildRibbon() {
        this.ribbon?.generateButtons();   
        this.ribbon?.generateComponents();        
    }

    //////////////////////////////////////////////////////
    // forces the footer to update
    //////////////////////////////////////////////////////
    buildFooter() {
        this.footer?.forceUpdate();
    }

    //////////////////////////
    // constructs and shows context menu
    //////////////////////////
    showContextMenu(e: any) {
        e.preventDefault();
        e.stopPropagation();
        const listItems: Map<string , any> = new Map();
        if (this.contextMenu) {
            Object.keys(this.component.outcomes).forEach((key: string) => {
                const outcome: FlowOutcome = this.component.outcomes[key];
                if (outcome.isBulkAction === true && outcome.developerName !== 'OnSelect' && outcome.developerName.toLowerCase().startsWith('cm')) {
                    if (! (outcome.attributes['RequiresSelected']?.value === 'true' && this.selectedRowMap.size < 1)) {
                        listItems.set(outcome.developerName, (
                            <li
                                className="sft-cm-item"
                                title={outcome.label || key}
                                onClick={(e: any) => {e.stopPropagation(); this.cmClick(key); }}
                            >
                                <span
                                    className={'glyphicon glyphicon-' + (outcome.attributes['icon']?.value || 'plus') + ' sft-cm-item-icon'} />
                                <span
                                    className={'sft-cm-item-label'}
                                >
                                    {outcome.label || key}
                                </span>
                            </li>
                        ));
                    }
                }
            });

            const canExport: boolean = (this.component.getAttribute('canExport', 'true').toLowerCase() === 'true');
            if(canExport) {
                listItems.set('exportall', (
                    <li
                        className="sft-cm-item"
                        title={'Export All'}
                        onClick={(e: any) => {e.stopPropagation(); this.doExport(this.rowMap); }}
                    >
                        <span
                            className={'glyphicon glyphicon-floppy-save sft-cm-item-icon'} />
                        <span
                            className={'sft-cm-item-label'}
                        >
                            Export All
                        </span>
                    </li>
                ));
                listItems.set('exportshown', (
                    <li
                        className="sft-cm-item"
                        title={'Export Search Results'}
                        onClick={(e: any) => {e.stopPropagation(); this.doExport(this.currentRowMap); }}
                    >
                        <span
                            className={'glyphicon glyphicon-floppy-save sft-cm-item-icon'} />
                        <span
                            className={'sft-cm-item-label'}
                        >
                            Export Shown
                        </span>
                    </li>
                ));
                if (this.selectedRowMap.size > 0) {
                    listItems.set('exportselected', (
                        <li
                            className="sft-cm-item"
                            title={'Export Selected Items'}
                            onClick={(e: any) => {e.stopPropagation(); this.doExport(this.selectedRowMap); }}
                        >
                            <span
                                className={'glyphicon glyphicon-floppy-save sft-cm-item-icon'} />
                            <span
                                className={'sft-cm-item-label'}
                            >
                                Export Selected
                            </span>
                        </li>
                    ));
                }
            }
            this.contextMenu.showContextMenu(e.clientX, e.clientY, listItems);
            this.forceUpdate();
        }
    }

    async hideContextMenu() {
        this.contextMenu.hideContextMenu();
    }

    // a context menu item was clicked - the key will be the item's name
    cmClick(key: string) {
        this.doOutcome(key);
    }

    getTextValue(property: FlowObjectDataProperty): string {
        switch (property.contentType) {
            case eContentType.ContentBoolean:
                if (property.value === true) {
                    return 'True';
                } else {
                    return 'False';
                }
            case eContentType.ContentNumber:
                return property.value.toString();

            default:
                return property.value as string;
        }
    }

    async doOutcome(outcomeName: string, selectedItem?: FlowObjectData, ignoreRules?: boolean) {
       
        if(typeof selectedItem === 'string') {
            selectedItem = this.rowMap.get(selectedItem).objectData;
        }
        this.selectedRow = selectedItem?.externalId;
        // if there's a row level state then set it
        if (this.component.getAttribute('RowLevelState', '').length > 0 && selectedItem) {
            const val: FlowValue = await this.component.getValue(this.component.getAttribute('RowLevelState'));
            if (val) {
                val.value = selectedItem || new FlowObjectDataArray();
                await this.component.setValues(val);
            }
            // reload last selected row if any
            if(this.rowRememberColumn){
                sessionStorage.setItem('sft-lastrow-' + this.component.id, selectedItem.properties[this.rowRememberColumn]?.value as string);
            }
        }
        if (this.component.outcomes[outcomeName]) {
            const outcome: FlowOutcome = this.component.outcomes[outcomeName];
            switch (true) {
                // does it have a uri attribute ?
                case outcome.attributes['uri']?.value.length > 0 :
                    let href: string = outcome.attributes['uri'].value;
                    let match: any;
                    while (match = RegExp(/{{([^}]*)}}/).exec(href)) {
                        // could be a property of the selected item or a global variable or a static value - depends also on isBulkAction
                        // if it's not bulk then grab selected row objdata
                        //if (outcome.isBulkAction === false) {
                        //    objData = this.rowMap.get(selectedItem)?.objectData;
                        //}

                        if (selectedItem && selectedItem.properties[match[1]]) {
                            // objdata had this prop
                            href = href.replace(match[0], (selectedItem.properties[match[1]] ? this.getTextValue(selectedItem.properties[match[1]]) : ''));
                        } else {
                            // is it a known static
                            switch (match[1]) {
                                case 'TENANT_ID':
                                    href = href.replace(match[0], this.component.tenantId);
                                    break;

                                default:
                                    const fldElements: string[] = match[1].split('->');
                                    // element[0] is the flow field name
                                    const val: FlowValue = await this.component.getValue(fldElements[0]);
                                    let value: any;
                                    if (val) {
                                        if (fldElements.length > 1) {
                                            let od: FlowObjectData = val.value as FlowObjectData;
                                            for (let epos = 1 ; epos < fldElements.length ; epos ++) {
                                                od = (od as FlowObjectData).properties[fldElements[epos]].value as FlowObjectData;
                                            }
                                            value = od;
                                        } else {
                                            value = val.value;
                                        }
                                    }
                                    href = href.replace(match[0], value);

                            }
                        }
                    }

                    if (this.component.outcomes[outcomeName].attributes['target']?.value === '_self') {
                        window.location.href = href;
                    } else {
                        const tab = window.open('');
                        if (tab) {
                            tab.location.href = href;
                        } else {
                            console.log('Couldn\'t open a new tab');
                        }
                    }
                    break;

                case outcome.attributes?.form?.value.length > 0 && ignoreRules !== true:
                    const form: any = JSON.parse(outcome.attributes.form.value);
                        const formProps = {
                        id: this.component.id,
                        okOutcome: this.okOutcomeForm,
                        cancelOutcome: this.cancelOutcomeForm,
                        objData: selectedItem,
                        selectedItem,
                        outcome,
                        form,
                        sft: this,
                        component: this.component
                    };
                    
                    let content: any;
                    if(typeof manywho !== 'undefined'){
                        content = React.createElement(manywho.component.getByName(form.class), formProps);
                    }
                    else {
                        content = React.createElement((0,eval)(form.class) , formProps);
                    }

                    this.messageBox.showDialog(
                        null,
                        form.title, 
                        content, 
                        [new FCMModalButton('Ok', this.okOutcomeForm), new FCMModalButton('Cancel', this.cancelOutcomeForm)],
                    );
                    this.forceUpdate();
                    break;
                
                //is it the import outcome?
                case this.component.getAttribute('importCSVOutcome',"") !== ""  && 
                    this.component.outcomes[this.component.getAttribute('importCSVOutcome')] !== undefined && 
                    this.component.getAttribute('importCSVOutcome',"")===outcomeName:
                    this.doImport();
                    break;
            
                case this.component.getAttribute('exportCSVSampleOutcome',"") !== ""  && 
                    this.component.outcomes[this.component.getAttribute('exportCSVSampleOutcome')] !== undefined && 
                    this.component.getAttribute('exportCSVSampleOutcome',"")===outcomeName:
                    this.doExportSample();
                    break;
                
                default:
                    this.component.triggerOutcome(outcomeName);
                    break;
            }
        }
    }

    cancelOutcomeForm() {
        this.messageBox.hideDialog();
        this.form = null;
        this.forceUpdate();
    }

    async okOutcomeForm() {
        if (this.form.validate() === true) {
            const objData: FlowObjectData = await this.form?.makeObjectData();
            //const objDataId: string = this.form.props.objData?.internalId;
            const outcome: FlowOutcome = this.form.props.outcome;
            const form: any = this.form.props.form;
            if (form.state && objData) {
                const state: FlowValue = await this.component.getValue(form.state);
                if (state) {
                    state.value = objData;
                    await this.component.setValues(state);
                }
            }
            this.messageBox.hideDialog();
            this.form = null;
            this.doOutcome(outcome.developerName, objData, true);
            this.forceUpdate();
        }
    }

    async doExport(data: Map<string, RowItem>) {
        const opdata: Map<string, RowItem> = new Map();
        data.forEach((item, key) => {
            opdata.set(key, this.rowMap.get(key));
        });

        let cols: Map<string,FlowDisplayColumn>;
        if(this.component.getAttribute("exportUserColumns","false").toLowerCase() === 'true'){
            cols = new Map();
            this.userColumns.forEach((cname: string) => {
                if(this.colMap.has(cname)){
                    cols.set(cname, this.colMap.get(cname));
                }
            });
        }
        else {
            cols = this.colMap;
        }
        if(this.component.getAttribute("exportFormat","XLS") === "CSV") {
            ModelExporter.export(cols, opdata, this.exportFileName);
        }
        else {
            SpreadsheetExporter.export(cols, opdata, this.partitionedRowMaps, this.exportFileName);
        }
        
        if (this.component.outcomes['OnExport']) {
            this.component.triggerOutcome('OnExport');
        }
    }

    async doSpreadsheet(data: Map<string, RowItem>) {
        const opdata: Map<string, RowItem> = new Map();
        this.selectedRowMap.forEach((item, key) => {
            opdata.set(key, this.rowMap.get(key));
        });

        let cols: Map<string,FlowDisplayColumn>;
        if(this.component.getAttribute("exportUserColumns","false").toLowerCase() === 'true'){
            cols = new Map();
            this.userColumns.forEach((cname: string) => {
                if(this.colMap.has(cname)){
                    cols.set(cname, this.colMap.get(cname));
                }
            });
        }
        else {
            cols = this.colMap;
        }
        SpreadsheetExporter.export(this.colMap, opdata, this.partitionedRowMaps, "test.xlsx");
        
        if (this.component.outcomes['OnExport']) {
            this.component.triggerOutcome('OnExport');
        }
    }

    async doImport() {
        let csv: SFTCSVFile = await STFCSVImporter.loadCSV();
        if(csv) {
            let objDataArr: FlowObjectDataArray = csv.toFlowObjectDataArray(this.component.getAttribute("ModelTypeName","Object"));
            let existingState: FlowObjectDataArray = this.component.objectData;
            objDataArr.items.forEach((item: FlowObjectData) => {
                existingState.addItem(item);
            });
            this.component.setStateValue(existingState);
            this.component.objectData = existingState;
            this.buildCoreTable();
        }
    }

    async doExportSample() {

        SFTCSVFile.downloadTemplate(this.component.columns)
    }

    playVideo(title: string, dataUri: string, mimetype: string) {
        this.messageBox.showDialog(
            null,
            title,
            (
                <video
                    style={{width: '100%', minWidth: '10rem', height: '97%'}}
                    autoPlay={true}
                    controls={true}
                >
                    <source src={dataUri} type={mimetype}/>
                    Your browser does not support the video tag.
                </video>
            ), [new FCMModalButton('Close', this.messageBox.hideDialog)],
        );
    }

    playAudio(title: string, dataUri: string, mimetype: string) {
        this.messageBox.showDialog(
            null,
            title,
            (
                <audio
                    controls={true}
                    autoPlay={true}
                    style={{width: '100%', minWidth: '10rem', height: '97%'}}
                >
                    <source src={dataUri} type={mimetype}/>
                    Your browser does not support the audio tag.
                </audio>
            ), [new FCMModalButton('Close', this.messageBox.hideDialog)],
        );
    }

    render() {

        // handle classes attribute and hidden and size
        const classes: string = 'sft ' + this.component.getAttribute('classes', '');
        const style: React.CSSProperties = {};
        style.width = '-webkit-fill-available';
        style.height = '-webkit-fill-available';

        if (this.component.isVisible === false) {
            style.display = 'none';
        }

        if (this.component.attributes.width) {
            style.width = this.component.attributes.width;
        }
        
        if (this.component.attributes.height) {
            style.height = this.component.attributes.height;
        }        

        const title: string = this.component.label || '';

        let body: any;
        if (this.loaded===false) {
            body = (
                <div
                    className="sft-loading"
                >
                    <div
                        className="sft-loading-inner"
                        style={{margin: 'auto', display: 'flex', flexDirection: 'column'}}
                    >
                        {this.component.attributes.LoadingIcon ? <img className="sft-loading-image" src={this.component.attributes.LoadingIcon}/> : undefined}
                        <span
                            className="sft-loading-label"
                        >
                            Loading
                        </span>
                    </div>

                </div>
            );
        } else {
            body = (
                <div
                    className="sft-scroller-body"
                    ref={(element: any) => {this.tableBody = element}}
                >
                    <table
                        style={{minWidth: '100%'}}
                        
                    >
                        <thead>
                            {this.headersElement}
                        </thead>
                        <tbody>
                            {this.rowElements}
                        </tbody>
                        <tfoot/>
                    </table>
                </div>
            );
        }

        return  (
            <div
                id={this.component.id + "_child"}
                key={this.component.id + "_child"}
                className={classes}
                style={style}
                onContextMenu={this.showContextMenu}
            >
                <FCMModal
                    parent={this}
                    ref={(element: FCMModal) => {this.messageBox = element; }}
                />
                <FCMContextMenu
                    parent={this}
                    ref={(element: FCMContextMenu) => {this.contextMenu = element; }}
                />
                {this.titleElement}
                {this.ribbonElement}
                <div
                    className="sft-body"
                >
                    <div
                        className="sft-scroller"
                        ref={(element: HTMLDivElement) => {this.scroller = element; }}
                    >
                        {body}
                    </div>
                </div>
                {this.footerElement}
            </div>
        );
    }

}
