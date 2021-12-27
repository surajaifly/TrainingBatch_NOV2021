import { LightningElement, api, track } from 'lwc';
import {
    subscribe,
    unsubscribe,
    onError,
    setDebugFlag,
    isEmpEnabled,
} from 'lightning/empApi';

export default class ChildLwcComponent extends LightningElement {
    @api productName;
    @api imageSrc;
    @api productCode;
    @track leadID;

    channelName = '/event/Notification__e';
    isSubscribeDisabled = false;
    isUnsubscribeDisabled = !this.isSubscribeDisabled;

    subscription = {};

    // Initializes the component
    connectedCallback() {
        // Register error listener
        this.handleSubscribe();
        this.registerErrorListener();
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError((error) => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }
    handleSubscribe() {
        // Callback invoked whenever a new event message is received
        const messageCallback = function (response) {
            console.log('New message received: ', JSON.parse(JSON.stringify(response)) );
            this.leadID = JSON.parse(JSON.stringify(response)).data.payload.RecordId__c;
            // Response contains the payload of the new message received
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then((response) => {
            // Response contains the subscription information on subscribe call
            console.log(
                'Subscription request sent to: ',
                JSON.stringify(response.channel)
            );
            this.subscription = response;
            this.toggleSubscribeButton(true);
        });
    }
    handleClick(event) { 
        console.log('BUY Button Click');
        const buyEventVar = new CustomEvent('buyselected',
            { detail: this.productCode }
        );
        this.dispatchEvent(buyEventVar);
    }
}