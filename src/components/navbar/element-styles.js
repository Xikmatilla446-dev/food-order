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
    display: inline-block;
    white-space: nowrap;
    text-space: 5px;
    
    img{
    width: 45px;
    height: 45px;
    padding: 0;
    box-sizing: border-box;
    }
`;


export const Ul = styled.ul`
   
   $sub-color: grey; 
   $main-color: black;
  
    background-color: #181830;
    
    
  
  
    


`;

export const Li = styled.li`
   
   $sub-color: grey; 
   $main-color: black;
  
    background-color: transparent;
    display: inline-block;
    padding: 0 0.5rem;
    position: relative;
    line-height: 80px;
    color: #ffff;
    border: 1px solid transparent;
  
     &:hover span{
      display: inline-block;
    }  
    
  

`;


export const IlIcon = styled.li`
   
   $sub-color: grey; 
   $main-color: black;
  
    padding: 5px 20px;
    line-height: 90px;
    box-sizing: border-box;
   
    background-color: #ffffff;
    display: inline-block;
    position: relative;
    color: #ffff;
    border: 1px solid transparent;
    cursor: pointer;
      transition:border-top-left-radius .5s ease-out;
    transition:border-bottom-right-radius .8s ease-in-out;
    transition:transform 1.5s ease-out;
    &:hover{
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
    }
    &:active{
    transform: scale(1.1);
    
   
    }
  
    
  

`;
export const LeafOne = styled.span`
   
      
    display: none;
    position: absolute;
    background-color: #5FA11C;
    border: 1px solid transparent;
    width: 15px;
    height: 15px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-left: -20px;
    margin-top: 1.8vw;
    
    transition:transform 1.5s ease-out;
    &:hover{
    
    }
    &:active{
    transform: scale(1.1);
    
   
    }
  
    
  

`;
export const LeafTwo = styled.span`
   
      
    display: none;
    position: absolute;
    background-color: #5FA11C;
    border: 1px solid transparent;
    width: 15px;
    height: 15px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-left: -18px;
    margin-top: 3.5vw;
    transform: rotateZ(90deg);
    transition: all 1s linear;
    
    transition:transform 1.5s ease-out;
    &:hover{
    
    }
    &:active{
    transform: scale(1.1);
    
   
    }
  
    
  

`;

export const LeafThree = styled.span`
   
      
    display: none;
    position: absolute;
    background-color: #5FA11C;
    border: 1px solid transparent;
    width: 15px;
    height: 15px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-left: -33px;
    margin-top: 2.8vw;;
    transform: rotateZ(120deg);
    transition: all 1s linear;
    
    transition:transform 1.5s ease-out;
    &:hover{
    
    }
    &:active{
    transform: scale(1.1);
    
   
    }
  
    
  

`;


export const IlA = styled.a`
   
   $sub-color: grey;
   padding: 0; 
   $main-color: black;
  
  
    color: #ffff;
    cursor: pointer;
    
   &:hover {
   color: red;
   
   }
  

`;
export const IconA = styled.a`
   
    color: black;
    background-color: white;
    
   &:hover {
   color: red;
   
   }
  

`;
