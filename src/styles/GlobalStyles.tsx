import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

//это корректирует все стили которые назначает сам браузер
//* Selector: This selects all elements on the page, regardless of their tag name, class, or ID.
export const GlobalStyles = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${myTheme.colors.grey.dark};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
`

