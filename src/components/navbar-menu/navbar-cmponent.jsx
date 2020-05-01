import React from 'react';
import {inject, observer} from "mobx-react";
import { Link } from "react-router-dom";


import logo from "../../static/photo/serve.png";
import CardIcon from "../cart-icon/card-icon-component";
import CartDropdown from "../cart-dropdown/cart-dropdown-component";
import { Nav,Label,Label2,Brand, Input, Ul, Li, IconA,  IlIcon, LeafTwo, LeafOne, LeafThree} from "./navbar-styles";
import './navbar.css';


const NavbarComponent = ({rootTree: {Users}}) => {


  const hidden = Users.userCart.hidden;


    return(
        <Nav className="navbar  fixed-top">
            <Input type="checkbox" id="check"/>
            <Label2 htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </Label2>
            <IlIcon className="cart-icon-mobile">
                <IconA><CardIcon/></IconA>
            </IlIcon>

            <Label className="logo">
                <Link to="/"><Brand><img src={logo} alt="logo"/></Brand></Link></Label>


            <Ul>
                <Li><LeafOne/><LeafTwo/><LeafThree/><Link className="option-link" to="/">Home</Link></Li>
                <Li><Link  className="option-link" to="/food-menu">Food Menu</Link></Li>
                <Li><Link  className="option-link" to="/">Sign up</Link></Li>
                <Li><Link  className="option-link" to="/signin" >Sign in</Link></Li>
                <Li><Link  className="option-link" to="/">Track Order</Link></Li>
                <Li><Link  className="option-link" to="/">My Account</Link></Li>
                <IlIcon className="cart-icon"><IconA><CardIcon/></IconA></IlIcon>
                {
                    !hidden ? null : <CartDropdown/>

                }

            </Ul>



        </Nav>


    )
};

export default inject('rootTree')(observer(NavbarComponent));
