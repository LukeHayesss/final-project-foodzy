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
    /* margin: 0% 10%; */
    margin: 0% 0%;
    background-color: #fbf8f2;


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

h3 {
    font-size: 2rem;
    /* color: rgb(56, 56, 56) */
    line-height: 2rem;
    margin: 1rem 0rem;
}

p {
    font-size: 1.8rem;
    text-decoration: none;
    cursor: pointer;
    color: black;
    &:hover {
    color: black;
    /* text-decoration: underline; */
  }
}
`

export default GlobalStyles;