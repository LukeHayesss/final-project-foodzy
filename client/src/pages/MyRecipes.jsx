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
      <div className="noRecipe">
        <p className="noRecipe__p">You don't have any bookmarked recipes.</p>
      </div>
    );
    
  }
};

const Wrapper = styled.div`
padding-top: 50px;
margin-bottom: 5rem;

`

export default MyRecipes;