import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import {NavLink} from "react-router-dom";


const Category = () => {
    return (
        <List>
            <SLink to={'/cuisine/glutenfree'}>
              <FaPizzaSlice/>
              <h4>Gluten Free</h4>
            </SLink>
            <SLink to={'/cuisine/ketogenic'}>
              <FaHamburger/>
              <h4>Ketogenic</h4>
            </SLink>
            <SLink to={'/cuisine/vegetarian'}>
              <GiNoodles/>
              <h4>Vegetarian</h4>
            </SLink>
            <SLink to={'/cuisine/vegan'} >
              <GiChopsticks/>
              <h4>Vegan</h4>
            </SLink>
            <SLink to={'/cuisine/pescatarian'} >
              <GiChopsticks/>
              <h4>Pescatarian</h4>
            </SLink>
            <SLink to={'/cuisine/paleo'} >
              <GiChopsticks/>
              <h4>Paleo</h4>
            </SLink>
            <SLink to={'/cuisine/lowfodmap'} >
              <GiChopsticks/>
              <h4>Low FODMAP</h4>
            </SLink>
            <SLink to={'/cuisine/whole30'} >
              <GiChopsticks/>
              <h4>Whole30</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 8rem;
height: 8rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: white;
    font-size: 1.3rem;
    margin-top: 5px;
}
svg {
    color: white;
    font-size: 2.8rem;
}
&.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
        color: white;
    }
    h4 {
        color: white;
    }
}
`


export default Category;