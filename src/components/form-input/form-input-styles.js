import styled, {css} from "styled-components";

export const GroupInput = styled.div`
  position: relative;
  margin: 45px 0;

`;



export const Input = styled.input`
  
    
@mixin shrinkLabel {
  top: -14px;
  font-size: 12px;
  color: $main-color;
}
  $sub-color: grey;
  $main-color: black;



    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #5FA11C;
    margin: 25px 0;

    &:focus {
      outline: none;
      border: 1px solid #5FA11C;
    
    }

    &:focus ~ .form-input-label {
      @include shrinkLabel();
    }
    
    input[type='password'] {
    letter-spacing: 0.3em;
  }


`;


export const Label = styled.label`
   
   $sub-color: grey; 
   $main-color: black;


   
    pointer-events: none;
    font-size: 12px;
    transition: all 0.1s;
    margin-left: 5px;
    
    
     color: $main-color;
    position: absolute;
    margin-top: -55px;
    //opacity: ${(props) => (props.prop ? '0' : '1')};
     ${(props) => props.prop && css`
    margin-left: 10px;
    margin-top: -90px;
    font-size: 10px;
  
  `}
 
   
   


`;
