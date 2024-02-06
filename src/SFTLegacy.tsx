import { FCMLegacy } from "fcmlib/lib/FCMLegacy";
import * as React from 'react';
import { SFT } from './SearchFilterTable';
declare const manywho: any;

class SearchFilterTable extends FCMLegacy {
    
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