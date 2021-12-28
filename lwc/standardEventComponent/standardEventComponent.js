import { LightningElement } from 'lwc';

export default class StandardEventComponent extends LightningElement {
    inputFieldValue = 'test Input';

    handleInput(event) { 
        this.inputFieldValue = event.target.value;
    }
}