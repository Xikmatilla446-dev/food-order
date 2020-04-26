import styled from "styled-components";
import image from '../../static/photo/login-img.png';


export const SignInAndSignUp = styled.div`
  
  width: 100%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  margin: 30px auto;
  padding: 5vw;
  box-sizing: border-box;


 
`;

export const SignInAndSignUpImage = styled.div`
  
  
  margin-top: 5vw;
  padding: 5px;
  width: 100%;
  height: auto;
  background-image: url("${image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    padding: 30px 30px;
 

 
`;


