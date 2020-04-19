import styled from "styled-components";


export const Button = styled.button`
  
   height: 4vw;
   width: ${props => props.width ? '10vw' : 'auto'};
   box-sizing: border-box;
   outline: none;
   font-family: Arial;
   font-size: 1.2rem;
   border: 1px solid #ff6c16;
   background: #ff6c16;
   color: white;
   cursor: pointer;
   min-width: 11vw;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  justify-content: center;

   transition:transform 1.5s ease-out;
   transition:border-top-left-radius .5s ease-out;
   transition:border-bottom-right-radius .5s ease-in-out;
  
    &:hover{
    border-top: 1px solid red;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom: 1px solid blue;
    }
    &:active{
    transform: scale(1.1);
    margin-left: 5px;
   
    }
    
    
   
   
`;
