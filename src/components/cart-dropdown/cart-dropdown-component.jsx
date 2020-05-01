import React from 'react';

import { CartDropdownStyles, CartItemStyles, SpanMessage } from "./cart-dropdown-styles";
import {inject, observer} from "mobx-react";
import CartItem from "../cart-item-component/cart-item-component";
import ButtonComponent from "../button/button-component";
import { withRouter } from "react-router-dom";


const CartDropdown = ({history, rootTree:{Users}}) => {

    const cartItems = Users.userCart.items;

    const handlerCartHidden = () => {
        debugger
        Users.userCart.cartHidden();

    };


    return(
        <CartDropdownStyles>
                <CartItemStyles>
                    {
                    cartItems.length > 0 ?
                        cartItems.map((cartItem, index) =>(
                            <CartItem key={index}
                                      item={cartItem}/>))
                        :
                        <SpanMessage>Your cart is empty</SpanMessage>

                }


            </CartItemStyles>

            <ButtonComponent onClick={()=> {
                handlerCartHidden();
                history.push('/checkout');

            }}>GO TO CHECKOUT</ButtonComponent>
        </CartDropdownStyles>


    )

};

export default inject('rootTree')(withRouter(observer(CartDropdown)));
