import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

const HighBloodPressure = () => {
   const [highBloodPressure, setHighBloodPressure] = useState([]);

    useEffect(() => {
    getHighBloodPressure();
    }, []);

    const getHighBloodPressure = async () => {
            const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?type=maincourse&type=appetizer&type=dessert&type=breakfast&type=snack&type=soup&type=salad&type=bread&type=sauce&apiKey=${process.env.REACT_APP_API_KEY}&number=80&maxSugar=10&maxCarbs=50&minFiber=5&maxFat=15&minPotassium=20`);
             const recipes = await data.json();
             console.log(data);
             setHighBloodPressure(recipes.results);
    };

    return(
    <div>
    <Wrapper>
    <h3>High Blood Pressure Recipes</h3>

    <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '3rem',
    }}>

    {highBloodPressure?.map((recipe) => {
    return(
        <SplideSlide key={recipe.id}>
         <Card>
             <Link to={'/recipe/' + recipe.id}>
                 <p>{recipe.title}</p>
                 <img src={recipe.image} alt={recipe.title}/>
                 <Gradient />
             </Link>
        </Card>
    </SplideSlide>
    );  
})}
</Splide>
</Wrapper>
</div>
)
}

const Wrapper = styled.div`
/* margin: 4rem 0rem; */
margin: 0% 8%;
margin-bottom: 50px;


`
const Card = styled.div`
min-height: 15rem;
border-radius: 1rem;
overflow: hidden;
position: relative;

img {
border-radius: 1rem;
position: absolute;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}
p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
    color: white;
    text-decoration: none;
}}
`

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default HighBloodPressure;