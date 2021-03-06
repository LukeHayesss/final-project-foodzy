'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

const {
  getMySexyRecipes, 
  newUser, 
  addBookmarkedRecipe,
  addComment
} = require("./handlers")

const {
  getVeggie, 
  getPopular, 
  getCuisine, 
  getSearched, 
  diabeticRecipes, 
  heartRecipes, 
  highbpRecipes,
  getRecipeDetails,
} = require("./handlerz")



express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

.get('/getmysexyrecipes', getMySexyRecipes)
.post('/createnewuser', newUser)
.put('/addbookmarkedrecipe', addBookmarkedRecipe)

//put comment into database attached to the correct uid of logged in user//
.put('/comment', addComment)

//get comment onto page oooooh//
//will have to do later//
// .get()


.get('/recipe/:name', getRecipeDetails)
.get('/getveggie', getVeggie)
.get('/getpopular', getPopular)
.get('/cuisine/:name', getCuisine)
.get('/searched/:name', getSearched)
.get('/diabetes', diabeticRecipes)
.get('/heart', heartRecipes)
.get('/highbp', highbpRecipes)




  .get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})


.listen(PORT, () => console.info(`Listening on port ${PORT}`));
