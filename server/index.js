'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

const {
  getMySexyRecipes, 
  newUser, 
  addBookmarkedRecipe
} = require("./handlers")

const {
  getVeggie, 
  getPopular, 
  getCuisine, 
  getSearched, 
  diabeticRecipes, 
  heartRecipes, 
  highbpRecipes
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
