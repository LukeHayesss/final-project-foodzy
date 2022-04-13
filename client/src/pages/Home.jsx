import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import {motion} from 'framer-motion/dist/framer-motion';
import Diabetic from '../components/Diabetic';
import Heart from '../components/Heart';
import HighBloodPressure from "../components/HighBloodPressure";

const Home = () => {
    return (
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            <Veggie />
            <Popular />
            <Diabetic />
            <Heart />
            <HighBloodPressure />
        </motion.div>
    )
};

export default Home;