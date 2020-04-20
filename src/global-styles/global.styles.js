import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
  padding: 0px;
  margin: 0;
  text-decoration: none;
  list-style-type: none;
  box-sizing: border-box;
}



body {
  margin: 0;
  font-family: Arial;
  
   
 




 @media screen and (max-width: 1116px){
 
 .section-popular{
 margin-top: 10vw;
 }
 
 }
 @media screen and (max-width: 1058px){
 
.search-input{
  font-size: 12px;

}

.button-component{

  font-size: 12px;
  
}
 
 }
 
 
 @media screen and (max-width: 900px){
 
 .banner-component{
   top: 80px;
   background-color: #3c46a9;
   width: 100%; 
   height: 32vw;
   background-repeat: no-repeat;
   background-size: cover;
 }
 
 }
 @media screen and (max-width: 858px){
   
  
   padding: 10px;
  
   


.search-input{
  font-size: 12px;

}

.button-component{
  font-size: 10px;
  height: 4vw;
   color: white;
   cursor: pointer;
   min-width: 8vw;  
  letter-spacing: 0.2px;
  padding: 2px 10px 2px 10px;
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  justify-content: center;


}

   }
  
}

 @media screen and (max-width: 706px){
 
 
 .section-card{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
 
 }
 
 
 .section-popular{
 margin-top: 15vw;
 }
 
 
.search-input{
  font-size: 10px;

}

.button-component{

  font-size: 10px;
  
}
 
 }
 @media screen and (max-width: 500px){




.search-input{
  font-size: 10px;

}

.button-component{
  font-size: 7px;
  height: 22px;
   color: white;
   cursor: pointer;
   min-width: 8vw;
  letter-spacing: 0.2px;
  padding: 2px 10px 2px 10px;
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  justify-content: center;


}



 .section-card{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
 
 }
 


}
 


`;
