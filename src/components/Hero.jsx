import React from 'react';
import Skills from './Skills';
import icons from './icons';
import { easeIn, motion } from 'framer-motion'
import { FadeUp, FadeLeft, FadeRight } from '../utility/animation'


const Hero = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

    const refLink = icons.links.map((link) => {
        return link;
    })

    const whatsAppLink = icons.links[3];
    function openWhatsApp() {
        window.open(whatsAppLink, '_blank');
    }

    return (
        <section className="hero flex flex-col justify-center items-center text-center p-10 bg-gray-100 text-gray-800 min-h-[90vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, animationTimingFunction: easeIn }}
                className='my-photo mb-5 w-40 h-40 overflow-hidden'>
                <img src="https://picsum.photos/200" alt="my-photo" className='border-4 border-white rounded-[50%]' />
            </motion.div>
            <motion.h3
                variants={FadeUp(0.3)}
                initial="hidden"
                whileInView="visible"



                className='text-2xl font-bold antialiased mb-1'>Agbebi Timothy
            </motion.h3>
            <motion.p
                variants={FadeUp(0.6)}
                initial="hidden"
                whileInView="visible"
                className='text-sm mb-5'>Full-stack Web Developer
            </motion.p>

            <motion.div

                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"


                className='social-icons flex text-lg space-x-4 text-gray-600 mb-5'>
                {icons.icon.map((icon, index) => (
                    <motion.a
                        initial={{scale: 1}}
                        whileHover={{scale: 1.1}}
                    
                     href={refLink[index]} key={index}><i className={`fa-brands hover:text-orange-500 ${icon}`}></i></motion.a>
                ))}
            </motion.div>
            <Skills items={skills} />

            <motion.div

                variants={FadeUp(1.5)}
                initial="hidden"
                whileInView="visible"

                className='hero-buttons ${} flex justify-center items-center mt-5'>
                <button className='cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg mt-5 hover:bg-gray-700 transition-colors duration-300'>Download Resume</button>
                <button onClick={openWhatsApp} className='cursor-pointer bg-white text-gray-800 border border-gray-800 px-4 py-2 rounded-lg mt-5 ml-4 hover:bg-gray-200 transition-colors duration-300'>Hire Me</button>
            </motion.div>
        </section>
    );
};

export default Hero;