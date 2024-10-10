import React from 'react';
import bgImages from '../../assets/image/image2.jpeg';
import { FaGithub, FaFacebook, FaDownload } from 'react-icons/fa';
import CV from '../../assets/Cv/Professional Modern CV Resume (1).pdf';
const About = () => {
    return (
        <div className='py-16  '>
            <h2 id='about-us' className="relative text-center text-3xl py-2 font-semibold">
                About <span className="text-green-500">Us</span>
                <span className="block w-10 h-1 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
            </h2>

            <div className="lg:px-0 px-12 lg:py-0 flex flex-col md:flex-row-reverse md:space-x-4 items-center py-16">
                <div className="flex-1 lg:px-3">

                    <h2 className='text-3xl py-3'>Habiba Jannat <span className='text-green-500 font-bold'>Ritu</span></h2>

                    <p className="mt-2 font-semibold text-2xl">
                        Web Developer (Frontend-React.js).
                    </p>

                    <div className="flex flex-wrap gap-3 my-3">
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
                        <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
                        <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                    </div>
                    <div className='mt-3'>
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
                <div className="flex-1 lg:py-0 py-5">
                    <img src={bgImages} alt="" className="w-full md:w-1/2 h-auto mx-auto rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default About;