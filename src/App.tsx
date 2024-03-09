import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledButton } from './components/Button.styled';
import { Menu } from './components/Menu.styled';
import { myTheme } from './styles/Theme.styled';
// import { OtherButton } from './components/Button.styled';


//in <StyledButton>, as="a" means it creates tag <a> for href 
//shortcut to make ul and li -> ul>li*3>a --> tab
function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="">Menu item 1</a></li>
          <li><a href="">Menu item 2</a></li>
          <li><a href="">Menu item 3</a></li>
        </ul>
      </Menu>
      
      <Box>
        <StyledButton as="a" href="some-link" fontSize={"20px"}>Link to</StyledButton>
        {/* <StyledButton color={"green"} fontSize={"20px"}>Hello</StyledButton>
        <StyledButton fontSize={"30px"}>Hello2</StyledButton> */}
        {/* <OtherButton>Other button</OtherButton> */}

        <StyledButton color={myTheme.colors.primary} active buttonType={"primary"}>Hello</StyledButton>
        <StyledButton color={myTheme.colors.secondary} buttonType={"outlined"}>Hello2</StyledButton>
      </Box>
    </div>
  );
}

export default App;


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  @media ${myTheme.media.tablet} { //this allows items to be flexible based on screen size and this SHOULD BE PLACED AT THE VERY END BEFORE CLOSING BACKTICK OF THE COMPONENT
    flex-direction: column;
  }
`
