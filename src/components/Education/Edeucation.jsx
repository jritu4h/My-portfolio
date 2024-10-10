import React from 'react';

const Edeucation = () => {
    return (
        <div className='mt-14' id='education'>
            <h2 className="relative text-center text-3xl py-2 font-semibold" >
                Education
                <span className="block w-10 h-1 bg-green-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
            </h2>
            <h2 className='text-center text-2xl font-semibold py-2'>Govt. Shahid Suhrawardy  college Affiliated with University of Dhaka</h2>
            <ul className='text-center font-medium'>
                <li>Finial Year(political science)</li>
                <li>Session : 19-20</li>
            </ul>
        </div>
    );
};

export default Edeucation;