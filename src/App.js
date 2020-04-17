import React from 'react';
import './App.css';
import NavbarComponent from './components/navbar/navbar-component';
import BannerComponent from "./components/banner/banner-components";
import PopularSection from "./components/popular-section/popular-section-place";
import {observer, inject} from "mobx-react";
import FoodMenuPage from "./pages/food-menu/food-menu-page";




const App = (props) => {

    const { rootTree} =props;
  return (
    <div className="App">

      <NavbarComponent/>
        <BannerComponent/>
      <PopularSection/>
        <hr/>
        <br/>
        <FoodMenuPage/>
    </div>
  );
}

export default inject('rootTree')(observer(App));
