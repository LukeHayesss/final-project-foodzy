// import React from "react"; 
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";

const Error = ()=> {
    return (
        <Wrapper>
            <div><FaBomb size={80}/></div>
            <div><b>WHOA!</b> An unknown error has occurred.</div>
            <div>Please try refreshing the page or <a href="">contact support</a> if the problem persists.</div>
        </Wrapper>
    );
}; 


const Wrapper = styled.div`
width: 100%; 
height:70vh; 
margin-bottom: 50px;
display:flex; 
flex-direction:column; 
justify-content:center;
align-items:center; 
& div {
    margin: 10px;
    width:50%;
    text-align:center;
    font-size: 25px;
}
b {
    font-size: 25px;
}
a {
    font-size: 25px;
    color: black;
};
`;

export default Error; 