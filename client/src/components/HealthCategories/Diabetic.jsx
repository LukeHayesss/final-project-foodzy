import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion/dist/framer-motion';
import SpinningCircle from "../SpinningCircle";


const Diabetic = () => {
   const [diabetic, setDiabetic] = useState([]);
   const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
    fetch('/diabetes')
    .then((res) => res.json())
    .then((data) => {
        console.log(data, 'DIABETIC RECIPE')
        setDiabetic(data.data.results);
        setIsLoaded(true);
    })
}, []);

    return(
        <>
        {(!isLoaded &&
            <LoadingIconWrapper>
                <SpinningCircle/>
            </LoadingIconWrapper>)}
            {(isLoaded &&
    <div>

    <Wrapper>
    <h3>Diabetic-Friendly Recipes</h3>
    <DetailsDiv>
        These recipes are packed full of flavour, and provide
        the nutrients and healthiness that diabetics need. Whole grains,
        clean protein, minimal sugar, and lots of veggies and fruit
        will keep you happy and healthy.
    </DetailsDiv>

    <Grid
     animate={{opacity: 1}}
      initial={{opacity: 0}}
       exit={{opacity: 0}}
        transition={{duration: 0.5}}
         >
         {diabetic?.map((recipe) => {
         return(
          <Card key={recipe.id}>
             <Link to={'/recipe/' + recipe.id}>
                 <img src={recipe.image} alt={recipe.title}/>
                 <h4>{recipe.title}</h4>
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
const DetailsDiv = styled.div`
display: flex;
font-size: 18px;
font-weight: 500;
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
    text-decoration: none
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

export default Diabetic;

   // useEffect(() => {
    // getDiabetic();
    // }, []);

    // const getDiabetic = async () => {
    //         const data = await fetch(
    //         `https://api.spoonacular.com/recipes/complexSearch?type=maincourse&type=appetizer&type=dessert&type=breakfast&type=snack&sidedish&salad&soup&apiKey=${process.env.REACT_APP_API_KEY}&number=50&maxSugar=10&maxCarbs=50`);
    //          const recipes = await data.json();
    //          console.log(data);
    //          setDiabetic(recipes.results);
    //          setIsLoaded(true);
    // };