import React from 'react';

const Footer = () => {
    return (
        <footer className='sticky bottom-0' style={{ textAlign: 'center', padding: '1rem 0', background: '#f5f5f5' }}>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;