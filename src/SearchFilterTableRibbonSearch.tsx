import * as React from 'react';
import {SFTCommonFunctions} from './CommonFunctions';
import {SFT} from './SearchFilterTable';
import { FlowOutcome } from 'fcmlib/lib/FlowOutcome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faDownload} from '@fortawesome/free-solid-svg-icons/faDownload';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons/faFilterCircleXmark';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import { FlowValue } from 'fcmlib/lib/FlowValue';

export class SearchFilterTableRibbonSearch extends React.Component<any, any> {

    searchInput: HTMLInputElement;
    previousFilter: string = '';
    currentFilter: string;
    leftButtons: any[] = [];
    rightButtons: any[] = [];
    farRightButtons: any[] = [];
    partitions: any[] = [];
    topRowComponents: any[] = [];
    clearFiltersButton: any;
    deBounce: boolean = false;

    constructor(props: any) {
        super(props);
        this.generateButtons = this.generateButtons.bind(this);
        this.generatePartitions = this.generatePartitions.bind(this);
        this.generateComponents = this.generateComponents.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.showSearch = this.showSearch.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.filterKeyDown = this.filterKeyDown.bind(this);
        this.filterChanged = this.filterChanged.bind(this);
        this.filterCommitted = this.filterCommitted.bind(this);
        this.trcChange = this.trcChange.bind(this);
        const root: SFT = this.props.root;
        this.currentFilter = root.filters.globalCriteria;

        this.state={key: new Date().getTime()}
    }

    componentDidMount() {
        this.generateButtons();
        this.generateComponents();
    }


    async generateButtons() : Promise<void> {
        const root: SFT = this.props.root;
        if(this.deBounce === true || root.preLoaded === false) {
            return;
        }
        else {
            this.deBounce = true;
        }
        
        this.leftButtons = [];
        this.rightButtons = [];
        this.farRightButtons = [];
        const canExport: boolean = (root.component.getAttribute('canExport', 'true').toLowerCase() === 'true');
        
        // ad export if allowed
        if (canExport === true) {
            this.rightButtons.push(
                SFTCommonFunctions.makeCoreButton(
                    'Export All',
                    'Export All',
                    root.downloadIcon,
                    <FontAwesomeIcon 
                        role="button"
                        icon={faDownload}
                        key={'exportAll'}
                        className={'sft-ribbon-search-button-icon'}                      
                    />,
                    root.iconSuffix,
                    (e: any) => {e.stopPropagation(); root.doExport(root.rowMap); },
                    'exportAll',
                    root.component.attributes?.RibbonDisplay
                )
            );
        }
        
        

        if (root.rowMap.size > root.currentRowMap.size && canExport === true) {
            this.rightButtons.push(
                SFTCommonFunctions.makeCoreButton(
                    'Export Shown',
                    'Export Shown',
                    root.downloadIcon,
                    <FontAwesomeIcon 
                        role="button"
                        icon={faDownload}
                        key={'exportShown'}
                        className={'sft-ribbon-search-button-icon'}                      
                    />,
                    root.iconSuffix,
                    (e: any) => {e.stopPropagation(); root.doExport(root.currentRowMap); },
                    'exportShown',
                    root.component.attributes?.RibbonDisplay
                )
            );
        }

        const arrOutcomes: FlowOutcome[] = Array.from(Object.values(root.component.outcomes));

        for (let pos = 0 ; pos < arrOutcomes.length ; pos++) {

            const outcome: FlowOutcome = arrOutcomes[pos];

            if (
                outcome.isBulkAction && 
                outcome.developerName !== 'OnSelect' && 
                outcome.developerName !== 'OnChange' && 
                !outcome.developerName.toLowerCase().startsWith('cm')
            ) {

                const showOutcome: boolean = await SFTCommonFunctions.assessGlobalOutcomeRule(outcome, root);
                if(root.component.getAttribute("greyDissabled","false").toLowerCase()==="true"){
                    let btn: any = SFTCommonFunctions.makeOutcomeButton(root,outcome,root.iconSuffix,undefined,!showOutcome);
                    if(outcome.order>200){
                        this.farRightButtons.push(
                            btn
                        );
                    }
                    else{
                        this.rightButtons.push(
                            btn
                        );
                    }
                }
                else {
                    if (showOutcome === true) {
                        let btn: any = SFTCommonFunctions.makeOutcomeButton(root,outcome,root.iconSuffix,undefined,false);
                        if(outcome.order>200){
                            this.farRightButtons.push(
                                btn
                            );
                        }
                        else{
                            this.rightButtons.push(
                                btn
                            );
                        }
                    }
                }
            }
        }

        if (root.component.content?.length > 0) {
            this.rightButtons.push(
                <div
                    className="sft-ribbon-search-button-wrapper"
                    onClick={(e: any) => {root.showInfo(); }}
                    key={'info'}
                >

                    <FontAwesomeIcon 
                        role="button"
                        icon={faCircleInfo}
                        key={'info'}
                        className={'sft-ribbon-search-button-icon'}
                        title={'Show Info'}
                    />
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes.RibbonDisplay?.indexOf('text') >= 0 ?
                        <span
                            className="sft-ribbon-search-button-label"
                        >
                            {'Column Picker'}
                        </span> :
                        null
                    }
                </div>,
            );
        }

