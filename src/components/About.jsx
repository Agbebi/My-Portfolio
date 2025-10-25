import React from "react";
import Stuffs from "./Stuffs";
import Interested from "./Interested";
import BlurText from './BlurText'
import { motion } from 'framer-motion'
import { FadeUp, FadeLeft, FadeRight } from '../utility/animation'

function About() {



    return (<>
        <div
            className="about-section bg-white text-black flex flex-col justify-center items-center">
            <motion.div
                initial={{ filter: "blur(20px)", scale: 0.9 }}
                animate={{ filter: "none", scale: 1 }}
                transition={{ duration: 2.5, delay: 0.2 }}
                className="bg-[url(https://picsum.photos/1280/800?random=3)] bg-no-repeat bg-cover before:inset before:absolute before:content-'' before:opacity-50 before:bg-black before:w-[100%] h-[50vh] before:h-[50vh] text-white  flex justify-center items-center w-full">
                <h2 className="text-7xl z-4 font-semibold mb-4">
                    About Me
                </h2>
            </motion.div>

            <div className="background-text p-10 text-sm max-w-2xl text-left min-h-[30vh] ">
                <motion.h3
                    variants={FadeLeft(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-xl font-semibold mb-4 text-left text-gray-800">Background
                </motion.h3>
                <motion.p
                    variants={FadeLeft(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    className=" mb-4 text-gray-600">
                    I'm a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user experiences.
                </motion.p>



                <motion.p
                    className=" mb-4 r text-gray-600"
                    variants={FadeLeft(0.9)}
                    initial="hidden"
                    whileInView="visible"
                >
                    I love coding—it’s where I feel most alive. Solving problems,
                    building smart solutions, and writing clean, efficient code comes naturally to me.
                    It’s not just what I do, it’s who I am.
                </motion.p>

            </div>

            <div className=" skills-section p-5 text-sm max-w-full lg:max-w-[1000px] text-left min-h-[30vh]">
                <motion.h3
                    variants={FadeLeft(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-lg font-semibold mb-4 text-left text-gray-800">Stuffs I'm good at</motion.h3>
                <div className="skills-list py-5 justify-start flex text-gray-800 overflow-auto scrollbar-hide ">
                    <Stuffs delay="0.3" logo="fa-react" title="React" description="Creating modern web apps with React.js." />
                    <Stuffs delay="0.6" logo="fa-node" title="Node.js" description="Building scalable backend services with Node.js." />
                    <Stuffs delay="0.9" logo="fa-js" title="JavaScript" description="Building dynamic and interactive web applications." />
                    <Stuffs delay="1.2" logo="fa-database" title="MongoDB" description="Designing and managing NoSQL databases." />
                    <Stuffs delay="1.5" logo="fa-css3-alt" title="CSS" description="Styling and enhancing web pages with CSS." />
                    <Stuffs delay="1.8" logo="fa-git-alt" title="Git" description="Version control and collaboration using Git." />
                    <Stuffs delay="2.1" logo="fa-html5" title="Html" description="Crafting visually stunning and user-friendly websites." />
                </div>


                <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}

                    className="text-center text-gray-700 text-lg font-semibold my-6">Free pictures to feed the eyes

                </motion.h3>

                <div className="grid justify-center align-center grid-cols-2 md:grid-cols-4 lg:grid-cols-auto gap-4 mt-8 max-w-[900px] lg:mx-auto w-full">
                    <motion.div
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gray-100 fadeIn grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=1" /></motion.div>
                    <motion.div
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gray-100 grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=2" /></motion.div>
                    <motion.div
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gray-100 grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=3" /></motion.div>
                    <motion.div
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gray-100 grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=4" /></motion.div>
                </div>
            </div>
        </div>
        <Interested />
    </>
    );
};

export default About;