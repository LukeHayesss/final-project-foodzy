import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Foodzy from '../img/Foodzy 2.svg';

const Footer = () => {

  return (

  <Wrapper style={{
    background: "#ffc40c",
    paddingBottom: "45px",
    paddingTop: "29px"
}}>
      <div>
        <CompanyInfoContainer>
        <HomeNavLink exact to='/'>
          <Logo src={Foodzy}></Logo>
          </HomeNavLink>
          
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
        <SubscribeContainer>
          <SubscribeTitle>Subscribe For Updates</SubscribeTitle>
          <SubscribeForm>
            <SubscribeInput
            placeholder="Your Email"
            ></SubscribeInput>
            <SubscribeButton>Submit</SubscribeButton>
          </SubscribeForm>
          <SubscribeMiniText>
            By clicking 'submit', you're agreeing to receive our newsletter.
          </SubscribeMiniText>
        </SubscribeContainer>
        <FooterPin />
      </div>
    </Wrapper> 
  );
};


const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 50px;
`;


//pin the footer at the bottom//
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
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
  text-align: center;
  margin-left: 3.7rem;
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
  text-align: center;
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
    color: #404040;
    cursor: pointer;
  }
`;

//SUBSCRIBE SECTION//
const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SubscribeTitle = styled.span`
  list-style: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`

const SubscribeForm = styled.form`
  align-items: center;
  display: flex;
`

const SubscribeInput = styled.input`
  height: 40px;
  width: 150px;
  left: 0px;
  top: 0px;
  border-radius: 0.5rem;
  border: none;
  padding-left: 15px;
  ::placeholder {
  
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    text-align: left;
    color: black;
  }
`

const SubscribeButton = styled.button`
  height: 40px;
  width: 110px;
  left: 0px;
  top: 0px;
  border-radius: 0.5rem;
  background: #313131;
  border: none;
  margin-left: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #404040;
  }
`

const SubscribeMiniText = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  margin-top: 16px;
`

export default Footer;