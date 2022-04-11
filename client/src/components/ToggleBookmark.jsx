import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";

const ToggleBookmark = ({ id, title, image }) => {

  console.log("toggle")

  const {
    myBookmarkedRecipies,
    setMyBookmarkedRecipes,
    isLoggedin,
    sendUserData
  } = useContext(LoginContext);
  const [selected, toggleSelected] = useState(false);

  const toggleBookmark = () => {
    if (myBookmarkedRecipies.find(inv => inv.id === id)) {
      setMyBookmarkedRecipes(
        myBookmarkedRecipies.filter(item => item.id !== id)
      );

      toggleSelected(false);
      sendUserData();
    } else {
      setMyBookmarkedRecipes(myRecipes => [
        ...myRecipes,
        { id: id, title: title, image: image }
      ]);

      toggleSelected(true);
      sendUserData();
    }
  };

  useEffect(() => {
    if (myBookmarkedRecipies.find(inv => inv.id === id)) {
      toggleSelected(true);
    } else {
      toggleSelected(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoggedin) {
    return (
      <div className="toggleBookmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg1"
          className={`toggleBookmark ${
            selected ? "toggleBookmark-active" : ""
          }`}
          onClick={toggleBookmark}
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 700 700"
        >
          {/* transform="translate(-134.07 -225.8)" */}
          <g id="layer1"  color='black'
          >
            <path
              id="path7"
              d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z"
            />
          </g>
        </svg>
        <p className="loginToBookmark">Bookmark Recipe</p>{" "}
      </div>
    );
  } else
    return (
      <Link to="/login" className="loginToBookmark">
        Login to bookmark recipe
      </Link>
    );
};





export default ToggleBookmark;