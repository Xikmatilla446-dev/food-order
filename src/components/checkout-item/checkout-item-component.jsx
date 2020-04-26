import React from 'react';
import { CheckoutItemStyles  , ImageContainer, NameStyles, QuantityStyles, ArrowStyles, ValueStyles, PriceStyles, RemovebuttonStyles } from './checkout-item-styles'
import { ReactComponent as Remove} from "../../static/assets/remove.svg";


import imageUrl from '../../static/photo/food-eggs.jpeg';


const CheckoutItemComponent = ({cartItem}) => {
    debugger
    const {itemName, price, quantity} = cartItem;



    return(
        <CheckoutItemStyles>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <NameStyles>{itemName}</NameStyles>
            <QuantityStyles>
                <ArrowStyles onClick={()=> alert("remove")}>&#10094;</ArrowStyles>
                <ValueStyles>{quantity}</ValueStyles>
                <ArrowStyles onClick={ () => alert("add")}>&#10095;</ArrowStyles>
        </QuantityStyles>
            <PriceStyles>{price}</PriceStyles>
            <RemovebuttonStyles onClick={
                ()=> alert("clear") }>
                <Remove className="remove" />
            </RemovebuttonStyles>

        </CheckoutItemStyles>

    )

};

export default CheckoutItemComponent;
