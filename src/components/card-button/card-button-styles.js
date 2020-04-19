import styled from "styled-components";


export const CardButtonStyles = styled.button`
  
  width: 8vw;
   height: 3vw;
   padding: 10px;
   box-sizing: border-box;
   outline: none;
   font-family: Arial;
   font-size: .8rem;
   color: black;
   background-color: white;
   border: 2px dashed coral;
   cursor: pointer;
      -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
   transition:border-top-left-radius .5s ease-out;
   transition:border-bottom-right-radius .8s ease-in-out;
   transition:transform 1.5s ease-out;
    &:hover{
    border: 2px dashed coral;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    }
    &:active{
    transform: scale(1.1);
    
   
    }
    
    
   
   
`;
