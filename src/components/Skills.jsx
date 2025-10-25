import React from 'react';
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/animation';
import { useLocation } from "react-router-dom";

const Skills = (props) => {

const location = useLocation()
const currentLocation = location.pathname

// console.log(currentLocation);


    return (
        <motion.div
            variants={currentLocation === "/projects" ? FadeUp(0.3) : FadeUp(1.2)}
            initial="hidden"
            whileInView="visible"

            className='skills text-sm flex flex-wrap justify-center gap-2'>
            {props.items.map((item, index) => (
                <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    key={index} className="skill-badge text-xs bg-gray-300 p-2 rounded-lg">{item}</motion.span>
            ))}
        </motion.div>
    );
};

export default Skills;



