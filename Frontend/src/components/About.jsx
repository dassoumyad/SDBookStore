import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <div className="w-[600px]">
                <div className='modal-box'>
                    <h3 className="font-bold text-lg">About Us</h3>
                    <p className='mt-4 text-base'>
                        Welcome to our website! We are dedicated to providing you with the best service possible.
                        Our team is committed to ensuring your satisfaction with our products and services.
                        Thank you for choosing us!
                    </p>
                    <p className='mt-4 text-base'>
                        Our mission is to deliver high-quality solutions tailored to your needs. 
                        We believe in the power of collaboration and strive to build strong, lasting relationships with our clients.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
