import React from 'react';
import GetAcross from './GetAcross';

const Contact = () => {

    const inputStyle = 'focus:outline-none border-[none] border-b-2 p-1 text-sm text-gray-900 w-full';

     const fadeInStyle = {
        animation: 'fadeIn 1s ease',
        animationTimeline: 'view()'
    };

    return (
        <section className='contact-section p-3 md:p-6 lg:p-10 flex flex-col justify-center items-center min-h-[50vh]'>
            <h1 className='font-semibold md:w-[80%] mx-auto text-3xl mb-5 self-start'>Get in touch</h1>
            <div className='flex flex-col gap-10 md:flex-row md:w-[80%] '>
                <div style={fadeInStyle} className='p-3'>
                    <p className='self-start font-semibold mb-2'>Send a Message</p>
                    <span className='text-sm self-start text-gray-700'>
                        Hey, just wanted to check in and see how you're doing today. Let me know if you need anything or just feel like chatting!
                    </span>
                    <form style={fadeInStyle} className='contact-form mt-10 flex flex-col justify-center items-center gap-5 w-full' action="https://formspree.io/f/mayvlrpl" method="POST">
                        <div style={fadeInStyle} className='flex relative flex-col w-full max-w-2xl'>
                            <label className='text-xs font-bold text-gray-900' htmlFor="name">Name</label>
                            <input className={inputStyle} type="text" id="name" name="name" autoFocus required />
                        </div>
                        <div style={fadeInStyle} className='flex flex-col  w-full max-w-2xl'>
                            <label className='font-bold text-xs text-gray-900' htmlFor="email">Email Address</label>
                            <input className={inputStyle} type="email" id="email" name="email" required />
                        </div>
                        <div style={fadeInStyle} className='flex flex-col  w-full max-w-2xl'>
                            <label className='font-bold text-xs text-gray-900' htmlFor="phone">Phone Number</label>
                            <input className={inputStyle} type="phone" id="phone" name="phone" required />
                        </div>
                        <div style={fadeInStyle} className='flex flex-col  text-gray-900 w-full max-w-2xl'>
                            <label className='font-bold text-xs text-gray-900' htmlFor="message">Message</label>
                            <textarea
                                className="focus:outline-none w-full min-h-[120px] border-b-2 resize-none"
                                id="message"
                                name="message"
                                required
                            />
                        </div>
                        <button className='cursor-pointer hover:bg-gray-700 self-center text-sm bg-gray-800 text-white p-1 px-2  rounded' type="submit">Message</button>
                    </form>
                </div>
                <div style={fadeInStyle} className='flex flex-col justify-start gap-5 p-3'>
                    <GetAcross title="Call Me"
                        description="Hey, just wanted to check in and see how you're doing today. Let me know if you need anything or just feel like chatting!"
                        icon="fa-solid fa-phone"
                        input="+234 70 4277 5318"
                        link="tel: +234 70 4277 5318" />

                    <GetAcross title="Find Me"
                        description="Looking to build something amazing online? Find me here to explore how my web development skills can bring your digital ideas to life."
                        icon="fa-solid fa-map-pin"
                        input="Behind MGS, Otun Ekiti. Nigeria."
                    />
                    <GetAcross title="Chat Me"
                        description="You can start a conversation with me directly from here. Just send a message using the form above and I'll get back to you as soon as possible."
                        icon="fa-solid fa-comments"
                        input="Start Chat"
                        link="https://wa.me/2347042775318?text=Hi%20there%2C%20I%27m%20interested%20in%20your%20services"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;