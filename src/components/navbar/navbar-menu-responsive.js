import React, { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

const NavbarComponentMenu = ()=> {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);



    const drawerToggleClickHandler = () => {
        setSideDrawerOpen((prevState) => {
            return {sideDrawerOpen: !sideDrawerOpen};
        })
    };

    const backdropClickHandler = () => {
        setSideDrawerOpen(false)
    };


    let backdrop;

    if (sideDrawerOpen) {

        backdrop = <Backdrop click={backdropClickHandler}/>
    }

    return (
        <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
            <SideDrawer
                click={backdropClickHandler}
                show={sideDrawerOpen}/>
            {backdrop}
        </div>
    );

};


export default NavbarComponentMenu;
