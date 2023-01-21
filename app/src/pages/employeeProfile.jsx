import React from 'react';

const EmployeeProfile = () => {
    return (
        <div className='w-screen flex justify-center  '>
            <div className=' w-[full] md:w-[100%] p-5  flex flex-col-reverse md:flex-row h-[500px]'>
                <div className='md:w-[80%] w-full h-full border-2 border-black m-3' >

                </div>
                <div className=' md:w-[20%] h-full w-full bg-neutral-800 m-3 flex sm:flex-row md:flex-col md:justify-between items-center'>
                    <div className='lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] m-5 bg-white rounded-full '>
                        <img className=' h-full rounded-full' src="" alt="profile" />
                    </div>
                    <div className='text-white flex w-full lg:w-full flex-col p-1 lg:p-3 ld:text-lg   '>
                        <div>Name          :{ }</div>
                        <div>Place         :{ }</div>
                        <div>Qualification :{ }</div>
                        <div>Contact       :{ }</div>
                        <div>Email         :{ }</div>
                        <div>Rating        :{ }</div>
                        <div className=' ' >
                            <button className='w-full bg-yellow-400'>edit</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default EmployeeProfile;
