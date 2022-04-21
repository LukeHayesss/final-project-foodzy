import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";

const MyRecipes = props => {
  const { myBookmarkedRecipes } = useContext(LoginContext);

  if (myBookmarkedRecipes.length > 0) {
    return (
      <Wrapper>
                <h3>My Saved Recipes</h3>

      <div className="myrecipes">
        <div className="recipes">
          {" "}
          {myBookmarkedRecipes.reverse().map(recipe => (
            <RecipePreview
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              ingredients={[]}
            />
          ))}{" "}
        </div>
      </div>
      </Wrapper>
    );
  } else {
    return (
      <SecondWrap>
        <Title>My Saved Recipes</Title>
      <div className="noRecipe">
        <p className="noRecipe__p">You don't have any bookmarked recipes. 
        Go back <a href="/">home</a> to find an awesome recipe!</p>
      </div>
      </SecondWrap>
    );
    
  }
};

const Wrapper = styled.div`
padding-top: 50px;
margin: 0% 8% 10%;
h3 {
  margin-bottom: 5rem;
}
`

const Title = styled.div`
font-size: 2rem;
margin-top: 5rem;
display: flex;
font-weight: 600;
width: 256px;
margin-left: 95px;
`

const SecondWrap = styled.div`

a {
  font-size: 25px;
  color: black;
}`


export default MyRecipes;