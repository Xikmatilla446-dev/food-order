import React from 'react';
import logo from '../../static/photo/logo.png'
import styled, {ThemeProvider} from "styled-components";
import {Menu, Brand, Ul, Il, IlA} from "./element-styles";


const NavbarComponent = () => {

    return (
        <Menu>
                <Ul>
                    <Brand><img src={logo} alt="logo"/></Brand>
                    <Il><IlA>Home</IlA></Il>
                    <Il><IlA>Food Menu</IlA></Il>
                    <Il><IlA>Sign up</IlA></Il>
                    <Il><IlA>Sign in</IlA></Il>
                    <Il><IlA>Track Order</IlA></Il>
                    <Il><IlA>My Account</IlA></Il>

                </Ul>

        </Menu>
    )
};

export default NavbarComponent;
