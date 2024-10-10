import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700 text-white'>
            <h2 className='text-center text-xl py-4'>Developed By Habiba Jannat Ritu</h2>
            <hr className='border-white border-1' />
            <ul className='flex flex-wrap gap-2 py-7 justify-center'>
            <li className='font-semibold hover:text-green-500'><a href="#">Home</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#about-us">About Us</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#education">Educationa</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#features">Features</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#skill-tools">Skill And Tools</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#projects">Projects</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    );
};

export default Footer;