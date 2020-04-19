import styled from "styled-components";
import imgPhoto from '../../static/photo/food-eggs.jpeg';


export const CartItemStyles = styled.div`
  
  
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  margin-top: 20px;

  img {
    width: 30%;
  }

   
`;


export const Img = styled.img`
  

   background-image: url("${imgPhoto}");
   background-size: cover;
   background-repeat: no-repeat;
   
`;

export const ItemDetails = styled.div`
  
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    
    
      span:nth-child(1) {
      width: 90%;
      margin-bottom: 15px;
    }

    span:nth-child(2) {
      width: 10%;
    }

`;



