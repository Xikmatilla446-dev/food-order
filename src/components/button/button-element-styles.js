import styled from "styled-components";


export const Button = styled.button`
  
   height: 4vw;
   width: ${props => props.width ? props.width : 'auto'};
   box-sizing: border-box;
   outline: none;
   font-family: Arial;
   font-size: 1rem;
   border: 1px solid #ff6c16;
   background: #ff6c16;
   color: white;
   cursor: pointer;
   min-width: 11vw;
  letter-spacing: 0.5px;
  padding: 5px 35px 5px 35px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  //overflow: hidden;
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
