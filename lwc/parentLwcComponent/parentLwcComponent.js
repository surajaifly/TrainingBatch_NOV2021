import { LightningElement, track, wire } from 'lwc';

import { publish, MessageContext } from 'lightning/messageService';
import productSelected from '@salesforce/messageChannel/sampleMsgChannel__c';

export default class ParentLwcComponent extends LightningElement {
    productDetails = [
        {
            productcode: 11100201,
            name: "Virat Kohli Basket Classic Unisex Sneakers",
            image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375314/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Basket-Classic-Unisex-Sneakers"
        },
        {
            productcode: 11100232,
            name: "Caracal SoftFoam+ Sneakers",
            image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369863/07/sv01/fnd/IND/fmt/png/Caracal-SoftFoam+-Sneakers"
        },
        {
            productcode: 12333144,
            name: "PUMA Claw Men's Shoes",
            image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/381367/02/sv01/fnd/IND/fmt/png/PUMA-Claw-Men's-Shoes"
        },
    ];

    @wire(MessageContext) messageContext;
    
    @track selectedIndex = 0;

    @track selectedProduct = this.productDetails[this.selectedIndex].name;
    @track selectedImage = this.productDetails[this.selectedIndex].image;
    @track selectedproductcode = this.productDetails[this.selectedIndex].productcode;

    showPayment = false;
    
    handleClick(event) { 
        this.selectedIndex = this.selectedIndex + 1;
        if (this.selectedIndex == 3) { 
            this.selectedIndex = 0;
        }
        this.selectedProduct = this.productDetails[this.selectedIndex].name;
        this.selectedImage = this.productDetails[this.selectedIndex].image;
        this.selectedproductcode = this.productDetails[this.selectedIndex].productcode;

        const payload = { productCode: this.selectedproductcode };
        console.log('payload ', payload);
        publish(this.messageContext, productSelected, payload);
    }


    handleSeletedProduct(event) { 
        const prdCode = event.detail;
        console.log('Product Seleted ', prdCode);
        this.showPayment = true;
        
    }
}