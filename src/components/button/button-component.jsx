import React from 'react';
import {Button} from "./button-element-styles";


const ButtonComponent = ({width,children}) => {

    return (
        <Button className="button-component"  width={width}>

            {children}</Button>
    )
};

export default ButtonComponent;
