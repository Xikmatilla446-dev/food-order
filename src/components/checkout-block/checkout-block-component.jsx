import React from 'react';
import { Checkout, HeaderBlock, Total } from "./checkout-block-styles";


const CheckoutComponent = () => {

    return (
        <Checkout>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>

        </Checkout>
    )
};

export default CheckoutComponent;
