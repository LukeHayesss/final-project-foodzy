import React from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {motion} from 'framer-motion/dist/framer-motion';
import RecipePreview from "../components/RecipePreview";


const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

 const getCuisine = async (name) => {
     const data = await fetch(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}&number=51`)
     const recipes = await data.json();
     setCuisine(recipes.results)
 }

useEffect(() => {
getCuisine(params.type)
// console.log(params.type)
  }, [params.type]);

    return (
        <Wrapper>
            {/* <RecipePreview /> */}
        <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                        {/* <RecipePreview
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}/> */}

                        </Link>
                    </Card>
                )
                })}
        </Grid>
        </Wrapper>
    )}


const Wrapper = styled.div`
margin: 0% 8%;
`


const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

const Card = styled.div`
img {
    width: 100%;
    border-radius: 2rem;
}
a {
    text-decoration: none;
}
h4 {
    text-align: center;
    padding: 1rem;
    color: black;
    font-size: 1.5rem;
}
`

export default Cuisine;