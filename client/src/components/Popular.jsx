import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import GlobalStyles from "../pages/GlobalStyles";
import { Link } from 'react-router-dom';

const Popular = () => {
   const [popular, setPopular] = useState([]);

    useEffect(() => {
    getPopular();
    }, []);

    const getPopular = async () => {

        //don't refresh the recipes each time we go back to home//
        const check = localStorage.getItem('popular');
        if(check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50`
            );
             const data = await api.json();
             // console.log(data);
             localStorage.setItem('popular', JSON.stringify(data.recipes));
             setPopular(data.recipes);
        }
    };

    return(
    <div>
<Wrapper>
    <h3>Popular Recipes</h3>

    <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '3rem',
    }}>

    {popular.map((recipe) => {
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
}
`

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Popular;