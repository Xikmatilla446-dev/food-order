import styled from "styled-components";


export const CheckoutItemStyles  = styled.div`
  
  
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;



  
`;

export const ImageContainer  = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
`;
export const NameStyles  = styled.span`
    
    width: 23%;
`;

export const QuantityStyles  = styled.span`
    
    display: flex;
    width: 23%;
`;

export const ArrowStyles  = styled.div`
    
      cursor: pointer;
`;

export const ValueStyles  = styled.span`
       
      margin: 0 10px;
`;

export const PriceStyles  = styled.span`
       
       width: 10%;
`;

export const RemovebuttonStyles  = styled.div`
    padding-left: 12px;
    cursor: pointer;
    width: 5%;
    height: 10%;
    
    .remove{

      width: 100%;
      height: 100%;
    }
`;



