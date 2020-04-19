import React from 'react';
import {Button} from "./button-element-styles";


const ButtonComponent = ({width,children}) => {

    return (
        <Button >

            {children}</Button>
    )
};

export default ButtonComponent;
