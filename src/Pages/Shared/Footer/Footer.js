import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p className='text-center text-secondary mt-5 '><small>Copyright &copy;{new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;