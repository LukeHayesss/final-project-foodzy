import React from "react";
import Pages from "../pages/Pages";
import Category from "./Category";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  )
}
export default App;

