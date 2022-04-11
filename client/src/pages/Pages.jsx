import Home from "./Home";
import React, {useContext} from "react";
import Cuisine from "./Cuisines";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
// import Login from "../firebase/Login"
// import Reset from "../firebase/Reset";
// import Register from "../Firebase/Register";
// import Dashboard from "../firebase/Dashboard";
// import Health from "./Health";
// import Favorites from "./Favorites";

import Login from "../components/Login";
import LoginPage from "./LoginPage";
import Register from "../components/Register";
import { LoginContext } from "../context/LoginContext";
import MyRecipes from "./MyRecipes";
import About from "./About";
// import MyRecipes from "./MyRecipes";



const Pages = () => {
    const location = useLocation();
    const { isLoggedin } = useContext(LoginContext);

    return (
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />

        {/* <Route path='/login' element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} /> */}

        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/about' element={<About />}/>
        {/* <Route path='/favorites' element={<Favorites />} /> */}

        <Route path="/login" element={<Login />}/>

        <Route path="/myrecipes" element={isLoggedin ? <MyRecipes /> : <Navigate to="/login" />}/>
        <Route path="/register" element={!isLoggedin ? <Register /> : <Navigate to="/" />}/>
        <Route path="/login" element={!isLoggedin ? <LoginPage /> : <Navigate to="/" />}/>



        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
     </Routes>
     </AnimatePresence>
    )
};

export default Pages;