import React from 'react';

const Login = () => {
    return (
        <div className="w-full h-screen h-lg-full bg-yellow-400  flex flex-col items-center  ">
            <div className='p-5 text-5xl' >Sign In</div>
            <div className='w-[25%] '>
                <form className="w-full bg-white p-6 rounded-xl bottom-5 h-full" >
                    <div className="flex items-center border-b bg-white border-gray-700 py-4">
                        <input name='email' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="email" placeholder="Email" aria-label="email" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-gray-700 py-4">
                        <input name='password' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password" placeholder="password" aria-label="password" 
                        />
                    </div>
                    <button className="flex-shrink-0 bg-black hover:bg-yellow-400 border-black hover:border-yellow-400 text-sm border-4  text-white py-1 px-2 w-full mt-5 rounded"
                        type="submit">
                        Sign In
                    </button>
                    <p className='p-3 text-gray-500'>You don't have a Accont?<span className="text-blue-400 cursor-default"><a> Sign Up</a></span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
