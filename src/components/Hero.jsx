import React from 'react';
import Skills from './Skills';
import icons from './icons';

const Hero = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

    const refLink = icons.links.map((link) =>{
        return link;
    })

    const whatsAppLink = icons.links[3];
    function openWhatsApp() {
        window.open(whatsAppLink, '_blank');
    }

    return (
        <section className="hero flex flex-col justify-center items-center text-center p-10 bg-gray-100 text-gray-800 min-h-[90vh]">
            <div className='my-photo mb-5 w-40 h-40 overflow-hidden'>
                <img src="https://picsum.photos/200" alt="my-photo"  className='border-4 border-white rounded-[50%]'/>
            </div>
            <h3 className='text-2xl font-bold antialiased mb-1'>Agbebi Timothy</h3>
            <p className='text-sm mb-5'>Full-stack Web Developer</p>

            <div className='social-icons flex text-lg space-x-4 text-gray-600 mb-5'>
                {icons.icon.map((icon, index) => (
                    <a href={refLink[index]} key={index}><i className={`fa-brands hover:text-orange-500 ${icon}`}></i></a>
                ))}
            </div>
            <Skills items={skills} />

            <div className='hero-buttons ${} flex justify-center items-center mt-5'>
                <button className='cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg mt-5 hover:bg-gray-700 transition-colors duration-300'>Download Resume</button>
                <button onClick={openWhatsApp} className='cursor-pointer bg-white text-gray-800 border border-gray-800 px-4 py-2 rounded-lg mt-5 ml-4 hover:bg-gray-200 transition-colors duration-300'>Hire Me</button>
            </div>
        </section>
    );
};

export default Hero;