        if (root.dynamicColumns === true) {
            this.rightButtons.push(
                SFTCommonFunctions.makeCoreButton(
                    'Select columns',
                    'Select columns',
                    root.colpickIcon,
                    <FontAwesomeIcon 
                        role="button"
                        icon={faEllipsisVertical}
                        className={'sft-ribbon-search-button-icon'}                      
                    />,
                    root.iconSuffix,
                    (e: any) => {root.showColumnPicker(); },
                    'colpick',
                    root.component.attributes?.RibbonDisplay
                )
            );
        }

        if (root.selectedRowMap.size > 0 && canExport === true) {
            this.leftButtons.push(
                SFTCommonFunctions.makeCoreButton(
                    'Export Selected',
                    'Export Selected',
                    root.downloadIcon,
                    <FontAwesomeIcon 
                        icon={faListCheck}
                        key={'exportSelected'}
                        className={'sft-ribbon-search-button-icon'}
                        title={'Export Selected'}                        
                    />,
                    root.iconSuffix,
                    (e: any) => {e.stopPropagation(); root.doExport(root.selectedRowMap); },
                    'exportSelected',
                    root.component.attributes?.RibbonDisplay

                )
            );
        }

        if (root.filters.isFiltered()) {
            this.clearFiltersButton = (
                SFTCommonFunctions.makeCoreButton(
                    'Clear Filters',
                    'Clear Filters',
                    root.clearFilterIcon,
                    <FontAwesomeIcon 
                        icon={faFilterCircleXmark}
                        key={'clearFilters'}
                        className={'sft-ribbon-search-button-icon'}                      
                    />,
                    root.iconSuffix,
                    this.clearFilters,
                    'clearFilters',
                    root.component.attributes?.RibbonDisplay

                )
            );
        }
        else {
            this.clearFiltersButton = undefined;
        }
        this.generatePartitions();
        this.deBounce = false;
        this.setState({key: new Date().getTime()});
    }

    clearSearch(e: any) {
        this.currentFilter = '';
        this.filterCommitted();
    }

    filterChanged() {
        this.currentFilter = this.searchInput.value;
        this.setState({key: new Date().getTime()});
    }

    filterCommitted() {
        if (this.currentFilter !== this.previousFilter) {
            this.previousFilter = this.currentFilter;
            const root: SFT = this.props.root;
            root.globalFilterChanged(this.currentFilter);
        }
    }

    filterPartition(e: any, key: string){
        e.preventDefault();
        e.stopPropagation();
        const root: SFT = this.props.root;
        root.partitionFilterChanged(key);
    }

    filterKeyDown(e: any) {
        // e.preventDefault();

        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                e.stopPropagation();
                this.filterCommitted();
                return false;
                break;

            case 'Escape':
                e.preventDefault();
                e.stopPropagation();
                this.searchInput.value = this.previousFilter;
                return false;
                break;

            case 'Delete':
                e.preventDefault();
                e.stopPropagation();
                this.searchInput.value = '';
                return false;
                break;

            case 'Tab':
                this.filterCommitted();
                return false;
                break;

            default:
                break;
        }
    }

    showSearch(e: any) {
        const sft: SFT = this.props.root;
        sft.manageFilters();
    }

    clearFilters(e: any) {
        const sft: SFT = this.props.root;
        if(sft.selectedPartition){
            sft.selectedPartition=undefined;
        }
        sft.filters.clearAll();
    }

    async trcChange(e: any, comp: any){
        if(e && e.currentTarget) {
            e.stopPropagation();
            const sft: SFT = this.props.root;
            let val: FlowValue = comp.value;
            val.value = e.currentTarget.value;
            await sft.component.setValues(val);
            console.log("TRC " + comp.label + " - set value to " + e.currentTarget?.value);
            if(comp.onChange?.length > 0 && sft.component.outcomes[comp.onChange]) {
                sft.component.triggerOutcome(comp.onChange);
            }
            else {
                this.generateComponents();
                this.setState({key: new Date().getTime()});
            }
        }
    }

    generatePartitions() {
        const sft: SFT = this.props.root;
        
        this.partitions = [];
        
        if(sft.partitionedRowMaps && sft.partitionedRowMaps.size > 0){
            let classes: string = "sft-ribbon-search-partition";
            if(!sft.selectedPartition){
                classes += " sft-ribbon-search-partition-selected"
            }
            this.partitions.push(
                <div
                    key="_all"
                    className={classes}
                    onClick={(e: any) => {this.filterPartition(e, null)}}
                >
                    All
                </div>
            );

            sft.partitionedRowMaps.forEach((partition: Map<string,any>, key: string) =>{
                let classes: string = "sft-ribbon-search-partition";
                if(sft.selectedPartition===key){
                    classes += " sft-ribbon-search-partition-selected"
                }
                let label: string = "";
                let toolTip: string = key;
                if(toolTip.length > 10) {
                    label = toolTip.substring(0,10) + "...";
                }
                else {
                    label=toolTip;
                }

                this.partitions.push(
                    <div
                        key={key}
                        className={classes}
                        onClick={(e: any) => {this.filterPartition(e, key)}}
                        title={toolTip}
                    >
                        <span>
                            {label.toLowerCase()}
                        </span>
                    </div>
                );
            });
        }
    }

    generateComponents() {
        const sft: SFT = this.props.root;
        
        this.topRowComponents = [];
        
        if(sft.topRowComponents && sft.topRowComponents.length > 0){
            sft.topRowComponents.forEach((comp: any) =>{
                let classes: string = "sft-ribbon-search-trc";
                let element: any;
                switch(comp.type){
                    case "select":
                        let opts: any[] = [];
                        comp.options.forEach((opt: any) => {
                            opts.push(
                                <option
                                    key={opt.value}
                                    value={opt.value}
                                >
                                    {opt.label}
                                </option>
                            );
                        });
                        element=(
                            <select
                                value={(comp.value as FlowValue).value as any}
                                className='sft-ribbon-search-trc-select'
                                onChange={ (e: any) => {this.trcChange(e, comp) }}
                            >
                                {opts}
                            </select>
                        );
                    break;
                }
                this.topRowComponents.push(
                    <div
                        key={comp.label}
                        className={classes}
                    >
                        <span
                            className='sft-ribbon-search-trc-label'
                        >
                            {comp.label}
                        </span>
                        {element}
                    </div>
                );
            });
        }
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        const root: SFT = this.props.root;
        if(root.preLoaded===true){
            return true;
        }
        else{
            return false;
        }
    }

    render() {

        const root: SFT = this.props.root;

        const style: React.CSSProperties = {};
        if (root.titleElement) {
            style.marginTop = '0.5rem';
        }

        let title: any;
        if(root.title && root.title.length > 0) {
            title=(
                <div
                    className="sft-ribbon-title-wrapper"
                >
                    {root.title}
                </div>
            );
        }
        return (
            <div
                className="sft-ribbon-search"
                style={style}
                key="ribbon"
            >
                {title}
                <div
                    className="sft-ribbon-search-left-wrapper"
                >
                    <div
                        className="sft-ribbon-search-wrapper"
                    >
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass}
                            role="button"
                            className="sft-ribbon-search-icon sft-ribbon-search-icon-search"
                            onClick={this.filterCommitted}
                            title="Search"
                        />
                        <input
                            className="sft-ribbon-search-input"
                            ref={(element: HTMLInputElement) => {this.searchInput = element; }}
                            onKeyDown={this.filterKeyDown}
                            onKeyUp={(e: any) => {e.stopPropagation(); e.preventDefault(); }}
                            onChange={this.filterChanged}
                            value={this.currentFilter}
                            placeholder='Search table'
                            title="Search Criteria"
                        />
                        <FontAwesomeIcon 
                            icon={faBan}
                            role="button"
                            className="sft-ribbon-search-icon sft-ribbon-search-icon-clear"
                            onClick={this.clearSearch}
                            title="Clear"
                        />
                    </div>
                    {
                        SFTCommonFunctions.makeCoreButton(
                            "Advanced Search",
                            "Advanced Search",
                            root.filterIcon,
                            <FontAwesomeIcon 
                                role="button"
                                icon={faFilter}
                                key={'showSearch'}
                                className={'sft-ribbon-search-button-icon'}                     
                            />,
                            root.iconSuffix,
                            this.showSearch,
                            'showSearch',
                            root.component.attributes?.RibbonDisplay
                        )
                    }
                    {this.clearFiltersButton}
                </div>
                <div
                    className="sft-ribbon-search-partitions-wrapper"
                >
                    <div
                        className="sft-ribbon-search-partitions"
                    >
                        {this.partitions}
                    </div>
                </div>
                <div
                    className="sft-ribbon-search-trc-wrapper"
                >
                    <div
                        className="sft-ribbon-search-trcs"
                    >
                        {this.topRowComponents}
                    </div>
                </div>
                <div
                    className="sft-ribbon-search-right-wrapper"
                >
                    <div
                        className="sft-ribbon-search-buttons-wrapper"
                    >
                        {this.leftButtons}
                        {this.rightButtons}
                        {this.farRightButtons}
                    </div>
                </div>
            </div>
        );
    }
}
