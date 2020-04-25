import React from 'react';

import { FoodCategoryStyles, UlCartegory, LiCartegory, LiCartegoryName } from "./food-category-styles";
import SearchInput from "../input-search/input-search";
import {DivBanner} from "../banner/banner-element-styles";


const FoodCategory = () => {


    return(
        <FoodCategoryStyles>
            <UlCartegory>
                <LiCartegoryName>Food Category</LiCartegoryName>
                <LiCartegory type="search"><SearchInput placeholder="Search food"/>
                </LiCartegory>
                <LiCartegory>Itallian</LiCartegory>
                <LiCartegory>Thai</LiCartegory>
                <LiCartegory>South Indian</LiCartegory>
                <LiCartegory>Uzbekistan</LiCartegory>
            </UlCartegory>
        </FoodCategoryStyles>
    )
};


export default FoodCategory;
