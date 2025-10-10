import React from 'react';

const Stuffs = (props) => {

    const x = Math.floor(Math.random() * 9) + 1;
    const y = Math.floor(Math.random() * 9) + 1;
    const bgUrl = `https://picsum.photos/200/200?random=${x*y}`;
    console.log(bgUrl);
    

    return (
        <div className="min-w-[250px] flex justify-center items-center">
            <div style={{ backgroundImage: `url(${bgUrl}&grayscale)` }} className={"text-sm w-[160px] bg-no-repeat bg-cover before:top-0 before:left-0 before:absolute before:content-'' before:opacity-30 before:bg-white before:w-[100%] before:rounded-[50%] before:h-[100%] h-45  p-4 rounded-[50%] relative shadow-md"}>
                <div className="absolute z-5 backdrop-brightness -left-9 top-20 w-25">
                    <i className={`fa-brands ${props.logo} text-3xl text-orange-400`}></i>
                    <h3 className="text-black font-semibold text-sm ">{props.title}</h3>
                    <p className="text-gray-800 text-xs">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Stuffs;