import React from 'react';
import banner from '../../static/photo/banner.png'
import { Banner, DivBanner } from "./banner-element-styles";
import SearchInput from "../input-search/input-search";
import ButtonComponent from "../button/button-component";

const BannerComponent = () => {

    return (
        <Banner className="banner-component" props={banner}>
            <DivBanner>
                <SearchInput placeholder="I would like to eat"/>
                <ButtonComponent width="10vw">Search food</ButtonComponent>
            </DivBanner>

        </Banner>
    )
};

export default BannerComponent;
