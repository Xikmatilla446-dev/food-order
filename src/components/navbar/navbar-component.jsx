import React from 'react';
import logo from '../../static/photo/logo.png'
import styled, {ThemeProvider} from "styled-components";
import {Menu, Brand, Ul, Il, IlA, IconA, IlIcon, LeafTwo, LeafOne, LeafThree} from "./element-styles";
import CardIcon from "../cart-icon/card-icon-component";
import './navbar.styles.css'

const NavbarComponent = () => {

    return (
        <Menu className="navbar  fixed-top">
                <Ul>
                    <Brand><img src={logo} alt="logo"/></Brand>
                    <Il><LeafOne/><LeafTwo/><LeafThree/><IlA>Home</IlA></Il>
                    <Il><IlA>Food Menu</IlA></Il>
                    <Il><IlA>Sign up</IlA></Il>
                    <Il><IlA>Sign in</IlA></Il>
                    <Il><IlA>Track Order</IlA></Il>
                    <Il><IlA>My Account</IlA></Il>
                    <IlIcon><IconA><CardIcon/></IconA></IlIcon>

                </Ul>

        </Menu>
    )
};

export default NavbarComponent;
