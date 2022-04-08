import Home from "./Home";
import React from "react";
import Cuisine from "./Cuisines";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Login from "../components/Login";
import Reset from "../components/Reset";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";


const Pages = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
     <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
     </Routes>
     </AnimatePresence>
    )
};

export default Pages;