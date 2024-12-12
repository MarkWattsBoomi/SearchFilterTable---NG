import { eContentType, FCMNew } from "fcmlib/lib/FCMNew";
import * as React from 'react';
import { SFT } from './SearchFilterTable';
import { FlowObjectDataArray } from "fcmlib/lib/FlowObjectDataArray";

export default class SearchFilterTable extends FCMNew {

    componentDidMount() {
        if(this.childComponent && this.childComponent.componentDidMount){
            if(this.contentValue || this.objectData || (this.getAttribute("JSONModelValue"))){
                //this.childComponent.componentDidMount();
            }
        }
    }

    componentUpdated(changeDetected: boolean){
        if(this.childComponent && this.childComponent.componentUpdated){
            this.childComponent.componentUpdated();
        }
    }
    /*
    UNSAFE_componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        // if the component id changed always reload.
        if (nextProps.element.id !== this.id) {
            if(this.loadModel(nextProps)){
                if(this.childComponent && this.componentDidMount) {
                    this.componentDidMount();
                }
            }
            else{
                if(this.childComponent && this.componentUpdated) {
                    this.componentUpdated(false);
                }
                else if(this.childComponent && this.componentDidMount) {
                    this.componentDidMount();
                }
            }
        }
        else {
            let newModel: FlowObjectDataArray = new FlowObjectDataArray(nextProps.element.objectData);
            if(JSON.stringify(this.objectData) != JSON.stringify(newModel)){
                if(this.loadModel(nextProps)){
                    if(this.childComponent && this.componentDidMount) {
                        this.componentDidMount();
                    }
                }
                else {
                    if(this.childComponent && this.componentUpdated) {
                        this.componentUpdated(false);
                    }
                    else if(this.childComponent && this.componentDidMount) {
                        this.componentDidMount();
                    }
                }
            }
            
        }
    }
    */
   
    render() {
        return(
            <SFT 
                key={this.id}
                parent={this}
                ref={(element: any) => {this.childComponent = element}} // here we are giving FCMCore a ref to our component
            />
        );
    }
}