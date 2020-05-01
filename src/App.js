import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';



import BannerComponent from "./components/banner/banner-components";
import PopularSection from "./components/popular-section/popular-section-place";
import {observer, inject} from "mobx-react";
import FoodMenuPage from "./pages/food-menu/food-menu-page";
// import NavbarComponent from "./components/navbar-menu/navbar-cmponent";



import { GlobalStyle } from "./global-styles/global.styles";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "./pages/checkout/checkout-page-component";
import NavbarComponentMenu from "./components/navbar/navbar-menu-responsive";


class App extends React.Component {
constructor(props: UserCard){
    super(props);

}

    render() {


        return (
                <div >
                    <GlobalStyle/>
                    <NavbarComponentMenu/>
                    <Switch>
                        <Route exact path='/' component={BannerComponent} />
                        <Route exact  path='/' component={PopularSection} />
                        <Route exact  path='/food-menu' component={FoodMenuPage} />
                        <Route exact path='/signin' component={SignInAndSignUpPage}/>
                        <Route exact path='/checkout' component={CheckoutPage} />

                    </Switch>
                </div>
         )


    }
};

export default inject('rootTree')(observer(App));
