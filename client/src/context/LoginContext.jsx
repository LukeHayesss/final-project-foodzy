import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";

export const LoginContext = createContext();

const LoginContextProvider = props => {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [regname, setRegname] = useState("");
  const [regemail, setRegemail] = useState("");
  const [regpassword, setRegpassword] = useState("");
  const [regpassword2, setRegpassword2] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [myBookmarkedRecipes, setMyBookmarkedRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  

  //register user with email, name, psw to firebase and login
  const sendRegistration = e => {
    e.preventDefault();
    //check if same psw was given both times at registration
    if (regpassword === regpassword2) {
      auth
        .createUserWithEmailAndPassword(regemail, regpassword)
        .then(function(result) {
          updateProfile(result.user);
        })
        .catch(function(error) {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("passwords don't match");
    }
  };

  const updateProfile = user => {
    user
      .updateProfile({
        displayName: regname
      })
      .then(() => {
        // after updating profile you need to manually set the name and userId because the function onAuthStateChanged
        //is not waiting for the profile to be updated and it runs before you add the displayName
        const currentUser = auth.currentUser;
        setUser(currentUser);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  };
  //check user status, if no user logged in, it returns null
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setName("");
        setUserId("");
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setUser = user => {
    console.log(user, 'CURRENT USER')
    setIsLoggedIn(true);
    //get name of user, and save it
    setName(user.displayName);
    setUserId(user.uid);
    // getMyBookmarkedRecipes(user.uid);
  };

  const sendLogin = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(cred => {
        setUser(cred.user);
      })
      .catch(err => setErrorMessage(err.message));
  };

  const signOut = e => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  //create a doc with the id = userId, and add recipeId inside
  // const sendUserData = () => {
  //   if (userId) {
  //     db.collection("users")
  //       .doc(userId)
  //       .set({
  //         myrecipes: myBookmarkedRecipes
  //       });
  //   }
  // };

  // useEffect(() => {
  //   sendUserData();
  // }, [myBookmarkedRecipes]); // eslint-disable-line react-hooks/exhaustive-deps


const getMyBookmarkedRecipes = user => {
  fetch(`/getmysexyrecipes`)
  .then((res) => res.json())
  .then((data) => {
    setMyBookmarkedRecipes(data.data)
console.log(data.data, 'AM I WORKING')
  })}


  const addBMRecipesToDB = async (userId) =>{
    fetch('/addbookmarkedrecipe', {
      method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            myBookmarkedRecipes,
            currentUser: userId
          }),
    })
  }
  // addBMRecipiesToDB(userId)
//  console.log(myBookmarkedRecipes, 'looooony') 



  

    // const getMyBookmarkedRecipes = user => {
  //   db.collection("users")
  //     .doc(user)
  //     .get()
  //     .then(doc => setMyBookmarkedRecipes(doc.data().myrecipes));
  //   console.log("got recipes");
  // };

  return (
    <LoginContext.Provider
      value={{
        getMyBookmarkedRecipes,
        errorMessage,
        myBookmarkedRecipes,
        setMyBookmarkedRecipes,
        signOut,
        sendLogin,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        sendRegistration,
        name,
        userId,
        setName,
        isLoggedin,
        setIsLoggedIn,
        regname,
        setRegname,
        regemail,
        setRegemail,
        regpassword,
        setRegpassword,
        regpassword2,
        setRegpassword2,
        // sendUserData,
        addBMRecipesToDB
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;