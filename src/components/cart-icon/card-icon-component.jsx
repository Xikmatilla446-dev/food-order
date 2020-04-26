import React from 'react';
import { CartIconDiv, Count } from "./card-icon-styles";
import { ReactComponent as ShoppingIcon } from "../../static/assets/shopping-cart.svg";
import {inject, observer} from "mobx-react";


const CardIcon = ({rootTree:{Users}}) => {



    const handlerCartHidden = () => {
        debugger
        Users.userCart.cartHidden();


    };

    return(
        <CartIconDiv onClick={handlerCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <Count className="item-count">{Users.userCart.totalFood}</Count>
        </CartIconDiv>

    )
};


export default inject('rootTree')(observer(CardIcon));
