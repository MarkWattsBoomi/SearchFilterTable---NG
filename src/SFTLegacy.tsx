import { FCMLegacy } from "fcmlib/lib/FCMLegacy";
import * as React from 'react';
import { SFT } from './SearchFilterTable';
import { SFTMessageBox } from "./SFTMessageBox";
declare const manywho: any;

class SearchFilterTable extends FCMLegacy {
    
    componentDidMount() {
        if(this.childComponent && this.childComponent.componentDidMount){
            if(this.contentValue || this.objectData || (this.getAttribute("JSONModelValue"))){
                this.childComponent.componentDidMount();
            }
        }
    }

    componentUpdated(changeDetected: boolean){
        if(this.childComponent && this.childComponent.componentUpdated){
            this.childComponent.componentUpdated();
        }
    }

    render() {
        return(
            <SFT
                key={this.id}
                parent={this}
                ref={(element: SFT) => {this.childComponent = element}}
            />
        );
    }
}
manywho.component.register('SearchFilterTable', SearchFilterTable);
manywho.component.register('SFTMessageBox', SFTMessageBox);