import React from 'react';
import slide from '../assets/slider-img.png';

const Banner = () => {
    return (
        <div>
            <div className=' md:bg-yellow-400'>
                <div className='w-full md:w-[85.2%] bg-black h-screen flex justify-end' >
                    <div className='w-[40%] p-3 '>
                        <img src={slide} alt="slider" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
