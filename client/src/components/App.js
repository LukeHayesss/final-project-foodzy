import React, { useContext, useState } from "react";
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
import { LoginContext } from "../context/LoginContext";
import '../styles/App.min.css';
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "./Dropdown/Dropdown";
import './Dropdown/Navbar.css';


const App = () => {
  const { isLoggedin, signOut } = useContext(LoginContext);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <div className="app">
      <BrowserRouter>
      <GlobalStyles />

      <Wrapper>
      <NavMenu>
        <GiKnifeFork />
        <Logo to={'/'}>Yummyyy</Logo>
      </NavMenu>

      <Navigation>

      <StyledNavLink exact to="/about">
            About
          </StyledNavLink>


          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <StyledNavLink
              to='/'
              className='nav-links'
            >
              Diets <FaAngleDown />
            </StyledNavLink>
            {dropdown && <Dropdown />}
          </li>



          <StyledNavLink exact to="/myrecipes">
            My Recipes
          </StyledNavLink>

          <StyledNavLink exact to="/register">
            Sign Up
          </StyledNavLink>

          {isLoggedin ? (
        <p className="login_button" onClick={signOut}>
          Logout
        </p>
      ) : (
        <StyledNavLink to="/login" className="login_button">
          Login
        </StyledNavLink>
      )}

          <Search />

       </Navigation>
      
      </Wrapper>

        {/* <Category /> */}
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

