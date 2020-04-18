import React from 'react';
import {CardSection, Img, Figcaption, PriceText, CardButtonHeader } from "./card-food-styles";
import CardButton from "../card-button/card-button-component";


const CardfoodComponent = ({item, handlerFoodToCart}) => {



    return (

        <CardSection>
            <Img/>
            <Figcaption>
            <h3>{item.foodCategory}</h3>
                <p>Idlli are a type of savoury rice cake, or </p>
                <CardButtonHeader>
                    <PriceText>${item.price}</PriceText>
                   { handlerFoodToCart ? (<CardButton onClick={() => handlerFoodToCart(item)} >Order Now</CardButton>) : null }

                </CardButtonHeader>

            </Figcaption>

        </CardSection>
    )
};

export default CardfoodComponent;
