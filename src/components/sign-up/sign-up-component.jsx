import React, { useState }  from 'react';

import { SignUpStyles } from "./sing-up-styles";
import FormInput from "../form-input/form-input-component";
import ButtonComponent from "../button/button-component";

const SignUp = () => {



    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');



    return(
        <SignUpStyles>
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form>
                <FormInput
                    value={userName}
                    name="userName"
                    type="text"
                    onChange={(e)=>setUserName(e.target.value)}
                    lable="userName"
                    required

                />
                <FormInput
                    value={firstName}
                    name="firstName"
                    type="text"
                    onChange={(e)=>setFirstName(e.target.value)}
                    lable="firstName"
                    required

                />
                <FormInput
                    value={lastName}
                    name="lastName"
                    type="text"
                    onChange={(e)=>setLastName(e.target.value)}
                    lable="lastName"
                    required

                />
                <FormInput
                    value={password}
                    name="password"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    lable="password"
                    required

                />
                <ButtonComponent width="100%">Sign Up</ButtonComponent>
            </form>
       </SignUpStyles>
    )
};

export default SignUp;
