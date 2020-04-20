import React from 'react';
import './App.css';
// import NavbarComponent from './components/navbar/navbar-component';
import BannerComponent from "./components/banner/banner-components";
import PopularSection from "./components/popular-section/popular-section-place";
import {observer, inject} from "mobx-react";
import FoodMenuPage from "./pages/food-menu/food-menu-page";
import NavbarComponent from "./components/navbar-menu/navbar-cmponent";

import { GlobalStyle } from "./global-styles/global.styles";


class App extends React.Component {
constructor(props: UserCard){
    super(props);

}

    render() {


        return (
                <div >
                    <GlobalStyle/>
                    <NavbarComponent/>
                    <BannerComponent/>
                    <PopularSection/>
                    <FoodMenuPage/>
                </div>
         )


    }
};

export default inject('rootTree')(observer(App));
