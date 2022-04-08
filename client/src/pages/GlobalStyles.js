import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    box-sizing: border-box;
    &:before, &:after {box-sizing: border-box};
}

body {
    margin: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
    'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0% 15%;

}

h1 {
    font-size: 30px;
}

main {
    padding: 10px;
}

h4 {
    font-size: 1rem;
    color: gray;

}
`

export default GlobalStyles;