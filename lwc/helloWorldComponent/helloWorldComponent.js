import { LightningElement, track, wire} from 'lwc';

import callApex from '@salesforce/apex/HelloWorldController.callApex';

export default class HelloWorldComponent extends LightningElement {
    //LWC Controller to LWC HTML.
    @track bodytext = 'This is the text from Controller';
    @track showDetails = false;

    bodytextNew = 'This is the text from Controller --- Wihtout @track';

    get bodytextNewget() { 
        return 'This is the text from Controller --- With get';
    }

    //APEX Controller to LWC Controller
    @wire(callApex, { textVar: 'from LWC' }) bodytextWire;
    //Output or @wire is Object, contains two elements 1. data(SUCCESS) and 2. error(EXCEPTION).

    handleClick(event) {
        console.log('BUTTON CLICK');
        this.showDetails = true;
    }


    value = [''];

    get options() {
        return [
            { label: 'Show Details', value: 'showdetails' }
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
        this.showDetails = true;
    }

}