import Home from "./Home";
import React, {useContext} from "react";
import Cuisine from "./Cuisines";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

import Login from "../components/Login";
import LoginPage from "./LoginPage";
import Register from "../components/Register";
import { LoginContext } from "../context/LoginContext";
import MyRecipes from "./MyRecipes";
import About from "./About";

import Diabetes from "./HealthCategories/Diabetes";
import HighBp from "./HealthCategories/HighBp";
import Hearty from "./HealthCategories/Heart";


const Pages = () => {
    const location = useLocation();
    const { isLoggedin } = useContext(LoginContext);

    return (
    <AnimatePresence exitBeforeEnter>
       <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/about' element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/myrecipes" element={isLoggedin ? <MyRecipes /> : <Navigate to="/login" />}/>
        <Route path="/register" element={!isLoggedin ? <Register /> : <Navigate to="/" />}/>
        <Route path="/login" element={!isLoggedin ? <LoginPage /> : <Navigate to="/" />}/>
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />

        <Route path='/heart' element={<Hearty/>}/>
        <Route path='/diabetes' element={<Diabetes/>}/>
        <Route path='/highbp' element={<HighBp/>}/>


      </Routes>
    </AnimatePresence>
    )
};

export default Pages;