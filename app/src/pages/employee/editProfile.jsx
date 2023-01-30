import React from 'react';

const EditProfile = () => {AnimationEvent
    return (
        <div>
             <div className="w-full h-screen h-lg-full bg-yellow-400  flex flex-col items-center  ">
            <div className='p-5 text-5xl' >Sign Up</div>
            <div className='w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%]'>
                <form className="w-full bg-white p-5 rounded-xl bottom-5 h-full" >
                    <div className="flex items-center border-b bg-white border-gray-700 py-2">
                        <input name='userName' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Username" aria-label="Username" value={userName}
                        />
                    </div>
                    {!validation.userName.status && (
                        <p className="text-red-700 mt-6 ">{validation.userName.message}</p>
                    )}
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='email' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="email" placeholder="Email" aria-label="Email" value={email}
                        />
                    </div>

                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='phoneNo' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Phone no" aria-label="PhoneNo" value={phoneNo}
                        />
                    </div>
                    {!validation.phoneNo.status && (
                        <p className="text-red-700 mt-6 ">
                            {validation.phoneNo.message}
                        </p>
                    )}
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='password' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password" placeholder="Password" aria-label="Password" value={password}
                        />
                    </div>
                    {!validation.password.status && (
                        <p className="text-red-700 mt-6 ">
                            {validation.password.message}
                        </p>
                    )}
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='re_password'                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password" placeholder=" Re-Password" aria-label="Re-Password" value={re_password}
                        />
                    </div>
                    {/* {!validation.passwordResult.status && (
                        <p className="text-red-700 mt-6 ">
                            {validation.passwordResult.message}
                        </p>
                    )} */}

                    <button className="flex-shrink-0 bg-black hover:bg-yellow-400 border-black hover:border-yellow-400 text-sm border-4  text-white py-1 px-2 w-full mt-3 rounded"
                        type="submit">
                        Sign Up
                    </button>
                    <p className='p-3 text-neutral-600'>You Already have a Accont?<span className="text-blue-400 cursor-default"><a>Log in</a></span></p>
                </form>
        </div>
        </div>
        </div>
)}

export default EditProfile;
