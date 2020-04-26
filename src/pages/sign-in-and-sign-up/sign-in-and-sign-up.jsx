import React from 'react';
import SignIn from '../../components/sign-in/sign-in-component'
import SignUp from "../../components/sign-up/sign-up-component";


import { SignInAndSignUp, SignInAndSignUpImage } from "./sign-in-and-sign-up-styles";

const SignInAndSignUpPage = () =>(

    <SignInAndSignUp className="SignInAndSignUp" >
        <SignIn/>
        <SignUp/>
        <SignInAndSignUpImage/>

    </SignInAndSignUp>
);

export default SignInAndSignUpPage;
