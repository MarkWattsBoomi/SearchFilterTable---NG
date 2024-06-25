import * as React from 'react';
import {SearchFilterTableHeaders} from './SearchFilterTableHeaders';
import { SFT } from './SearchFilterTable';
import { FlowDisplayColumn } from 'fcmlib/lib/FlowDisplayColumn';

export class SearchFilterTableHeader extends React.Component<any, any> {

    th: any;
    mask: any;

    constructor(props: any) {
        super(props);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
    }

    dragEnter() {
        // console.log('bringing mask to top ' + this.props.column.developerName);
        this.mask.style.zIndex = 10000;
        this.th.classList.add('sft-column-header-wrapper-droppable');
    }

    dragLeave() {
        // console.log('sending mask to bottom ' + this.props.column.developerName);
        this.mask.style.zIndex = -1;
        this.th.classList.remove('sft-column-header-wrapper-droppable');
    }

    render() {
        const root: SFT = this.props.root;
        const parent: SearchFilterTableHeaders = this.props.parent;
        const col: FlowDisplayColumn = this.props.column;
        let filterIcon: any;
        let sortIcon: any;
        let quickCheck: any;
        if (this.props.static !== true) {
            sortIcon = root.filters.getSortIcon(col.developerName);
            if (this.props.inlineSearch === true) {
                filterIcon = root.filters.getFilterIcon(col.developerName);
            }
            quickCheck = root.filters.getQuickCheck(col.developerName);
        }
        let cls: string = "sft-column-header sft-column-header-"+col.developerName;
        if(this.props.sticky) {
            cls += " sft-header-sticky"
        }

        return (
            <th
                key={col.developerName}
                className={cls}
                style={{pointerEvents: 'all'}}
                ref={(element: any) => {this.th = element; }}
            >
                <div
                    className="sft-column-header-wrapper sft-thcontainer"
                    style={{display: 'flex', flexDirection: 'row', pointerEvents: 'all'}}
                    draggable={root.dynamicColumns}
                    onDragStart={(e) => {parent.dragColumn(e, col.developerName); }}
                    onDragEnter={(e) => {parent.onDragEnter(e); }}
                    onDragLeave={(e) => {parent.onDragLeave(e); }}
                    onDragOver={(e) => {parent.onDragOver(e); }}
                    onDrop={(e) => {parent.onDrop(e); }}
                    onClick={(e) => {root.filters.sortClicked(col.developerName)}}
                    data-fieldname={col.developerName}
                >
                    <div
                        className="sft-column-header-top"
                        style={{pointerEvents: 'all'}}
                    >
                        <div
                            className="sft-column-header-title"
                            style={{pointerEvents: 'all'}}
                        >
                            <span
                                className="sft-column-header-title-label"
                            >
                                {col.label}
                            </span>
                        </div>
                        <div
                            className="sft-column-header-flags"
                            style={{pointerEvents: 'all'}}
                        >
                            {sortIcon}
                        </div>
                        <div
                            style={{pointerEvents: 'all'}}
                            className="sft-column-header-buttons"
                        >
                            {filterIcon}
                            {quickCheck}
                        </div>
                    </div>
                    <div
                        className="sft-column-header-bottom"
                        style={{pointerEvents: 'all'}}
                    />
                    <div
                        style={{position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', pointerEvents: 'all', zIndex: -1}}
                        ref={(element: any) => {this.mask = element; }}
                    />
                </div>
            </th>
        );
    }
}
