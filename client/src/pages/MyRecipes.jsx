import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import RecipePreview from "../components/RecipePreview";
import styled from "styled-components";

const MyRecipes = props => {
  const { myBookmarkedRecipes } = useContext(LoginContext);

  if (myBookmarkedRecipes.length > 0) {
    return (
      <Wrapper>
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
margin-bottom: 5rem;
`

const SecondWrap = styled.div`

a {
  font-size: 25px;
  color: black;
}`


export default MyRecipes;