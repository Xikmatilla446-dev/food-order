import styled from "styled-components";


export const CartDropdownStyles = styled.div`
  
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  border: 3px dashed #181830;
  background-color: #ffffff;
  top: 80px;
  right: 40px;
  z-index: 5;


  
    
    button {
    margin-top: auto;
  }
   
   
`;



export const CartItemStyles= styled.div`
    height: 420px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
   
`;


export const SpanMessage = styled.div`
    height: 420px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
   
`;
