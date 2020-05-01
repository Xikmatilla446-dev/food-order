import React from 'react';


import './SideDrawer.css';
import {Link} from "react-router-dom";


const sideDrawer = props => {


    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul className="side-drawer-items">
                <li onClick={props.click} ><Link  className="option-link" to="/">Menu</Link></li>
                <li onClick={props.click} ><Link  className="option-link" to="/food-menu">Food Menu</Link></li>
                <li onClick={props.click} ><Link  className="option-link" to="/">Sign up</Link></li>
                <li onClick={props.click} ><Link  className="option-link" to="/signin" >Sign in</Link></li>
                <li onClick={props.click} ><Link  className="option-link" to="/">Track Order</Link></li>
                <li onClick={props.click} ><Link  className="option-link" to="/">My Account</Link></li>
            </ul>
        </nav>
    )

};

export default sideDrawer;
