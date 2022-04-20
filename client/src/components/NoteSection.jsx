import React from "react";
import styled from 'styled-components';
import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
// import { Link } from "react-router-dom";


const NoteSection = () => {
    const {userId} = useContext(LoginContext);
    // const {isLoggedIn} = useContext(LoginContext);
    const [note, setNote] = useState("")
  
    const onSubmit = (e) => {
    e.preventDefault()
          fetch("/comment", {
            method: "PUT",
              headers: {
                "Content-Type": "application/json"},
                body: JSON.stringify({
                note,
                currentUser: userId,
              }),
            })
            .then(() => {
            setNote("")
          })}

//eventually show below only if user is logged in//
// if (isLoggedIn) {
return (
  <>
    <FormContainer className="form">
      <Line>
        <hr></hr>
      </Line>
      <h3>Notes + Reviews</h3>
          <Form onSubmit={onSubmit}>
            <input placeholder="Leave A Review or Comment" type="text" 
            value={note ?? ""} 
            onChange={(e) => setNote(e.target.value)}/>
          <SubmitBtn type="submit">Post</SubmitBtn>
        </Form>
      </FormContainer>

        {/* else 
     return (
      <Link to="/login">
        Login to chat
      </Link>
    ); */}
   </>
 )}
   
const FormContainer = styled.div`
width: 50%;
margin-left: 35px;
h3 {
text-align: left;
margin-left: 65px;
font-size: 18px;
}
`
const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 6rem;
p {
cursor: pointer;
}
input {
padding: 12px;
margin: 12px;
font-size: 14px;
border: 1px solid #ccc;
box-shadow: 0 1px 4px #ccc;
border-radius: 2px;
width: 68%;
height: 40px;
margin-left: 55px;
}`

const Line = styled.div`
hr {
width: 88%;
margin-left: 65px;
margin-bottom: 20px;
}
`
    
const SubmitBtn = styled.button`
background-color: #313131;
border: none;
color: white;
padding: 12px;
margin: 12px 0;
box-shadow: 0 1px 6px #ccc;
height: 40px;
width: 110px;
border-radius: 2px;
font-size: 14px;
font-weight: 600;
&:hover {
cursor: pointer;
background-color: #404040;
}
`

export default NoteSection;