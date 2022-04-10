import React from "react";
import Pages from "../pages/Pages";
import Category from "./Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import GlobalStyles from "../pages/GlobalStyles";
import { NavLink } from "react-router-dom";
import Footer from '../pages/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyles />

      <Wrapper>
      <NavMenu>
        <GiKnifeFork />
        <Logo to={'/'}>Yummyyy</Logo>
      </NavMenu>
{/* <Dashboard /> */}
      <Navigation>

      <StyledNavLink exact to="/">
            About
          </StyledNavLink>

        <StyledNavLink exact to="/login">
            Login
          </StyledNavLink>

          <StyledNavLink exact to="/register">
            Sign Up
          </StyledNavLink>

          <StyledNavLink exact to="/dashboard">
            My Account
          </StyledNavLink>

          <StyledNavLink exact to="/favorites">
            Favorites
          </StyledNavLink>

          <Search />

       </Navigation>
      
      </Wrapper>
        {/* <Search /> */}
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

const Wrapper = styled.div`
  background-color: #ffc700;
  color: #fff;
`;

const Logo = styled(Link)`
text-decoration: none;
font-size: 4rem;
font-weight: 400;
font-family: 'Lobster', cursive;
color: black;
`

const NavMenu = styled.div`
padding: 2rem 0rem;
display: flex;
/* justify-content: space-around; */
align-items: center;
svg {
  font-size: 4rem;
  color: black;
}
`


const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  color: black;
  font-size: 1.8rem;
  display: flex;
  text-decoration: none;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: space-around; 
  /* padding-bottom: 2rem; */
`;

export default App;

