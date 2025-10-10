import React from 'react';
import ProjectCard from './ProjectsCard';
import projectData from './ProjectData';
import Interested from './Interested';

const ProjectSection = () => {
    return (
        <>
            <section className='projects-section bg-white text-black flex flex-col justify-center items-center min-h-[50vh]'>
                <div className="bg-[url(https://picsum.photos/1280/800?random=3)] bg-no-repeat bg-cover before:inset before:absolute before:content-'' before:opacity-50 before:bg-black before:w-[100%] h-[30vh] before:h-[30vh] mb-10 h-[30vh] text-white flex justify-center items-center w-full">
                    <h2 className="z-5 text-shadow-lg text-3xl font-semibold mb-4">My Projects</h2>
                </div>
                <p className='text-gray-800 italic mb-10 text-xs text-center w-[80%]'>"Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success."</p>
                <div className="p-3 projects-grid max-w-[1000px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {
                        projectData.map((project) => (
                            <ProjectCard key={project.id} title={project.title} value={project.value} description={project.description} img={project.link} skills={project.skills_used} />

                        ))
                    }
                </div>
            </section>

        <Interested />
        </>
    );
};

export default ProjectSection;