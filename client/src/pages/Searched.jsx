import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion/dist/framer-motion';
import CircularProgress from '@material-ui/core/CircularProgress';


const Searched = () => {

    const [ isLoaded, setIsLoaded ] = useState(false);

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=51`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        setIsLoaded(true);
    };

    useEffect(() => {
    getSearched(params.search);
    

    }, [params.search]);

    return (
        <>

        {(!isLoaded &&
     <LoadingIconWrapper>
     <CircularProgress />
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
                    <img src={item.image} />
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