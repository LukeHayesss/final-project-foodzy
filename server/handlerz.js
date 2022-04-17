const { app } = require("firebase-admin");
const request = require("request-promise");
const fetch = require("node-fetch");

const apiKey = process.env.REACT_API_SPOON_KEY;

//VEGGIE//
const getVeggie = async (req, res) => {
  try {
    const veggieHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=50&tags=asian`, veggieHeaders)
    const parsedResponse = JSON.parse(response);
    const veggie = parsedResponse;
    res.status(200).json({ status: 200, data: veggie, message: "Yes kween"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "Naughty"});
  }
}

//DIABETES//
const diabeticRecipes = async (req, res) => {
  try {
    const diaHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse&type=appetizer&type=dessert&type=breakfast&type=snack&sidedish&salad&soup&apiKey=${apiKey}&number=50&maxSugar=10&maxCarbs=50`, diaHeaders)
    const parsedResponse = JSON.parse(response);
    const diabetic = parsedResponse;
    res.status(200).json({ status: 200, data: diabetic, message: "DIABETIC DATA"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "Not Working"});
  }
}

//HEART//
const heartRecipes = async (req, res) => {
  try {
    const heartHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse&type=appetizer&type=dessert&type=breakfast&type=snack&type=soup&type=salad&apiKey=${apiKey}&number=50&maxSugar=10&maxCarbs=50&minFiber=5&maxFat=15&maxSodium=50`, heartHeaders)
    const parsedResponse = JSON.parse(response);
    const heart = parsedResponse;
    res.status(200).json({ status: 200, data: heart, message: "HEART DATA"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "Not Working"});
  }
}

//HIGH BLOOD PRESSURE//
const highbpRecipes = async (req, res) => {
  try {
    const highbpHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request(`https://api.spoonacular.com/recipes/complexSearch?type=maincourse&type=appetizer&type=dessert&type=breakfast&type=snack&type=soup&type=salad&type=bread&type=sauce&apiKey=${apiKey}&number=80&maxSugar=10&maxCarbs=50&minFiber=5&maxFat=15&minPotassium=20`, highbpHeaders)
    const parsedResponse = JSON.parse(response);
    const highbp = parsedResponse;
    res.status(200).json({ status: 200, data: highbp, message: "HIGH BP DATA"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "Not Working"});
  }
}


//POPULAR//
const getPopular = async (req, res) => {
    try {
      const popularHeaders = {
        headers: {
          Accept: 'application/json'
        }}
      const response = await request(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=50`, popularHeaders)
      const parsedResponse = JSON.parse(response);
      const popular = parsedResponse;
      res.status(200).json({ status: 200, data: popular, message: "Its ok"});
    } catch (err) {
      console.log(err)
      res.status(500).json({ status: 500, message: "meow"});
    }
  }

//DIETS//
  const getCuisine = async (req, res) => {
    const {name} = req.params;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${name}&number=45`)
    const data = await response.json()
    res.json(data);
  };
  
//SEARCHED//
const getSearched = async (req, res) => {
  const {name} = req.params;
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&number=45`)
  const data = await response.json()
  res.json(data)
}




module.exports = { 
  getVeggie, 
  getPopular, 
  getCuisine, 
  getSearched, 
  diabeticRecipes, 
  heartRecipes, 
  highbpRecipes
};