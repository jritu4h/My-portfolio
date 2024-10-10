// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import js from '../../assets/skill/js.png'
import react from '../../assets/skill/react.png'
import node from '../../assets/skill/nodejs.png'
import mongo from '../../assets/skill/mongo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <div className=' mt-24 p-4 bg-blue-100 rounded-lg' data-aos="fade-down" >
           <div className='py-6'>
           <p className=' text-xl text-green-500 text-center py-2' id='features'>What I Do</p>
           <h2 id='about-us' className="relative text-center text-3xl py-2 font-semibold">
  My <span className="text-green-500">Features</span>
  <span className="block w-10 h-1 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
</h2>

           </div>
            <section className=' mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8'>
                <div>
                    <div className="card bg-base-100 shadow-2xl">
                    <div className=' flex justify-center p-2'>
                            <img style={{width:"60px"}} src={js} alt="" />
                        </div>
                        <div className="card-body ">
                            <h2 className="card-title">
                            Vanilla JavaScript
                            </h2>
                            <p><span className=' text-green-500'>&#10003;</span> Dom Manipulation</p>
                            <p><span className=' text-green-500'>&#10003;</span>Creating Elements</p>
                            <p><span className=' text-green-500'>&#10003;</span>Introduction To projects</p>
                          
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-2xl pb-2">
                    <div className=' flex justify-center p-2'>
                            <img style={{width:"60px"}} src={react} alt="" />
                        </div>
                        <div className="card-body ">
                            <h2 className="card-title">
                            React
                            </h2>
                            <p><span className=' text-green-500'>&#10003;</span> React Web Application </p>
                            <p><span className=' text-green-500'>&#10003;</span> Single Page Application </p>
                            <p><span className=' text-green-500'>&#10003;</span> Introduction To projects </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-2xl">
                    <div className=' flex justify-center p-2'>
                            <img style={{width:"56.5px"}} src={node} alt="" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                            Node JS
                            </h2>
                            <p><span className=' text-green-500'>&#10003;</span>Server Management</p>
                            <p><span className=' text-green-500'>&#10003;</span> handling JSON</p>
                            <p><span className=' text-green-500'>&#10003;</span>Cross-Platform Compatibility</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-2xl">
                        <div className=' flex justify-center p-2'>
                            <img style={{width:"60px"}} src={mongo} alt="Shoes" />
                        </div>
                        <div className="card-body mb-1">
                            <h2 className="card-title">
                            Mongodb
                            </h2>
                            <p><span className=' text-green-500 p-0'>&#10003;</span>MERN Project Development</p>
                            <p><span className=' text-green-500'>&#10003;</span>User Rights Management</p>
                            <p><span className=' text-green-500'>&#10003;</span>Data Managment</p>
                           
                        </div>
                    </div>
                </div>

              
            </section>
        </div>
    );
};

export default Features;