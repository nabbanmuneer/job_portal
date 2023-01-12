import React from 'react'


const regForm = () => {
    return (
        <div className="w-full h-screen bg-yellow-400  flex flex-col items-center  ">
            <div className='p-5 text-5xl' >Sign Up</div>
            <div className='w-[30%]'>
                <form class="w-full bg-white p-5 rounded-xl bottom-5 h-full">
                    <div className="flex items-center border-b bg-white border-gray-700 py-2">
                        <input name='UserName' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" placeholder="Username" aria-label="Username" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='Email' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" placeholder="Email" aria-label="Email" 
                        />
                    </div>                    
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='PhoneNo' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" placeholder="Phone no" aria-label="PhoneNo" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='Password'
                             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                             type="password" placeholder="Password" aria-label="Password" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='Re-Password'
                             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                             type="password" placeholder=" Re-Password" aria-label="Re-Password" 
                        />
                    </div>
                    <button className="flex-shrink-0 bg-black hover:bg-yellow-400 border-black hover:border-yellow-400 text-sm border-4  text-white py-1 px-2 w-full mt-3 rounded" type="button">
                        Sign Up
                    </button>
                    <p className='p-3'>You Already have a Accon?<spam className="text-blue-400 cursor-default"><a>Log in</a></spam></p>
                </form>
            </div>
        </div>
    )
}

export default regForm
