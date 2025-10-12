import React from "react";
import Stuffs from "./Stuffs";
import Interested from "./Interested";

function About() {

    const fadeInStyle = {
        animation: 'fadeIn 1s ease',
        animationTimeline: 'view()'
    };

    return (<>
        <div style={
            fadeInStyle} className="about-section bg-white text-black flex flex-col justify-center items-center">
            <div className="bg-[url(https://picsum.photos/1280/800?random=3)] bg-no-repeat bg-cover before:inset before:absolute before:content-'' before:opacity-50 before:bg-black before:w-[100%] h-[50vh] before:h-[50vh] text-white  flex justify-center items-center w-full"><h2 className="text-7xl z-4 font-semibold mb-4">About Me</h2></div>

            <div style={
                fadeInStyle} className="background-text p-10 text-sm max-w-2xl text-left min-h-[30vh] ">
                <h3  className="text-lg font-semibold mb-4 text-left text-gray-800">Background</h3>
                <p  className=" mb-4 text-gray-600">
                    I'm a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user experiences.
                </p>
                <p className=" mb-4 r text-gray-600">I love coding—it’s where I feel most alive. Solving problems, building smart solutions, and writing clean, efficient code comes naturally to me. It’s not just what I do, it’s who I am.</p>
            </div>

            <div style={
                fadeInStyle} className=" skills-section p-5 text-sm max-w-full lg:max-w-[1000px] text-left min-h-[30vh]">
                <h3 className="text-lg font-semibold mb-4 text-left text-gray-800">Stuffs I'm good at</h3>
                <div className="skills-list py-5 justify-start flex text-gray-800 overflow-auto scrollbar-hide ">
                    <Stuffs logo="fa-react" title="React" description="Creating modern web apps with React.js." />
                    <Stuffs logo="fa-node" title="Node.js" description="Building scalable backend services with Node.js." />
                    <Stuffs logo="fa-js" title="JavaScript" description="Building dynamic and interactive web applications." />
                    <Stuffs logo="fa-database" title="MongoDB" description="Designing and managing NoSQL databases." />
                    <Stuffs logo="fa-css3-alt" title="CSS" description="Styling and enhancing web pages with CSS." />
                    <Stuffs logo="fa-git-alt" title="Git" description="Version control and collaboration using Git." />
                    <Stuffs logo="fa-html5" title="Html" description="Crafting visually stunning and user-friendly websites." />
                </div>


                <h3 className="text-center text-gray-700 text-lg font-semibold my-6">Free pictures to feed the eyes</h3>

                <div className="grid justify-center align-center grid-cols-2 md:grid-cols-4 lg:grid-cols-auto gap-4 mt-8 max-w-[900px] lg:mx-auto w-full">
                    <div style={
                        fadeInStyle} className="bg-gray-100 fadeIn grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=1" /></div>
                    <div style={
                        fadeInStyle} className="bg-gray-100 grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=2" /></div>
                    <div style={
                        fadeInStyle} className="bg-gray-100 grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=3" /></div>
                    <div style={
                        fadeInStyle} className="bg-gray-100 grow size-45 p-1 rounded shadow"><img className="object-contain" src="https://picsum.photos/500/500?random=4" /></div>
                </div>
            </div>
        </div>
        <Interested />
    </>
    );
};

export default About;