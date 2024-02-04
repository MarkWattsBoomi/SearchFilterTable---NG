import { FCMNew } from "fcmlib/lib/FCMNew";
import * as React from 'react';
import { SFT } from './SearchFilterTable';

export default class CascadingCombos extends FCMNew {

    sft: SFT;

    render() {
        return(
            <SFT 
                parent={this}
                ref={(element: any) => {this.childComponent = element}} // here we are giving FCMCore a ref to our component
            />
        );
    }
}