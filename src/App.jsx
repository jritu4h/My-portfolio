import React from 'react';
import HeroSection from './components/Hero/Hero';
import About from './components/About/About';
import Edeucation from './components/Education/Edeucation';
import Features from './components/Features/Features';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
     <HeroSection></HeroSection>
     <About></About>
     <Edeucation></Edeucation>
     <Features></Features>
     <Skill></Skill>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
};

export default App;