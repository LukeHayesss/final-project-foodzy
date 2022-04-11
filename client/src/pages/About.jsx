import React from "react";
import styled from "styled-components";

const About = () => {
    return (
        <Wrapper>
        <AboutDiv>We are a new kind of recipe website started by Chef and entrepreneur, Luke Hayes.
            With over 100,000 recipes in our database, we are geared towards diets, allergies, 
            and health conditions. As a Chef and type 1 diabetic, Luke knows how hard it can be to
            adapt recipes to fit health conditions and diets, and Yummyyy is here to help.</AboutDiv>
            </Wrapper>
    )
}

const Wrapper = styled.div``

const AboutDiv = styled.h1`
display: flex;
justify-content: center;
text-align: center;
padding: 35px;
margin-left: 20px;
margin-right: 20px;
`

export default About;