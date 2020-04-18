import styled, {css} from "styled-components";
import banner from "../../static/photo/fruit-food.jpg";


export const DivBanner = styled.div`
  position: absolute;
   margin-top: 15vw;
   margin-left: 25%;
   transform: rotateZ(180deg);
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 3px;
   
   

  
   
`;


export const Banner = styled.div`
   
   $sub-color: grey; 
   $main-color: #3c46a9;
   margin-top: 80px;
   background-color: #3c46a9;
   width: 100%; 
   height: 32vw;
   background-image: url("${banner}");
   background-repeat: initial;
   background-size: cover;
   backdrop-filter: drop-shadow(5vw);
   transform: rotateZ(180deg);
   position: relative;

`;
