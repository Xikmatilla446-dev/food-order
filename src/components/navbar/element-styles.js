import styled, {css} from "styled-components";


export const Menu = styled.div`
   
   $sub-color: grey; 
   $main-color: #3c46a9;
   
   background-color: #3c46a9;
   width: 100%; 

`;

export const Brand = styled.li`
   
   
    background-color: #181830;
    display: inline-block;
    color: #ffff;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 5px 30% 0 5%;
    display: inline-block;
    white-space: nowrap;
    text-space: 5px;
    
    img{
    width: 100px;
    height: 45px;
    padding: 0;
    box-sizing: border-box;
    }
`;


export const Ul = styled.ul`
   
   $sub-color: grey; 
   $main-color: black;
  
    background-color: #181830;
    padding: 5px 0 5px 0;
    box-sizing: border-box;
    
    
  
  
    


`;

export const Il = styled.li`
   
   $sub-color: grey; 
   $main-color: black;
  
    background-color: #181830;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    color: #ffff;
    border: 1px solid transparent;
    cursor: pointer;
    
  

`;
export const IlA = styled.a`
   
   $sub-color: grey;
   padding: 0; 
   $main-color: black;
  
  
    color: #ffff;
    
   &:hover {
   color: red;
   
   }
  

`;
