"use strict"

const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const database = admin.firestore;


const express = require('express');
const app = express();
app.use(express.static('public'));
const { db } = require("./firebase.js");
const {collection, getDocs, setDoc, doc} = require("firebase/firestore");
const {getAuth} = require('firebase/auth');
const { ref } = require('firebase-functions/v1/database');
require("dotenv").config();

//////////////////
const auth = getAuth().user;
const user = auth?.currentUser;

const sendResponse = (res, status, data, message = 'no message included.') => {
    return res.status(status).json({status, data, message})
}

const getMySexyRecipes = async (req, res) => {
    try {
      const recipes = collection(db, 'users')
       const recipesSnapshot = await getDocs(recipes)
        const arrOfRecipes = recipesSnapshot.docs.map((doc) => doc.data())
        console.log(arrOfRecipes, 'ARGHHHHH')
        //the below are the keys. we access keys thru dot notation//
       sendResponse(res, 200, arrOfRecipes, 'recipes received')
      } catch(err) {
    sendResponse(res, 400, err, 'no recipes received')
  }
}


///////////////////////
const addBookmarkedRecipe = async (req, res) => {
  const {myBookmarkedRecipes, currentUser} = req.body;
    try {
     console.log(req.body, 'ADD BOOKMARKED RECIPE')
      const usersRef = doc(db, "users", currentUser);
     setDoc(usersRef, { myrecipes: myBookmarkedRecipes }, { merge: true });
    sendResponse(res, 200, req.body, 'OH WOW')
   } catch (err) {
  sendResponse(res, 400, err, 'no recipes')
 }
}

////////////////////
const newUser = async (req, res) => {
  //deconstructing below  
    const {userInfo} = req.body;
    await setDoc(doc(db, 'users', 'userId'))
    // this.db.collection('users').doc().set(Object.assign({}, user))
}    

module.exports = { getMySexyRecipes, newUser, addBookmarkedRecipe }
