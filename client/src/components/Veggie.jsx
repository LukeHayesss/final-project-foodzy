import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


const Veggie = () => {
    const [veggie, setVeggie] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(!false);

    useEffect(() => {
        fetch('/getveggie')
        .then((res) => res.json())
        .then((data) => {
            console.log(data, 'HIHUH')
        setVeggie(data.data.recipes);
        setIsLoaded(true); 
        })
    }, []);

    return (
        <>
        {(!isLoaded &&
     <LoadingIconWrapper>
     <CircularProgress />
       </LoadingIconWrapper>)}
       {(isLoaded && 
       <div>
<div>
<Wrapper>
    <h3>Veggie Picks</h3>

    <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '3rem',
    }}>

    {veggie.map((recipe) => {
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
</div>
)}
</>
)
}

const Wrapper = styled.div`
/* margin: 4rem 0rem; */
margin: 0% 8%;


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
  }
}
`

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

const LoadingIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
`


export default Veggie;