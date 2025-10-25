import React from 'react';
import { motion } from  "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../utility/animation";

const Interested = () => {

    function openContact() {
        window.location.href = 'contact';
    }
    return (
        <div className='flex w-full justify-center items-center md:gap-10 gap-3 p-6 text-sm'>
            <motion.div
                variants={FadeRight(0.4)}
                initial="hidden"
                whileInView="visible"
             className="min-h-[30vh] p-5 flex flex-col justify-center items-start max-w-md rounded">
                <h2 className='text-lg text-gray-800 font-semibold'>Interested for a project?</h2>
                <p className='text-gray-600 text-xs py-5'>If you're looking for a dedicated and skilled developer to bring your project to life, I’d love to collaborate. Reach out to discuss your vision. I’m ready to help turn it into reality.</p>
                <motion.button
                    variants={FadeUp(0.6)}
                    initial="hidden"
                    whileInView="visible"
                 onClick={openContact} className='cursor-pointer text-xs bg-gray-900 hover:bg-gray-700 text-white p-2 rounded-md'>Contact Me</motion.button>
            </motion.div>

            <motion.div 
                variants={FadeLeft(0.4)}
                 initial="hidden"
                whileInView="visible"
            className="bg-gray-100 min-h-[30vh] max-h-[100px] flex flex-col justify-center items-start min-w-[150px] max-w-md rounded shadow">
                <img className="w-full object-cover rounded h-20 mr-4 grow" src="https://picsum.photos/500/500?random=5" alt="Placeholder" />
                <p className="text-xs p-5 text-gray-600">© 2025 Timothy Agbebi.</p>
            </motion.div>
        </div>
    );
};

export default Interested;