import React from 'react';
import Skills from './Skills';
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";

const Projects = (props) => {
    const projectList = [...props.skills];
    const trimmedDescription = props.description?.split(' ').slice(0, 12).join(' ') + (props.description?.split(' ').length > 12 ? '...' : '');    

    function handleProjectClick() {
        window.location.href = props.value;
    }
    
    return (
        <motion.div 
            variants={FadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="p-2 rounded-3xl project-card flex flex-col justify-stretch items-center border border-gray-300 shadow hover:shadow-lg transition-shadow duration-300">
            <div className='project-image flex w-full'>
                <img src={props.img} alt="Project 1" className='project-img border border-gray-200 mb-1 rounded-2xl object-cover grow w-full h-[200px]' />
            </div>
            <div className=' flex flex-col align-start p-2 w-full h-full'>
                <h3 className='font-bold self-start mb-2'>{props.title}</h3>
                <p className= 'self-start text-xs text-gray-600 mb-2'>{trimmedDescription}</p>
                <div className='project-skills grow mb-5 max-w-<md> w-full self-center'>
                    <Skills items={projectList} />
                </div>
                <button onClick={() => {handleProjectClick()}} rel="noopener noreferrer" className='w-full bg-gray-800 text-white text-xs py-2 rounded-3xl hover:bg-gray-600 transition-colors duration-300'>View Project</button>
            </div>
        </motion.div>
    );
};

export default Projects;


