import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import { Ul, Li, Brand, IconA, IlIcon, LeafOne, LeafThree, LeafTwo } from "../element-styles";


import './Toolbar.css'
import {Link} from "react-router-dom";
import logo from "../../../static/photo/serve.png";
import CardIcon from "../../cart-icon/card-icon-component";
import {inject, observer} from "mobx-react";
import CartDropdown from "../../cart-dropdown/cart-dropdown-component";

const toolbar =  ({rootTree: {Users}, drawerClickHandler}) => {


    const hidden = Users.userCart.hidden;



    return(
        <header className="toolbar navbar  fixed-top">
            <nav className="toolbar__navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={drawerClickHandler}/>
                </div>
                <div className="toolbar__logo"><Brand><img src={logo} alt="logo"/></Brand></div>
                <div className="spacer"/>
                <div className="cart-icon-mobile"><li><IlIcon><CardIcon/></IlIcon></li></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <Li><LeafOne className="LeafOne" /><LeafTwo className="LeafTwo" /><LeafThree className="LeafThree"/><Link className="option-link" to="/">Home</Link></Li>
                        <li><Link  className="option-link" to="/food-menu">Food Menu</Link></li>
                        <li><Link  className="option-link" to="/">Sign up</Link></li>
                        <li><Link  className="option-link" to="/signin" >Sign in</Link></li>
                        <li><Link  className="option-link" to="/">Track Order</Link></li>
                        <li><Link  className="option-link" to="/">My Account</Link></li>
                        <li className="cart-icon"><IlIcon><CardIcon/></IlIcon></li>
                    </ul>
                </div>
                {
                    !hidden ? null : <CartDropdown/>

                }
            </nav>
        </header>
    );
};

export default inject('rootTree')(observer(toolbar));
