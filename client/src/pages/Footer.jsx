import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleClickScroll = () => {
    window.scrollTo(0,0)
  };

  return (

  <Wrapper style={{
    background: "#FFC700",
    paddingBottom: "45px",
    paddingTop: "29px"
}}>
      <div>
        <CompanyInfoContainer>
        <HomeNavLink exact to="/">Yummyyyyy</HomeNavLink>
          
          <Icons>
            <IconLink href="/" target="_blank">
                <FaFacebook size={30}/>
              </IconLink>
              <IconLink href="/">
                <FaInstagram size={30}/>
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaTwitter size={30}/>
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaYoutube size={30}/>
              </IconLink>
          </Icons>
        </CompanyInfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>Cool Stuff</Title>
          <li>Recipes</li>
          <li>About Us</li>
          <li>Terms of Use</li>
        </InfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>Learn More</Title>
          <li>Things</li>
          <li>Contact Us</li>
          <li>More Things</li>
          
        </InfoContainer>
        <FooterPin />
      </div>
    </Wrapper> 
  );
};


const HomeNavLink = styled(NavLink)`
cursor: pointer;
text-decoration: none;
color: black;
font-family: 'lobster';
font-size: 45px;
/* padding-right: 50px; */
`


//pin the footer at the bottom//
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #4E545C;
  min-height: calc(45vh - 34px);
`;

const FooterPin = styled.div`
position: relative;
left: 0;
bottom: 0;
`

const CompanyInfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: white;
  }
  li:hover {
    cursor: default;
  }
`;

const InfoContainer = styled.div`
  list-style: none;
  line-height: 1.5;
  li {
    padding: 2px;
    color: black;
    font-size: 14px;
  }
  li:hover {
    cursor: pointer;
    color: black;
    text-decoration: underline;
    }
`;

const Title = styled.div`
  list-style: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
  :hover {
    cursor: default;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 120px;
`;


const IconLink = styled.div`
  color: black;
  padding-right: 35px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default Footer;