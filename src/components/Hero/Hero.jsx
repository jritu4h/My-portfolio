import React from 'react';
import bgImages from '../../assets/image/image1.jpeg';
import { FaDownload, FaFacebook, FaGithub } from 'react-icons/fa';
import CV from '../../assets/Cv/Professional Modern CV Resume (1).pdf';
const HeroSection = () => {

    return (
     <div className='lg:px-4 px-12 py-28 flex flex-col items-center'>
           <div className="flex flex-col md:flex-row md:space-x-4 items-center">
        <div className="flex-1 lg:px-3">
            <p className='text-xl font-semibold'>This is,</p>
          <h2 className='text-3xl py-3'>Habiba Jannat <span className='text-green-500 font-bold'>Ritu</span></h2>
          <p className="mt-2 font-semibold">
          I am a passionate web developer with expertise in React, Node.js, Express.js, and MongoDB. I love building web applications and learning new technologies.
        </p>
     <div className='lg:my-0 my-3'>
     <a href="https://github.com/jritu4h" target='_blank'>
                            <button className='btn rounded-full bg-green-500 hover:bg-green-500 btn-md text-white'>
                                <FaGithub />
                            </button>
                        </a>
                        <a href="https://www.facebook.com/habibajannat.ritu" target='_blank'>
                            <button className='btn rounded-full btn-md bg-green-500 hover:bg-green-500 text-white ml-2'>
                                <FaFacebook />
                            </button>
                        </a>
<a href={CV} download='My Cv'><button className='btn mx-1 rounded-full bg-green-500 hover:bg-green-500 text-white mt-3'>Download Resume <FaDownload /></button></a>
     </div>
        </div>
        <div className="flex-1">
          <img src={bgImages} alt="" className="w-full md:w-1/2 h-auto mx-auto rounded-full" />
        </div>
      </div>
     </div>
      
      
     
    );
};

export default HeroSection;