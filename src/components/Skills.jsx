import React from 'react';

const Skills = (props) => {   


    return (
        <div className='skills text-sm flex flex-wrap justify-center gap-2'>
                {props.items.map((item, index) => (
                                    <span key={index} className="skill-badge text-xs bg-gray-300 p-2 rounded-lg">{item}</span>
                                ))}
            </div>
    );
};

export default Skills;



