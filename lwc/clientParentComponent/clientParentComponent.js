import { LightningElement, wire, track } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import productSelected from '@salesforce/messageChannel/sampleMsgChannel__c';

export default class ClientParentComponent extends LightningElement {
    @wire(MessageContext) messageContext;

    @track productCode;


    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                productSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    handleMessage(message) {
        console.log('message.productCode', message.productCode);
        this.productCode = message.productCode;
    }
}