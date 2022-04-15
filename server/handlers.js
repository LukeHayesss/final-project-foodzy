"use strict"
const express = require('express');
const app = express();
app.use(express.static('public'));

const db = require("./firebase");
const {collection, query, where, getDocs, setDoc} = require("firebase/firestore");
const {getAuth} = require('firebase/auth');
require("dotenv").config();
const fetch = require("node-fetch");


const API_KEY = "2bf38fc6d7264f1ab8640dc81b0c71e1";

//
const auth = getAuth().user;
const user = auth?.currentUser;
const usersRef = collection(db, 'users')
const q = query(usersRef, where('uid', '==', 'true'))

const sendResponse = (res, status, data, message = 'no message included.') => {
    return res.status(status).json({status, data, message})
}

const getMySexyRecipes = async (req, res) => {
    try {
        const recipes = collection(db, 'users')
        const recipesSnapshot = await getDocs(recipes)
        const arrOfRecipes = recipesSnapshot.docs.map((doc) => doc.data())

        console.log(arrOfRecipes)

        //the below are the keys. we access keys thru dot notation//
        sendResponse(res, 200, arrOfRecipes, 'recipes received')
    }
    catch(err){
        sendResponse(res, 400, err, 'no recipes received')
    }}

const newUser = async (req, res) => {
  //deconstructing below  
    const {userInfo} = req.body;
    await setDoc(doc(db, 'users', 'userId'))
}    

///////////////////
// const getVeggie = async (req, res) => {
//     fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50&tags=vegetarian`)
// .then((response) => response.json())
// .then((json) => {
// res.status(200).json({ status: 200, data: json});
// })
// .catch((err) => {
//     console.log(err);
//     res.status(404).json({ status: 404, message: 'nothing here'});
// });
// };

// const getVeggie = () => {
// app.get('/getveggie', async (req, res) => {
//     console.log('getveggie endpoint called');
//     const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=50&tags=vegetarian`;
//     const options = {
//         "method" : "GET",
//     };
//     const response = await fetch(url, options)
//     .then(res => res.json())
//     .catch(e => {
//         console.error({
//         "message" : "dammmmn",
//         error: e,
//         });
//     });
//     res.json(response);
// });

// fetch('https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=50&tags=vegetarian'
// , {
//     method: 'GET',
//     body: JSON.stringify({
//         name: 'User 1'
//     })
// }).then(res => {
//     return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))


module.exports = { getMySexyRecipes, newUser }
