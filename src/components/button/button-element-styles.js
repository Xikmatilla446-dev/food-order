import styled, {css} from "styled-components";


export const Button = styled.button`
  
  width: 10vw;
   height: 4vw;
   padding: 10px;
   box-sizing: border-box;
   outline: none;
   font-family: Arial;
   font-size: 1.2rem;
   border: 1px solid #ff6c16;
   background: #ff6c16;
   color: white;
   cursor: pointer;
   transition:transform 1.5s ease-out;
    &:hover{
    border: 1px solid #4d8fff;
    }
    &:active{
    transform: scale(1.1);
   
    }
    
    
   
   
`;
