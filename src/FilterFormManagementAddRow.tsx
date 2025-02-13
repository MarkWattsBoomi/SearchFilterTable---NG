import * as React from 'react';
import {FilterManagementForm} from './FilterManagementForm';
import { SFTColumnCriteria } from './ColumnCriteria';
import { FlowDisplayColumn } from 'fcmlib/lib/FlowDisplayColumn';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class FilterManagementFormAddRow extends React.Component<any, any> {

    fieldSelect: HTMLSelectElement;

    constructor(props: any) {
        super(props);

        this.fieldSelected = this.fieldSelected.bind(this);
        this.addColumnCriteria = this.addColumnCriteria.bind(this);
    }

    fieldSelected(e: any) {
        this.forceUpdate();
    }

    addColumnCriteria(e: any) {
        const parent: FilterManagementForm = this.props.parent;
        if (this.fieldSelect && this.fieldSelect.options[this.fieldSelect.selectedIndex].value) {
            parent.addCriteria(this.fieldSelect.options[this.fieldSelect.selectedIndex].value);
        }
    }

    render() {
        const parent: FilterManagementForm = this.props.parent;
        const criteria: SFTColumnCriteria = this.props.criteria;

        let fieldInput: any;
        const fieldOptions: any[] = [];
        fieldOptions.push(
            <option
                key={"#"}
                className="sft-fmf-row-criteria-select-option"
                value={null}
            >
                {'Please Select ...'}
            </option>,
        );
        

        const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

        const sorted = Array.from(parent.columns).filter((a) => {
            return !parent.newFilters.isFilteredOn((a[1] as FlowDisplayColumn).developerName);
        }).sort((a, b) => {
            return collator.compare((a[1] as FlowDisplayColumn).label, (b[1] as FlowDisplayColumn).label);
        });

        // const results: Map<string, FlowDisplayColumn> = new Map(sorted);

        sorted.forEach((col: any) => {
            fieldOptions.push(
                <option
                    key={col[1].developerName}
                    className="sft-fmf-row-criteria-select-option"
                    value={col[1].developerName}
                >
                    {' ' + col[1].label + ' '}
                </option>,
            );
        });

        fieldInput = (
            <select
                className="sft-fmf-row-criteria-select"
                onChange={this.fieldSelected}
                ref={(element: HTMLSelectElement) => {this.fieldSelect = element; }}
            >
                {fieldOptions}
            </select>
        );

        let addButton: any;
        if (this.fieldSelect && this.fieldSelect.options[this.fieldSelect.selectedIndex].value) {
            addButton = (
                <button
                key={"add"}
                    className="sft-ribbon-search-button-wrapper"
                    onClick={this.addColumnCriteria}
                >
                    <FontAwesomeIcon 
                        icon={faCirclePlus}
                        className="sft-ribbon-search-button-icon"
                    />
                </button>
            );
        }

        return (
            <div
                className="sft-fmf-row"
            >
                <div
                    className="sft-fmf-row-labels"
                >
                    <div
                        className="sft-fmf-row-caption"
                    >
                        Column Name
                    </div>
                </div>
                <div
                    className="sft-fmf-row-values"
                >
                    <div
                        className="sft-fmf-row-title"
                    >
                        {fieldInput}
                    </div>
                    <div
                        className="sft-fmf-row-buttons"
                    >
                        {addButton}
                    </div>
                </div>

            </div>
        );
    }
}
