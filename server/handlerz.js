const request = require("request-promise");

const getVeggie = async (req, res) => {
  try {
    const veggieHeaders = {
      headers: {
        Accept: 'application/json'
      }}
    const response = await request('https://api.spoonacular.com/recipes/random?apiKey=4b59a671d9014bbcb7c996e8360465a6&number=20&tags=vegetarian', veggieHeaders)
    const parsedResponse = JSON.parse(response);
    const veggie = parsedResponse;
    res.status(200).json({ status: 200, data: veggie, message: "Yes kween"});
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: "Naughty"});
  }
}
//////////////////////////////////////////////////////
const getPopular = async (req, res) => {
    try {
      const popularHeaders = {
        headers: {
          Accept: 'application/json'
        }}
      const response = await request(`https://api.spoonacular.com/recipes/random?apiKey=4b59a671d9014bbcb7c996e8360465a6&number=20`, popularHeaders)
      const parsedResponse = JSON.parse(response);
      const popular = parsedResponse;
      res.status(200).json({ status: 200, data: popular, message: "Its ok"});
    } catch (err) {
      console.log(err)
      res.status(500).json({ status: 500, message: "meow"});
    }
  }
//   getPopular().then((popular) => console.log(popular, 'FUCKKKKK'));
  
  

module.exports = { getVeggie, getPopular };