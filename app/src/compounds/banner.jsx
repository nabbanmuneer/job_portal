import React from 'react';
import slide from '../assets/slider-img.png';

const Banner = () => {
    return (
        <div>
            <div className=' md:bg-yellow-400'>
                <div className='w-full md:w-[85.2%] bg-black h-[400px] md:h-[500px]  flex justify-end items-center' >
                    <div className='text-white text-[200%] md:text-[250%] lg:text-[300%] w-[40%]' >
                        <p>FIND A </p><p> PERFECT JOB </p> <p>FOR YOU </p>
                    </div>
                    <div className='w-[45%] md:w-[43%] lg:w-[40%] p-3 '>
                        <img src={slide} alt="slider" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
