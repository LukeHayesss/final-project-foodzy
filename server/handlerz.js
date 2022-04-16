const request = require("request-promise");

//VEGGIE//
const getVeggie = async (req, res) => {
  try {
    const veggieHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request('https://api.spoonacular.com/recipes/random?apiKey=f1bc96b0f1354fd1920767951faf8b24&number=20&tags=vegetarian', veggieHeaders)
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
      const response = await request(`https://api.spoonacular.com/recipes/random?apiKey=f1bc96b0f1354fd1920767951faf8b24&number=20`, popularHeaders)
      const parsedResponse = JSON.parse(response);
      const popular = parsedResponse;
      res.status(200).json({ status: 200, data: popular, message: "Its ok"});
    } catch (err) {
      console.log(err)
      res.status(500).json({ status: 500, message: "meow"});
    }
  }

//RECIPE PARAMS//
// const Recipe = async (req, res) => {
//   try {
//     const recipeHeaders = {
//       headers: {
//         Accept: 'application/json'
//       }}
//   }
// }
   

module.exports = { getVeggie, getPopular };