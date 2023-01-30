import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken, } from "../../features/auth/authSlice";

const EmployeeProfile = () => {
    const user = useSelector(selectCurrentUser);


    return (
        <div className='w-screen flex justify-center  '>
            <div className=' w-[full] md:w-[100%] p-5  flex flex-col-reverse md:flex-row h-[500px]'>
                <div className='md:w-[80%] w-full h-full border-2 border-black m-3' >

                </div>
                <div className=' md:w-[20%] h-full w-full bg-yellow-400 rounded-md m-3 flex sm:flex-row md:flex-col md:justify-between items-center'>
                    <div className='lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] m-5 bg-white rounded-full '>
                        <img className=' h-full rounded-full' src="" alt="profile" />
                    </div>
                    <div className='text-neutral-800 flex w-full lg:w-full flex-col p-1 lg:p-3 ld:text-lg   '>
                        <div>Name          :{ user.userName}</div>
                        <div>Place         :{ }</div>
                        <div>Qualification :{ }</div>
                        <div>Contact       :{ user.phoneNo}</div>
                        <div>Email         :{ user.email}</div>
                        <div>Rating        :{ }</div>
                        <div className=' ' >
                            <button onClick={""} className='w-full bg-neutral-900 text-yellow-400 rounded-lg'>UPDATE</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default EmployeeProfile;
