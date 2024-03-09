import styled, { css } from 'styled-components';
import { MyAnimation } from '../styles/animations/Animations';

//"?" must be put because not all components in App.tsx have both "color" and "fontSize" properties (Hello button has both, Hello2 button have neither one), so using "?" allows to skip props that don't include some of the properties
type StyledButtonPropsType = {
  color?: string
  fontSize?: string
  // primary?: boolean
  // outlined?: boolean
  buttonType?: "primary" | "outlined"
  active?: boolean
}

//this is STYLED COMPONENT
export const StyledButton = styled.button<StyledButtonPropsType>`
  border: none;
  //background-color: #fb3f78;
  //background-color: ${ props => props.color || "#fb3f78" };
  padding: 10px 20px;
  border-radius: 5px;
  //color: snow;
  font-size: ${ props => props.fontSize || "3rem"};
  font-weight: bold;

  //&:hover { //this "hover" means what does tag component ("&" is used to refer to tag (i.e. .button) ) look like when we don't click but place cursor on the button
  //  background-color: #4053cc
  //}




//outlined
${props => props.buttonType === "outlined" && css<StyledButtonPropsType> `
border: 2px solid ${props => props.color || "#fb3f78"};
color: ${props => props.color || "green"};
background-color: transparent;  

&:hover {
  border-color: #4053cc;
  color: #4053cc;
  background-color: transparent;
  }
`}


//primary
${props => props.buttonType === "primary" && css<StyledButtonPropsType> `
background-color: ${props => props.color || "#fb3f78"};
border: 2px solid ${props => props.color || "#fb3f78"};
color: yellow;

&:hover {
  border-color: #4053cc;
  color: #4053cc;
  //background-color: transparent;
  }
`}

${props => props.active && css<StyledButtonPropsType> `
  box-shadow: 5px 5px 5px 5px  #252525;
`}


`


  //&:last-child { //this refer to the latest tag StyledButton component, which is OtherButton component as it's child component because it inherits properties from parent component
  //  background-color: #9cf878;
 // }
//`

// export const OtherButton = styled(StyledButton)` //this allows to take properties from other styled component (i.e. StyledButton) and change some properties without creating new component
//   border-radius: 5px;
//   background-color: #0000f8;
//   color: #f8f000;

//   &:hover {
//     animation: ${MyAnimation} 2s ease-in-out infinite; //${MyAnimation} is called interpolation when you take const
//   }
