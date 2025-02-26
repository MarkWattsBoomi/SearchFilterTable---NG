import { eContentType, FCMNew } from "fcmlib/lib/FCMNew";
import * as React from 'react';
import { SFT } from './SearchFilterTable';
import { FlowObjectDataArray } from "fcmlib/lib/FlowObjectDataArray";
import { FlowObjectData } from "fcmlib/lib/FlowObjectData";

export default class SearchFilterTable extends FCMNew {
    
    constructor(props: any) {
        super(props);
        //this.reloadModel = this.reloadModel.bind(this);
    }
    
    /*
    componentDidMount() {
        this.reloadModel();
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        console.log("1");
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        console.log("1");
        return true;
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        this.reloadModel();
    }

    reloadModel(){
        let reload: boolean = true;
         
        switch(this.contentType){
            case eContentType.ContentObject:
            case eContentType.ContentList:
                if(this.props.element.objectData === null){
                    reload = false;
                }
                break;
            default:
                if(this.props.element.contentValue === null){
                    reload = false;
                }
                break;
        }
        if(reload){
            this.loadModel(this.props);
        }

        if(this.childComponent && this.childComponent.componentDidMount){
            if(this.contentValue || this.objectData || (this.getAttribute("JSONModelValue"))){
                this.childComponent.componentUpdated();
            }
        }
    }
*/
    render() {
        //this.loadModel(this.props);
        return(
            <SFT 
                key={this.id}
                parent={this}
                ref={(element: any) => {this.childComponent = element}} // here we are giving FCMCore a ref to our component
            />
        );
    }

    

    setStateValue(value: any) {
        this.stateValue = value;
        let element: any = {
            elementId: this.id,
            elementPartial: {},
            triggersPageCondition: true,
        };
        switch (this.contentType) {
            case eContentType.ContentObject:
                //element.elementPartial.objectData = value.iFlowObjectDataArray();
                element.elementPartial.selectedItems = element.elementPartial.objectData;
                break;
            case eContentType.ContentList:
                //let items = (value as FlowObjectDataArray).iFlowObjectDataArray(false);
                //element.elementPartial.objectData = (value as FlowObjectDataArray).iFlowObjectDataArray();
                element.elementPartial.selectedItems = (value as FlowObjectDataArray).iFlowObjectDataArray().filter((item)=>{return item.isSelected});
                break;
            case eContentType.ContentBoolean:
                element.elementPartial.contentValue = value === true ? "true" : "false";
                break;
            case eContentType.ContentNumber:
                element.elementPartial.contentValue = "" + value;
                break;
            case eContentType.ContentDateTime:
                element.elementPartial.contentValue = isNaN(value.getTime()) ? "" : value.toISOString();
                break;
            default:
                element.elementPartial.contentValue = "" + value;
                break;
        }
        this.props.updateElement(element);
    }
}