import React from 'react';

const NavBar = () => {
    const nav=<>
    <li className='font-semibold hover:text-green-500'><a href="#">Home</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#about-us">About Us</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#education">Educationa</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#features">Features</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#skill-tools">Skill And Tools</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#projects">Projects</a></li>
    <li className='font-semibold hover:text-green-500'><a href="#contact">Contact Us</a></li>
    </>


    return (
        <div>
            <div className="navbar bg-base-100 border-b-2 border-green-200 fixed w-full z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">Habiba Jannat <span className='text-green-500'>Ritu</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {nav}
    </ul>
  </div>
  <div className="navbar-end gap-3">   
  </div>
 
 
</div>
        </div>
    );
};

export default NavBar;