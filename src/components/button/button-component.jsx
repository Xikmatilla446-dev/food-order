import React from 'react';
import {Button} from "./button-element-styles";


const ButtonComponent = ({width,children, ...otherProps}) => {

    return (
        <Button className="button-component"
                {...otherProps}
                width={width}>
            {children}</Button>
    )
};

export default ButtonComponent;
