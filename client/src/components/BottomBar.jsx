import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const BottomBar = () => {
const [showButton, setShowButton] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true)
        } else {
            setShowButton(false);
        }
    });
}, []);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

    return (
        <Wrapper>
        {showButton && (
            <Button onClick={scrollToTop} className='back-to-top'>
            Back to top</Button>)}
            </Wrapper>
        )}

export default BottomBar;


const Wrapper = styled.div``

const Button = styled.button`
display: block;
text-align: center;
padding: 15px;
line-height: 19px;
font-size: 13px;
font-weight: 600;
color: white;
background-color: #313131;
cursor: pointer;
border: none;
width: 100%;
&:hover {
    background-color: #404040;
}
`