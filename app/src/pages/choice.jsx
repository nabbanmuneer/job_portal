import React from 'react';
import empoloyer from '../assets/Lovepik_com-401864255-professionals.png';
import empoloyee from "../assets/Lovepik_com-401494035-job-seeker-interview-icon-free-vector-illustration-material.png";
const choice = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 divide-y justify-center  h-screen'>
            <div className=' bg-yellow-400 flex items-center justify-center' >
                <div className=' border-8 border-black item-center w-[80%] md:w-[60%]'>
                    <img className='' src={empoloyer} alt="empoyer" />
                </div>
            </div>
            <div className='bg-black text-white '>
            <img className='h-[80%]' src={empoloyee} alt="empoyee" />
            </div>
        </div>
    );
}

export default choice;
