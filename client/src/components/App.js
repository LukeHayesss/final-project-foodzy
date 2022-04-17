import React, { useContext, useState } from "react";
import Pages from "../pages/Pages";
//import Category from "./Category";//
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

import Dropdown2 from "./Dropdown2/Dropdown2";
import './Dropdown2/Navbar2.css';
// import Error from "../pages/Error";

const App = () => {
  const { isLoggedin, signOut } = useContext(LoginContext);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const handleClick = () => setClick(!click);


//DIET DROPDOWN//  
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

//HEALTH DROPDOWN//
const onMouseEnter2 = () => {
  if (window.innerWidth < 960) {
    setDropdown2(false);
  } else {
    setDropdown2(true);
  }
};
const onMouseLeave2 = () => {
  if (window.innerWidth < 960) {
    setDropdown2(false);
  } else {
    setDropdown2(false);
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

          {/* DIET DROPDOWN */}
          <li className='nav-item'
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <StyledNavLink to='/' className='nav-links'>
          Diets<FaAngleDown />
          </StyledNavLink>
          {dropdown && <Dropdown />}
          </li>

          {/* HEALTH DROPDOWN */}
          <li className='nav-item-2'
          onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
          <StyledNavLink to='/' className='nav-links-2'>
          Health <FaAngleDown />
          </StyledNavLink>
          {dropdown2 && <Dropdown2 />}
          </li>
          

          <StyledNavLink exact to="/myrecipes">
            MyRecipes
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
          <Pages />

          {/* <Error to={'*'}/> */}
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
padding: 2rem 0.9rem;
display: flex;
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
`;

export default App;

