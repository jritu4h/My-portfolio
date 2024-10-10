import React, { useEffect, useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            })
    }, [])

    return (
        <div className='my-11'>
            <div>
            <h2 id='projects' className="relative text-center text-3xl py-2 font-semibold">
  Projects
  <span className="block w-10 h-1 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
</h2>

                <div className='grid lg:grid-cols-3 gap-3 mt-7 ' data-aos="fade-up">
                    {projects.map((project, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl relative">
                            <figure className='relative'>
                                <img
                                    src={project.image}
                                    alt="" className='h-[200px]' />
                                <figcaption className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-green-300 text-xl text-center rounded-lg px-2 opacity-0 hover:opacity-100 transition-opacity'>
                                    {project.projectName}
                                </figcaption>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {project.projectName}
                                </h2>
                                <p>{project.description}</p>

                                <div className="card-actions justify-end absolute top-0 left-2">
                                    <a href={project.gitLink} target='_blank' rel='noopener noreferrer'>
                                        <button className="btn rounded-full bg-green-300 hover:bg-green-300">
                                            <FaGithub />
                                        </button>
                                    </a>
                                    <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                        <button className="btn rounded-full bg-green-300 hover:bg-green-300">
                                            <FaLink />
                                        </button>
                                    </a>
                                </div>

                                <div>
                                    <ul>
                                        {project.useRequirement?.frontend?.map((req, idx) => (
                                            <li key={idx} className=''>
                                                <span className='font-semibold'>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {project.useRequirement?.backend?.map((req, idx) => (
                                            <li key={idx} className=''>
                                                <span className='font-semibold'>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {project.useRequirement?.database?.map((req, idx) => (
                                            <li key={idx} className=''>
                                                <span className='font-semibold'>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
