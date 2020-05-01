import styled from "styled-components";


export const FoodCategoryStyles = styled.div`
  
  float: left;
 
`;


export const UlCartegory = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 20px 10px;
  
  
  li:nth-child(2){
  
 transform: scale(1);
 
  &:hover{
       -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
 
  }
 
  }
  
`;

export const LiCartegoryName = styled.li`
  
  list-style-type: none;
  background: #ff6c16;
  padding: 15px 100px 15px 15px; 
  color: white;
  font-size: 1.5vw;
   cursor: pointer;
   line-height: 20px;
`;

export const LiCartegory = styled.li`
  
  width: 100%;
   line-height: 20px;
  background: white;
  padding: 20px;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  z-index: 5;
 
 &:active{
 transform: scale(1.1);
    
 }
  
  &:hover{
       -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
 
  }
  
  
  
`;

