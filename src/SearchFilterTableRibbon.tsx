import * as React from 'react';
import {SFTCommonFunctions} from './CommonFunctions';
import {SFT} from './SearchFilterTable';
import { FlowOutcome } from 'fcmlib/lib/FlowOutcome';

export class SearchFilterTableRibbon extends React.Component<any, any> {

    leftButtons: any[];
    rightButtons: any[];

    constructor(props: any) {
        super(props);
        this.generateButtons = this.generateButtons.bind(this);
        this.generateComponents = this.generateComponents.bind(this);
    }

    async componentDidMount() {
        await this.generateButtons();
    }

    async generateButtons() : Promise<boolean>{
        this.leftButtons = [];
        this.rightButtons = [];

        const root: SFT = this.props.root;
        const canExport: boolean = (root.component.getAttribute('canExport', 'false').toLowerCase() === 'true');

        // ad export if allowed
        if (canExport === true) {
            this.rightButtons.push(
                <div
                    className="sft-ribbon-button-wrapper"
                    onClick={(e: any) => {e.stopPropagation(); root.doExport(root.rowMap); }}
                >
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes?.RibbonDisplay?.indexOf('icon') >= 0 ?
                    <span
                        key={'exportAll'}
                        className={'glyphicon glyphicon-floppy-save sft-ribbon-button-icon'}
                        title={'Export All'}

                    /> :
                    null
                    }
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes?.RibbonDisplay?.indexOf('text') >= 0 ?
                        <span
                        className="sft-ribbon-button-label"
                    >
                        {'Export All'}
                    </span> :
                        null
                    }
                </div>,
            );
        }

        if (root.rowMap.size > root.currentRowMap.size && canExport === true) {
            this.rightButtons.push(
                <div
                    className="sft-ribbon-button-wrapper"
                    onClick={(e: any) => {e.stopPropagation(); root.doExport(root.currentRowMap); }}
                >
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes?.RibbonDisplay?.indexOf('icon') >= 0 ?
                    <span
                        key={'exportShown'}
                        className={'glyphicon glyphicon-floppy-save sft-ribbon-button-icon'}
                        title={'Export Shown'}

                    /> :
                    null
                    }
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes?.RibbonDisplay?.indexOf('text') >= 0 ?
                        <span
                            className="sft-ribbon-button-label"
                        >
                            {'Export Shown'}
                        </span> :
                        null
                    }
                </div>,
            );
        }

        const arrOutcomes: FlowOutcome[] = Array.from(Object.values(root.component.outcomes));

        for (let pos = 0 ; pos < arrOutcomes.length ; pos++) {
            const outcome: FlowOutcome = arrOutcomes[pos];

            if (outcome.isBulkAction && outcome.developerName !== 'OnSelect' && outcome.developerName !== 'OnChange' && !outcome.developerName.toLowerCase().startsWith('cm')) {

                const showOutcome: boolean = await SFTCommonFunctions.assessGlobalOutcomeRule(outcome, root);

                if (showOutcome === true) {
                    this.rightButtons.push(
                        <div
                            className="sft-ribbon-button-wrapper"
                            onClick={(e: any) => {root.doOutcome(outcome.developerName, undefined); }}
                        >
                            {outcome.attributes?.icon ?
                                <span
                                    key={outcome.developerName}
                                    className={'glyphicon glyphicon-' + (outcome.attributes['icon']?.value || 'plus') + ' sft-ribbon-button-icon'}
                                    title={outcome.label || outcome.developerName}

                                /> :
                                null
                            }
                            {!outcome.attributes?.display || outcome.attributes.display?.value.indexOf('text') >= 0 ?
                                <span
                                    className="sft-ribbon-button-label"
                                >
                                    {outcome.label}
                                </span> :
                                null
                            }
                        </div>,
                    );
                }
            }
        }

        if (root.component.content?.length > 0) {
            this.rightButtons.push(
                <div
                    className="sft-ribbon-search-button-wrapper"
                    onClick={(e: any) => {root.showInfo(); }}
                >

                    <span
                        key={'colpick'}
                        className={'glyphicon sft-ribbon-search-button-icon glyphicon-' + (root.component.attributes?.InfoIcon ? root.component.attributes.InfoIcon : 'question-sign')}
                        title={'Infornation'}
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
                <div
                    className="sft-ribbon-button-wrapper"
                    onClick={(e: any) => {root.showColumnPicker(); }}
                >

                    <span
                        key={'colpick'}
                        className={'glyphicon sft-ribbon-button-icon glyphicon-' + (root.component.attributes?.ColumnsIcon ? root.component.attributes.ColumnsIcon : 'option-vertical')}
                        title={'Select columns'}
                    />
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes.RibbonDisplay?.indexOf('text') >= 0 ?
                        <span
                            className="sft-ribbon-button-label"
                        >
                            {'Column Picker'}
                        </span> :
                        null
                    }
                </div>,
            );
        }

        if (root.selectedRowMap.size > 0 && canExport === true) {
            this.leftButtons.push(
                <div
                    className="sft-ribbon-button-wrapper"
                    onClick={(e: any) => {e.stopPropagation(); root.doExport(root.selectedRowMap); }}
                >
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes?.RibbonDisplay?.indexOf('icon') >= 0 ?
                        <span
                            key={'exportSelected'}
                            className={'glyphicon glyphicon-floppy-save sft-ribbon-button-icon'}
                            title={'Export Selected'}

                        /> :
                        null
                    }
                    {!root.component.attributes?.RibbonDisplay || root.component.attributes?.RibbonDisplay?.indexOf('text') >= 0 ?
                        <span
                            className="sft-ribbon-button-label"
                        >
                            {'Export Selected'}
                        </span> :
                        null
                    }
                </div>,
            );
        }
        this.forceUpdate();
        return true;
    }

    generateComponents() {}

    render() {

        const root: SFT = this.props.root;

        const style: React.CSSProperties = {};
        if (root.titleElement) {
            style.top = '2.5rem';
        }

        return (
            <div
                className="sft-ribbon"
                style={style}
            >
                <div
                    className="sft-ribbon-left-wrapper"
                >
                    <div
                        className="sft-ribbon-title-wrapper"
                    >
                        <span
                            className="sft-ribbon-title"
                        >
                            {'Available actions:'}
                        </span>

                    </div>
                    <div
                        className="sft-ribbon-hbuttons-wrapper"
                    >
                        {this.leftButtons}
                    </div>
                </div>
                <div
                    className="sft-ribbon-right-wrapper"
                >
                   <div
                        className="sft-ribbon-title-wrapper"
                    >
                        <span
                            className="sft-ribbon-title"
                        />

                    </div>
                    <div
                        className="sft-ribbon-hbuttons-wrapper"
                    >
                        {this.rightButtons}
                    </div>
                </div>
            </div>
        );
    }
}
