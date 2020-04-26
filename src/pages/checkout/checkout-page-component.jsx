import React from 'react';

import { CheckoutStyles } from "./checkout-page-component-styles";
import CheckoutComponent from "../../components/checkout-block/checkout-block-component";
import {inject, observer} from "mobx-react";
import { Total} from "../../components/checkout-block/checkout-block-styles";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item-component";

const CheckoutPage = ({rootTree:{Users}}) => {

    const cartItems = Users.userCart.items;



    return(
        <CheckoutStyles>
            <CheckoutComponent/>
            {
                cartItems.map(cartItem =>
                    <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>
                )
            }
        </CheckoutStyles>
    )

};

export default inject('rootTree')(observer(CheckoutPage));
