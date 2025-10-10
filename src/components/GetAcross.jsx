import React from 'react';

const GetAcross = (props) => {
    return (
        <div className='p-2'>
            <h2 className='font-semibold mb-2'>{props.title}</h2>
            <p className='text-sm text-gray-700'>{props.description}</p>
            <div className='text-orange-500 flex items-center gap-2 mt-2'>
                <div className='bg-gray-300 p-1 rounded-full'>
                    <i className={props.icon}></i>
                </div>
                <a className='hover:underline cursor-pointer text-sm'>{props.input}</a>
            </div>
        </div>
    );
};

export default GetAcross;