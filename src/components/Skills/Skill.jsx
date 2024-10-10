import React from 'react';

import html from '../../assets/icon/html.png';
import css from '../../assets/icon/css.png';
import js from '../../assets/icon/Javascript.png';
import bootstrap from '../../assets/icon/bootstrap.png';
import tailwind from '../../assets/icon/tailwind.png';
import react from '../../assets/icon/react.js.png';
import git from '../../assets/icon/git.png';
import github from '../../assets/icon/github.png';
import firebase from '../../assets/icon/firebase.png';
import node_js from '../../assets/icon/node.png';
import express_js from '../../assets/icon/express.png';
import mongoDb from '../../assets/icon/mongoDb.png';

const skills = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: js, title: "JavaScript" },
    { src: bootstrap, title: "Bootstrap" },
    { src: tailwind, title: "Tailwind CSS" },
    { src: react, title: "React" },
    { src: git, title: "Git" },
    { src: github, title: "GitHub" },
    { src: firebase, title: "Firebase" },
    { src: node_js, title: "Node.js" },
    { src: express_js, title: "Express.js" },
    { src: mongoDb, title: "MongoDB" },
];

const Skill = () => {
    return (
        <div className='my-11' id='skill-tools'>
       <h2 className="relative text-center text-3xl py-2 font-semibold" >
              My Skills
                <span className="block w-10 h-1 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
            </h2>
    
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-3'>
            {skills.map((skill, index) => (
                <div key={index} className='flex flex-col items-center'>
                    <figure className='relative'>
                        <img
                            src={skill.src}
                            alt={skill.title}
                            className='h-16 md:h-24'
                        />
                        <figcaption className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-green-300 text-xl text-center rounded-lg px-2 opacity-0 hover:opacity-100 transition-opacity'>
                            {skill.title}
                        </figcaption>
                    </figure>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default Skill;