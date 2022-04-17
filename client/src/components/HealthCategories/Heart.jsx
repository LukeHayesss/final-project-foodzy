import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import {motion} from 'framer-motion/dist/framer-motion';

const Heart = () => {
   const [heart, setHeart] = useState([]);
   const [ isLoaded, setIsLoaded ] = useState(false);

   useEffect(() => {
       fetch('/heart')
       .then((res) => res.json())
       .then((data) => {
           console.log(data, 'HEART RECIPE')
           setHeart(data.data.results);
           setIsLoaded(true);
       })
   }, []);

    // useEffect(() => {
    // getHeart();
    // }, []);

    // const getHeart = async () => {
    //         const data = await fetch(
    //         `https://api.spoonacular.com/recipes/complexSearch?type=maincourse&type=appetizer&type=dessert&type=breakfast&type=snack&type=soup&type=salad&apiKey=${process.env.REACT_APP_API_KEY}&number=50&maxSugar=10&maxCarbs=50&minFiber=5&maxFat=15&maxSodium=50`);
            
    //          const recipes = await data.json();
    //          console.log(data);
    //          setHeart(recipes.results);
    //          setIsLoaded(true);

    // };

    return(
        <>

        {(!isLoaded &&
     <LoadingIconWrapper>
     <CircularProgress />
       </LoadingIconWrapper>)}
       {(isLoaded && 
       <div>

    <Wrapper>
    <h3>Heart-Healthy Recipes</h3>

    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
    {heart?.map((recipe) => {
    return(
        <Card key={recipe.id}>
             <Link to={'/recipe/' + recipe.id}>
                 <p>{recipe.title}</p>
                 <img src={recipe.image} alt={recipe.title}/>
             </Link>
        </Card>
    );  
})}
</Grid>
</Wrapper>
</div>)}
</>
)}

const Wrapper = styled.div`
margin: 0% 8%;
margin-bottom: 50px;
margin-top: 40px;
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
}
p {
    font-size: 1.5rem;
    padding-bottom: 9px;
}
`

const LoadingIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
  padding-bottom: 500px;
`

export default Heart;