import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import RecipePreview from "../components/RecipePreview";

const MyRecipes = props => {
  const { myBookmarkedRecipes } = useContext(LoginContext);

  if (myBookmarkedRecipes.length > 0) {
    return (
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
    );
  } else {
    return (
      <div className="noRecipe">
        <p className="noRecipe__p">You don't have any bookmarked recipes.</p>
      </div>
    );
  }
};

export default MyRecipes;