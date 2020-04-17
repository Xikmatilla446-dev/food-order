import React from 'react';
import {CardButtonStyles} from "./card-button-styles";


const CardButton= ({children, ...otherProps}) => {

    return (
        <CardButtonStyles {...otherProps}>{children}</CardButtonStyles>
    )
};

export default CardButton;
