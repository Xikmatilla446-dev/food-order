import React from 'react';
import {observer, inject} from "mobx-react";

import { FoodSection } from "./food-menu-styles";
import { SectionCard } from "../../components/popular-section/popular-section-styles";
import content from "../../components/popular-section/content";
import CardfoodComponent from "../../components/card/card-food-component";


const FoodMenuPage = ( {rootTree:{Users}}) => {

    const handlerFoodToCart = (item) => {
        debugger

        Users.userCart.addFood(item);
    };




    return (
        <FoodSection >
            <SectionCard>

                {content.map((item, index) => (
                    <CardfoodComponent key={index}
                                       item={item}
                                       handlerFoodToCart={handlerFoodToCart}
                    />
                ))}
            </SectionCard>

        </FoodSection>
    )
};

export default inject('rootTree')(observer(FoodMenuPage));
