const { app } = require("firebase-admin");
const request = require("request-promise");
const fetch = require("node-fetch");

//VEGGIE//
const getVeggie = async (req, res) => {
  try {
    const veggieHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request('https://api.spoonacular.com/recipes/random?apiKey=1dfb378ff1614c35b795e10c70c64591&number=20&tags=vegetarian', veggieHeaders)
    const parsedResponse = JSON.parse(response);
    const veggie = parsedResponse;
    res.status(200).json({ status: 200, data: veggie, message: "Yes kween"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "Naughty"});
  }
}
//POPULAR//
const getPopular = async (req, res) => {
    try {
      const popularHeaders = {
        headers: {
          Accept: 'application/json'
        }}
      const response = await request(`https://api.spoonacular.com/recipes/random?apiKey=1dfb378ff1614c35b795e10c70c64591&number=20`, popularHeaders)
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
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1dfb378ff1614c35b795e10c70c64591&diet=${name}&number=22`)
    const data = await response.json()
    res.json(data);
  };
  
//SEARCHED//
const getSearched = async (req, res) => {
  const {name} = req.params;
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1dfb378ff1614c35b795e10c70c64591&query=${name}&number=22`)
  const data = await response.json()
  res.json(data)
}




module.exports = { getVeggie, getPopular, getCuisine, getSearched};