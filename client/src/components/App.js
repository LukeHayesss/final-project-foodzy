import React from "react";
import Pages from "../pages/Pages";
import Category from "./Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import GlobalStyles from "../pages/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyles />
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Yummyyy</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster', cursive;
color: black;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg {
  font-size: 2rem;
}
`
export default App;

