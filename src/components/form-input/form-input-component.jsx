import React from 'react';
import { GroupInput, Input, Label } from "./form-input-styles";

const FormInput = ({handleChange, lable, ...otherProps }) => {


    return (
        <GroupInput>
            <Input className="form-input" onChange={handleChange} {...otherProps} />
            {
                lable ?
                    (<Label prop={`${otherProps.value.length ? 'shrink' : '' }`}>
                        {lable}
                    </Label>)
                    : null
            }


        </GroupInput>
    )
};

export default FormInput;
