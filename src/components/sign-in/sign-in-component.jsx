import React, { useState } from 'react';
import { SignInStyles } from "./sign-in-styles";
import FormInput from "../form-input/form-input-component";
import ButtonComponent from "../button/button-component";

const SignIn = () => {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');



    return (
        <SignInStyles>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
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
                    value={password}
                    name="password"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    lable="password"
                    required

                />
                <ButtonComponent width="100%">Sign In</ButtonComponent>
            </form>

        </SignInStyles>
    )
};

export default SignIn;
