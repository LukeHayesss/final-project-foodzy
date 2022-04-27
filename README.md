FOODZY is my final project for <b>Concordia Web Dev Bootcamp.</b> I wanted to make an app where you can filter through recipes depending on either diet preference (such as vegan, gluten free, etc), or health conditions (such as diabetes, or heart-health). I was inspired to make this because I'm a Type 1 diabetic, who also loves to cook! I implemented a lot of features and functionality in this app, such as-

- ability to search the entire database of recipes
- ability to filter based on diet or health conditions
- login and logout ability, done through Firebase. This runs through the backend server, and the data is sent to Firebase
- once logged in, you can 'like' recipes and have them save to your profile for future reference. They attach to your UserID in Firebase, so you can access your 'likes' on any device where you are logged in
- there is a chat and review section, where you can upload notes/reviews to the recipe, and this info is also saved to your UserID
- global error handling that redirects incorrect url's to an error page

In building this, I used a lot of different elements, including <b>NodeJS, Styled Components, SCSS, Framer Motion, the Spoonacular API, extensive CSS Styling, React, React Icons, Regex for password verification, Firebase,</b> and more.

<h1>Screenshots</h1>
<h2>Homepage</h2>

![foodzy homepage](https://user-images.githubusercontent.com/91355631/164557522-05f35a2a-b51b-48a0-8d5d-172a23e1bd54.png)

<h2>Diets Dropdown</h2>

![foodzy dropdown 1](https://user-images.githubusercontent.com/91355631/164557547-775233cc-1879-41cf-90d6-392dde8dcb14.png)

<h2>Health Conditions Dropdown</h2>

![foodzy dropdown 2](https://user-images.githubusercontent.com/91355631/164557555-0a06b899-f5bb-44bc-b8de-787242944058.png)

<h2>Recipe Page</h2>

![Recipe detail (1)](https://user-images.githubusercontent.com/91355631/164557574-63ad30fe-cadf-4ae5-a683-7e8fa94c79b5.png)

<h2>Login Page</h2>

![foodzy login](https://user-images.githubusercontent.com/91355631/164557582-b38775d4-df7b-49b4-abb6-a06cc297e7e1.png)

<h2>Liked Recipes Page Part 1</h2>

![foodzy no fave](https://user-images.githubusercontent.com/91355631/164557599-15dbee6e-5c52-4e94-8248-e89d7892b764.png)

<h2>Liked Recipes Page Part 2</h2>

![foodzy faves](https://user-images.githubusercontent.com/91355631/164557617-fdf45f2e-b27e-4c09-9cc9-a487ba122b18.png)

<h2>Error Page</h2>

![foodzy error](https://user-images.githubusercontent.com/91355631/164557626-b6cd7e03-ba0a-45f7-9331-382a3423cec6.png)

<h1><b>Dependencies used in the front-end:</b></h1>

    "dependencies": {
    "@material-ui/core": "^4.12.4",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "dotenv": "^16.0.0",
    "firebase": "8.2.1",
    "framer-motion": "4.1.17",
    "lodash": "^4.17.21",
    "moment": "^2.29.2",
    "mongodb": "^4.5.0",
    "morgan": "^1.10.0",
    "node-sass": "^7.0.1",
    "path-to-regexp": "^6.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.5"},
  
  <h1><b>Dependencies used in the backend:</b></h1>
  
    "dependencies": {
    "express": "^4.17.3",
    "firebase": "^9.6.10",
    "firebase-admin": "^10.0.2",
    "firebase-functions": "^3.20.1",
    "mongodb": "^4.5.0",
    "morgan": "^1.10.0",
    "node-fetch": "^2.6.1",
    "request": "^2.88.2",
    "request-promise": "^4.2.6",
    "uuid": "^8.3.2"},
