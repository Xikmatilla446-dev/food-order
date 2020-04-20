import React from 'react';

import { Nav,Label,Label2,Brand, Input, Ul, Li, IconA, IlA, IlIcon, LeafTwo, LeafOne, LeafThree} from "./navbar-styles";
import './navbar.css';
import logo from "../../static/photo/serve.png";
import CardIcon from "../cart-icon/card-icon-component";
import CartDropdown from "../cart-dropdown/cart-dropdown-component";
import {inject, observer} from "mobx-react";


const NavbarComponent = ({rootTree: {Users}}) => {


  const hidden = Users.userCart.hidden;


    return(
        <Nav className="navbar  fixed-top">
            <Input type="checkbox" id="check"/>
            <Label2 htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </Label2>
            <IlIcon className="cart-icon-mobile"><IconA><CardIcon/></IconA></IlIcon>

            <Label className="logo"><Brand><img src={logo} alt="logo"/></Brand></Label>

            <Ul>
                <Li><LeafOne/><LeafTwo/><LeafThree/><IlA>Home</IlA></Li>
                <Li><IlA>Food Menu</IlA></Li>
                <Li><IlA>Sign up</IlA></Li>
                <Li><IlA>Sign in</IlA></Li>
                <Li><IlA>Track Order</IlA></Li>
                <Li><IlA>My Account</IlA></Li>
                <IlIcon className="cart-icon"><IconA><CardIcon/></IconA></IlIcon>

            </Ul>
            {
                !hidden ? null : <CartDropdown/>

            }



        </Nav>


    )
};

export default inject('rootTree')(observer(NavbarComponent));
