import React from 'react';
import styled, {ThemeProvider} from "styled-components";


import { Nav,Label,Label2,Brand, Input, Ul, Li, IconA, IlA, IlIcon, LeafTwo, LeafOne, LeafThree} from "./navbar-styles";
import './navbar.css';
import logo from "../../static/photo/logo.png";
import CardIcon from "../cart-icon/card-icon-component";


const NavbarComponent = () => {


    return(
        <Nav className="navbar  fixed-top">
            <Input type="checkbox" id="check"/>
            <Label2 htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </Label2>

            <Label className="logo"><Brand><img src={logo} alt="logo"/></Brand></Label>
            <Ul>
                <Li><LeafOne/><LeafTwo/><LeafThree/><IlA>Home</IlA></Li>
                <Li><IlA>Food Menu</IlA></Li>
                <Li><IlA>Sign up</IlA></Li>
                <Li><IlA>Sign in</IlA></Li>
                <Li><IlA>Track Order</IlA></Li>
                <Li><IlA>My Account</IlA></Li>
                <IlIcon><IconA><CardIcon/></IconA></IlIcon>

            </Ul>

        </Nav>


    )
};

export default NavbarComponent;
