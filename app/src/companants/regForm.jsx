import React from 'react'


const regForm = () => {
    return (
        <div className="w-full h-screen bg-yellow-400  flex flex-col items-center  ">
            <div className='p-5 text-5xl' >Sign Up</div>
            <div className='w-[30%] h-[45%]'>
                <form class="w-full bg-white p-4 rounded-xl bottom-5 h-full">
                    <div className="flex items-center border-b bg-white border-teal-500 py-2">
                        <input name='UserName' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" placeholder="Username" aria-label="Username" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-teal-500 py-2 ">
                        <input name='Email' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" placeholder="Email" aria-label="Email" 
                        />
                    </div>                    
                    <div className="flex items-center border-b bg-white border-teal-500 py-2 ">
                        <input name='PhoneNo' 
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" placeholder="Phone no" aria-label="PhoneNo" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-teal-500 py-2 ">
                        <input name='Password'
                             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                             type="password" placeholder="Password" aria-label="Password" 
                        />
                    </div>
                    <div className="flex items-center border-b bg-white border-teal-500 py-2 ">
                        <input name='Re-Password'
                             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                             type="password" placeholder=" Re-Password" aria-label="Re-Password" 
                        />
                    </div>
                    <button classNameass="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Sign Up
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default regForm
