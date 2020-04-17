import styled, {css} from "styled-components";
import imgPhoto from '../../static/photo/food-eggs.jpeg';

export const Img = styled.img`
  
   background-image: url("${imgPhoto}");
   background-size: cover;
   background-repeat: no-repeat;
   width: 100%;
   height: 20vw;
   background-position: center;
   
   transition:border-top-left-radius .5s ease-out;
   transition:border-bottom-right-radius .5s ease-in-out;
   
   &:hover {
   
    border-top-left-radius: 15%;
    border-bottom-right-radius: 15%;
    
   
   }
   
    
   
`;

export const PriceText = styled.p`
   color: black;
   font-family: Arial;
   text-space: 1px;
   font-size: 20px;
   width: 100%; 
`;

export const CardButtonHeader = styled.div`
     width: 100%;
     margin-top: 3vw;
     box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12em;
    padding: 0 20px 20px 0;
    
  
`;


export const Figcaption = styled.figcaption`

   width: 80%;
    margin-top: 2vw; 
    padding: 0px 20px;
    box-sizing: border-box;
    
   h3{
      color: black;
      font-family: Arial;
      
   }
   
`;
export const CardSection = styled.section`
   
   width: 30vw;
   background: white;
   padding: 0;
   box-sizing: border-box;
   -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
   margin-top: 3vw;
   
   &:hover{
   
    border-top-left-radius: 15%;
   }
    
    

`;
