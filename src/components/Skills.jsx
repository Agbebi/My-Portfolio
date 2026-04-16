import React from 'react';
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/animation';
import { useLocation } from "react-router-dom";

const Skills = (props) => {

const location = useLocation()
const currentLocation = location.pathname
const isProjectsSection = currentLocation.includes("/projects")

// console.log(currentLocation);

    if (isProjectsSection) {
        return (
            <div className='skills text-sm flex flex-wrap justify-start gap-2'>
                {props.items.map((item, index) => (
                    <span key={index} className="skill-badge text-[11px] text-gray-700 bg-gray-300 p-1 px-2 rounded-4xl">{item}</span>
                ))}
            </div>
        );
    }

    return (
        <motion.div
            variants={FadeUp(1.2)}
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
