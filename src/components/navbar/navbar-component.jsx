import React from 'react';
import logo from '../../static/photo/logo.png'
import {Menu, Brand, Ul, Li, IlA, IconA, IlIcon, LeafTwo, LeafOne, LeafThree} from "./element-styles";
import CardIcon from "../cart-icon/card-icon-component";
import './navbar.styles.css'

const NavbarComponent = () => {

    return (
        <Menu className="navbar  fixed-top">
                <Ul>
                    <Brand><img src={logo} alt="logo"/></Brand>
                    <Li><IlA><LeafOne/><LeafTwo/><LeafThree/>Home</IlA></Li>
                    <Li><IlA>Food Menu</IlA></Li>
                    <Li><IlA>Sign up</IlA></Li>
                    <Li><IlA>Sign in</IlA></Li>
                    <Li><IlA>Track Order</IlA></Li>
                    <Li><IlA>My Account</IlA></Li>
                    <IlIcon><IconA><CardIcon/></IconA></IlIcon>

                </Ul>

        </Menu>
    )
};

export default NavbarComponent;
