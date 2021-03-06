import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion/dist/framer-motion';
import SpinningCircle from "../components/SpinningCircle";

const Searched = () => {

    const [ isLoaded, setIsLoaded ] = useState(false);
    const [searchedRecipes, setSearchedRecipes] = useState(['name']);
    let params = useParams();

    useEffect(() => {
        async function fetchData(name) {
            const response = await fetch(`/searched/${name}`)
            const data = await response.json()
            setSearchedRecipes(data.results);
            setIsLoaded(true);
        }
        fetchData(params.search)
    }, [])

    return (
        <>

        {(!isLoaded &&
     <LoadingIconWrapper>
     <SpinningCircle />
       </LoadingIconWrapper>)}
       {(isLoaded && 
       <div>
   
        <Wrapper>
        <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
        {searchedRecipes.map((item) =>  {
            return (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt={''}/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
        </Grid>
        </Wrapper>
        </div>)}
        </>
    )
}

const Wrapper = styled.div`
margin: 0% 8%;
padding-top: 50px;
margin-bottom: 5rem;

`

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
padding-top: 50px;

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
    :hover {
        text-decoration: underline;
    }
}
`
const LoadingIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
  padding-bottom: 500px;
`

export default Searched;

   // const getSearched = async (name) => {
    //     const data = await fetch(
    //         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=51`)
    //     const recipes = await data.json();
    //     setSearchedRecipes(recipes.results);
    //     setIsLoaded(true);
    // };

    // useEffect(() => {
    // getSearched(params.search);
    // }, [params.search]);