import styled from "styled-components";

export const Nav = styled.nav`
   
   

    background-color: #181830;
    height: 80px;
    width: 100%;
    
  
  
  
  


`;

export const Label2 = styled.label`
   
   

`;
export const Input = styled.input`
   
  


`;
export const Label = styled.label`
   
   color: white;
   font-size: 35px;
   padding: 50px 50px;
   box-sizing: border-box;
   font-weight: bold;
   
  


`;



export const Brand = styled.span`
   
   
    background-color: #181830;
    display: inline-block;
    color: #ffff;
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    margin-top: 20px;
    
    
    img{
    width: auto;
    height: 40px;
    padding: 0;
    box-sizing: border-box;
    }
`;


export const Ul = styled.ul`
   
   float: right;
   margin-right: 80px;
    
  


`;

export const Li = styled.li`
  
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
   padding: 0px 10px;
  position: relative;
  color: #ffff;
  border: 1px solid transparent;
  
  &:hover span{
      display: inline-block;
    }  
   

`;


export const A = styled.a`
   color: white;
   font-size: 17px;
   text-transform: uppercase;
   padding: 7px 13px;
   border-radius: 3px;
   
   &:hover,.active{
   
   background-color: #1b9bff;
   transition: .5s;
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
    margin-left: -23px;
    margin-top: 1.7vw;
    
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
    margin-left: -20px;
    margin-top: 3.1vw;
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
    margin-left: -35px;
    margin-top: 2.6vw;
    transform: rotateZ(120deg);
    transition: all 1s linear;
    
    transition:transform 1.5s ease-out;
    &:hover{
    
    }
    &:active{
    transform: scale(1.1);
    
   
    }
  
    
  

`;


export const IlIcon = styled.li`
   
   $sub-color: grey; 
   $main-color: black;
  
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


export const IconA = styled.a`
   
    color: black;
    background-color: white;
    
   &:hover {
   color: red;
   
   }
  

`;
