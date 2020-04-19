import React from 'react';

import { CartDropdownStyles, CartItemStyles, SpanMessage } from "./cart-dropdown-styles";
import {inject, observer} from "mobx-react";
import CartItem from "../cart-item-component/cart-item-component";
import ButtonComponent from "../button/button-component";


const CartDropdown = ({rootTree:{Users}}) => {

    const cartItems = Users.userCart.items;



    return(
        <CartDropdownStyles>
                <CartItemStyles>
                    {
                    cartItems.length ?
                        cartItems.map((cartItem, index) =>(
                            <CartItem key={index}
                                      item={cartItem}/>))
                        :
                        <SpanMessage>Your cart is empty</SpanMessage>

                }


            </CartItemStyles>

            <ButtonComponent onClick={()=> { alert("GO TO CHECKOUT")}}>GO TO CHECKOUT</ButtonComponent>
        </CartDropdownStyles>


    )

};

export default inject('rootTree')(observer(CartDropdown));
