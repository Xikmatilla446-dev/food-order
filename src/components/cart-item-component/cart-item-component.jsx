import React from 'react';


import { CartItemStyles, Img, ItemDetails } from './cart-component-styles';


const CartItem = ({item: {itemName, price, quantity}}) => {


    return(
        <CartItemStyles>
            <Img />
            <ItemDetails>
                <span>{itemName}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>

        </CartItemStyles>


    )

};

export default CartItem;
