import * as React from 'react';
import {SFT,  ePaginationMode } from './SearchFilterTable';
import { faBackwardFast } from '@fortawesome/free-solid-svg-icons/faBackwardFast';
import { faBackwardStep, } from '@fortawesome/free-solid-svg-icons/faBackwardStep';
import { faForwardFast } from '@fortawesome/free-solid-svg-icons/faForwardFast';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons/faForwardStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SearchFilterTableFooter extends React.Component<any, any> {

    maxPerPage: any;

    componentDidMount() {
        this.forceUpdate();
        this.maxPerPageChanged = this.maxPerPageChanged.bind(this);
    }

    maxPerPageChanged(e: any) {
        const root: SFT = this.props.root;
        root.maxPerPageChanged(parseInt(this.maxPerPage.options[this.maxPerPage.selectedIndex].value));
    }

    render() {
        const root: SFT = this.props.root;
        let summary: string;
        let pag: string;
        switch(true) {
            case root.paginationMode===ePaginationMode.external:
                summary="";
                pag=root.externalPaginationPage.toString();
                break;
            case root.component.getAttribute("summaryMode","default").toLowerCase()==="simple" || root.component.isMultiSelect===false:
                summary = 'Showing ' + root.currentRowMap.size + ' items of ' + root.rowMap.size;
                pag = 'page ' + (root.currentRowPage + 1) + ' of ' + root.currentRowPages.length;
                break;
            default:
                summary = 'Selected ' + root.selectedRowMap.size + ' of ' + root.currentRowMap.size + ' items from a total dataset of ' + root.rowMap.size;
                pag = 'page ' + (root.currentRowPage + 1) + ' of ' + root.currentRowPages.length;
                break;   
        }
        
        

        let firstPage: any;
        let prevPage: any;
        let nextPage: any;
        let lastPage: any;

        if (root.currentRowPage > 0) {
            firstPage = (
                <FontAwesomeIcon 
                    icon={faBackwardFast}
                    className="sft-footer-pagination-button"
                    title="First page"
                    onClick={root.firstPage}
                />
            );
            prevPage = (
                <FontAwesomeIcon 
                    icon={faBackwardStep}
                    className="sft-footer-pagination-button"
                    title="Previous page"
                    onClick={root.previousPage}
                />
            );
        } else {
            firstPage = (
                <FontAwesomeIcon 
                    icon={faBackwardFast}
                    className="sft-footer-pagination-button sft-footer-pagination-button-disabled"
                    
                />
            );
            prevPage = (
                <FontAwesomeIcon 
                    icon={faBackwardStep}
                    className="sft-footer-pagination-button sft-footer-pagination-button-disabled"
                />
            );
        }

        if (root.currentRowPage < (root.currentRowPages.length - 1)) {
            lastPage = (
                <FontAwesomeIcon 
                    icon={faForwardFast}
                    className="sft-footer-pagination-button"
                    title="Last page"
                    onClick={root.lastPage}
                />
            );
            nextPage = (
                <FontAwesomeIcon 
                    icon={faForwardStep}
                    className="sft-footer-pagination-button"
                    title="Next page"
                    onClick={root.nextPage}
                />
            );
        } else {
            lastPage = (
                <FontAwesomeIcon 
                    icon={faForwardFast}
                    className="sft-footer-pagination-button sft-footer-pagination-button-disabled"
                />
            );
            nextPage = (
                <FontAwesomeIcon 
                    icon={faForwardStep}
                    className="sft-footer-pagination-button sft-footer-pagination-button-disabled"
                />
            );
        }

        let options: number[] = [];
        options.push(10, 20, 50, 100);
        if (options.indexOf(root.maxPageRows) < 0) {
            options.push(root.maxPageRows);
        }
        options = options.sort((a, b) => {
            return a - b;
        });

        const opts: any[] = [];
        let selected: number = options[0];
        options.forEach((a: number) => {
            if(root.maxPageRows === a){
                selected=a;
            }
            opts.push(
                <option
                    key={a}
                    value={a}
                >
                    {a}
                </option>,
            );
        });

        const perPage: any = (
            <select
                className={'sft-footer-select'}
                value={selected}
                onChange={this.maxPerPageChanged}
                ref={(element: any) => {this.maxPerPage = element; }}
            >
               {opts}
            </select>
        );

        let pagination: any;
        let perPageBlock: any;
        switch(root.paginationMode) {
            case ePaginationMode.local:
                pagination = (
                    <div
                        className="sft-footer-pagination"
                    >
                        {firstPage}
                        {prevPage}
                        <span className="sft-footer-pagination-label">{pag}</span>
                        {nextPage}
                        {lastPage}
                    </div>
                );
                perPageBlock=(
                    <div
                        className="sft-footer-perpage"
                    >
                        <div
                            className="sft-footer-perpage-label"
                        >
                            {'Items per page'}
                        </div>
                        {perPage}
                        
                    </div>
                );
                break;
            case ePaginationMode.external:
                prevPage = (
                    <FontAwesomeIcon 
                        icon={faBackwardStep}
                        className="sft-footer-pagination-button"
                        title="Previous page"
                        onClick={root.previousPage}
                    />
                );
                nextPage = (
                    <FontAwesomeIcon 
                        icon={faForwardStep}
                        className="sft-footer-pagination-button"
                        title="Next page"
                        onClick={root.nextPage}
                    />
                );
                
                pagination = (
                    <div
                        className="sft-footer-pagination"
                    >
                        {prevPage}
                        <span className="sft-footer-pagination-label">{pag}</span>
                        {nextPage}
                    </div>
                );
                break;
        }


        return (
            <div
                className="sft-footer"
            >
                {perPageBlock}
                <div
                    className="sft-footer-spacer"
                />
                <div
                    className="sft-footer-summary"
                >
                    <span
                        className="sft-footer-summary-label"
                    >
                        {summary}
                    </span>
                </div>
                {pagination}
            </div>
        );
    }
}
