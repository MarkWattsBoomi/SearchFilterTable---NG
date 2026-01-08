import { eContentType, FCMNew } from "fcmlib/lib/FCMNew";
import * as React from 'react';
import { SFT } from './SearchFilterTable';
import { FlowObjectDataArray } from "fcmlib/lib/FlowObjectDataArray";
import { FlowObjectData } from "fcmlib/lib/FlowObjectData";

//const React = (window as any).boomi.flow.React;

export default class SearchFilterTable extends FCMNew {
     
    constructor(props: any) {
        super(props);
        //this.reloadModel = this.reloadModel.bind(this);
    }
    
    
    //componentDidMount() {
        //console.debug("TOP componentDidMount = " + this.props.element.developerName);
        //this.loadModel(this.props);
    //}

    /*
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
       //return true; //this.supressEvents <=0 ;
       console.debug("shouldComponentUpdate");
       return true;
    }
    */

    //componentWillUnmount(): void {
    //    console.debug("TOP componentWillUnmount = " + this.props.element.developerName);
    //}
    
    render() {
        return(
            <SFT 
                //key={this.id}
                parent={this}
                ref={(element: any) => {this.childComponent = element}} // here we are giving FCMCore a ref to our component
            />
        );
    }

    setStateValue(value: any, attributes?: any) {
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
                //element.elementPartial.contentValue = "" + value;
                break;
        }
        if(attributes){
            element.elementPartial.attributes = attributes;
        }
        //this.props.selectItems(this.props.element.id, element.elementPartial.selectedItems, true);
        if(element.elementPartial.selectedItems || element.elementPartial.contentValue || element.elementPartial.attributes){
            console.debug("saving " + element.elementPartial.selectedItems?.length + " items for comp " + this.developerName + "(" + this.id + ")");
            this.props.updateElement(element);
        }
        else {
            console.debug("not saving - no data or state type");
        }
    }
}