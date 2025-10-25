import React from 'react';
import Skills from './Skills';
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";

const Projects = (props) => {
    const projectList = [...props.skills];

    return (
        <motion.div 
            variants={FadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
        
        className="project-card flex flex-col justify-stretch items-center border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className='project-image flex mb-3 w-full'>
                <img src={props.img} alt="Project 1" className='project-img object-cover grow w-full h-[100%]' />
            </div>
            <div className=' flex flex-col w-full p-2 h-full'>
                <h3 className='font-semibold text-sm self-start'>{props.title}</h3>
                <p className='text-xs self-start mb-5'>{props.description}</p>
                <div className='project-skills grow mb-4 text-xs max-w-<md> self-center'>
                    <Skills items={projectList} />
                </div>
                <a href={props.value} rel="noopener noreferrer" className=' cursor-pointer ml-3 underline text-gray-500 self-start justify-self-end text-sm text-gray-700 hover:underline hover:text-orange-500'>View Project</a>
            </div>
        </motion.div>
    );
};

export default Projects;


