import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";

import "./SearchFilterTableFooterNav.css";
import {SFT, ePaginationMode } from "./SearchFilterTable";
export class SearchFilterTableFooterNav extends React.Component<any,any> {

    constructor(props: any) {
        super(props);
        this.setItemsPerPage = this.setItemsPerPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.gotoPage = this.gotoPage.bind(this);

        this.state = {events : []};

    }

    setItemsPerPage(e: any){
        let parent: SFT = this.props.root;
        let perPage: number = parseInt(e.currentTarget.options[e.currentTarget.selectedIndex].value);
        parent.maxPerPageChanged(perPage);
    }

    firstPage(e: any){
        let parent: SFT = this.props.root;            
        parent.gotoPage(1);
    }

    previousPage(e: any){
        let parent: SFT = this.props.root;
        if(parent.currentRowPage > 0){
            parent.previousPage();
        }
    }

    nextPage(e: any){
        let parent: SFT = this.props.root;
        if(parent.currentRowPage < (parent.currentRowPages.length -1)){
            parent.nextPage();
        }
    }

    lastPage(e: any){
        let parent: SFT = this.props.root;            
        parent.gotoPage((parent.currentRowPages.length));
    }

    gotoPage(pg: number){
        let parent: SFT = this.props.root;
        parent.gotoPage(pg);
    }

    render() {
        let parent: SFT = this.props.root;
                
        let first: number = ((parent.currentRowPage) * parent.maxPageRows) + 1;
        if(isNaN(first)){first=0}
        let tot: number = parent.currentRowMap?.size || 0;
        if(isNaN(tot)){tot=0}
        let to: number = first+(parent.maxPageRows-1);
        if(isNaN(to)){to=0}
        if(to>tot){to=tot}
        let showing: string;
        let pag: string;
        switch(true) {
            case parent.paginationMode===ePaginationMode.external:
                //showing="";
                pag=parent.externalPaginationPage.toString();
                break;
            case parent.component.getAttribute("summaryMode","default").toLowerCase()==="none":
                //showing = '';
                pag = 'page ' + (parent.currentRowPage + 1) + ' of ' + parent.currentRowPages.length;
                break;
            case parent.component.getAttribute("summaryMode","default").toLowerCase()==="simple" || parent.component.isMultiSelect===false:
                showing = 'Showing ' + first + " - " + to + ' of ' + parent.rowMap.size + " items";
                pag = 'page ' + (parent.currentRowPage + 1) + ' of ' + parent.currentRowPages.length;
                break;
            
            default:
                showing = 'Selected ' + parent.selectedRowMap.size + ' of ' + parent.currentRowMap.size + ' items from a total dataset of ' + parent.rowMap.size;
                pag = 'page ' + (parent.currentRowPage + 1) + ' of ' + parent.currentRowPages.length;
                break;   
        }

        let pageNav: any[] = [];
        let itemsPerPage: any;

        if(parent.paginationMode !== ePaginationMode.none){
            let pageCount: number = parent.currentRowPages.length;
            let currentPage: number = parent.currentRowPage + 1;
            
            let prevClass: string = "sft-nav-chev"
            if(currentPage===1) {
                prevClass += " sft-nav-chev-dissabled"
            }
            pageNav.push(
                <FontAwesomeIcon 
                    key="fp"
                    icon={faAngleDoubleLeft}
                    className={prevClass}
                    title="First page"
                    onClick={this.firstPage}
                />
            );
            pageNav.push(
                <FontAwesomeIcon 
                    key="pp"
                    icon={faChevronLeft}
                    className={prevClass}
                    title="Previous page"
                    onClick={this.previousPage}
                />
            );

            let pagePageNav: any[] = [];
            
            for(let pg: number = 1 ; pg<=pageCount ; pg++){
                if(pg === currentPage) {
                    pagePageNav.push(
                        <span
                            key="pg"
                            className="sft-nav-pg  sft-nav-pg-selected"
                            onClick={(e: any) => {this.gotoPage(pg)}}
                        >
                            {pg}
                        </span>
                    );
                }
                else {
                    pagePageNav.push(
                        <span
                            key="pg"
                            className="sft-nav-pg"
                            onClick={(e: any) => {this.gotoPage(pg)}}
                        >
                            {pg}
                        </span>
                    );
                }
            }

            if(pagePageNav.length > 7 ){
                if(currentPage>4) {
                    //offset to crop up to up to 
                    let chop: number = currentPage-4;
                    if(chop>0){
                        //chop them out
                        pagePageNav.splice(0,chop);
                        //insert the elipse
                        pagePageNav.splice(0,0,(
                            <span
                                key="elip"
                                className="sft-nav-pg"
                            >
                                ...
                            </span>
                        ));
                    }
                }
            }
            if(pagePageNav.length >= 8 ){
                // how many above me should absolutely survive - allows for if current page is below 5
                let preserve: number = 5-currentPage;
                //offset to start cropping
                let offset: number = currentPage+preserve+(currentPage>4?1:0);
                //how many to crop, excluding last
                let chop: number = (pagePageNav.length-1)-offset;
                //chop them out
                pagePageNav.splice(offset,chop);
                //insert the elipse
                pagePageNav.splice(pagePageNav.length-1,0,(
                    <span
                        key="elip"
                        className="sft-nav-pg"
                    >
                        ...
                    </span>
                ));
            }
            
            pageNav = pageNav.concat(pagePageNav);
            

            let nextClass: string = "sft-nav-chev"
            if(currentPage >= pageCount) {
                nextClass += " sft-nav-chev-dissabled"
            }
            pageNav.push(
                <FontAwesomeIcon 
                    key="np"
                    icon={faChevronRight}
                    className={nextClass}
                    title="Next page"
                    onClick={this.nextPage}
                />
            );
            pageNav.push(
                <FontAwesomeIcon 
                    key="lp"
                    icon={faAngleDoubleRight}
                    className={nextClass}
                    title="Last page"
                    onClick={this.lastPage}
                />
            );

            itemsPerPage=(
                <div
                    className="sft-footer-pagination"
                >
                    <span
                        className="sft-footer-pagination-label"
                    >
                        Items per page
                    </span>
                    <select 
                        className="sft-footer-pagination-select"
                        onChange={this.setItemsPerPage}
                    >
                        <option key="10" value={10} selected={parent.maxPageRows === 10}>10</option>
                        <option key="20" value={20} selected={parent.maxPageRows === 20}>20</option>
                        <option key="50" value={50} selected={parent.maxPageRows === 50}>50</option>
                        <option key="100" value={100} selected={parent.maxPageRows === 100}>100</option>
                    </select>
                </div>
            );
        }

        let footerStyle: React.CSSProperties = {};
        if(!itemsPerPage && !showing && pageNav.length===0) {
            footerStyle.display="none"
        }
        

        return(
            <div
                className="sft-footer"
                style={footerStyle}
            >
                {itemsPerPage}
                <div
                    className="sft-footer-events"
                ></div>
                <div
                    className="sft-footer-nav"
                >
                    <span
                        className="sft-footer-nav-label"
                    >
                        {showing}
                    </span>
                    {pageNav}
                </div>
            </div>
        );
    }
}