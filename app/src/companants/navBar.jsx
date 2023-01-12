import React, { useState } from "react"
import { GiHamburgerMenu,RxCross1 } from "react-icons/all"

 

function NavBar() {
    const [nav, setNav] = useState("nav");
    const handlenav=()=>{
        setNav(!nav);
    }
    return (

        <div className="flex justify-between  h-30 max-w-[1240] mx-auto px-0 ">
            <h1 className="w-full font-bold bg-yellow-400 text-black  text-2xl p-4">LetsHire</h1>
            <ul className="hidden md:flex ">
                <div className="flex bg-yellow-400">
                    <li className="p-5">Home</li>
                    <li className="p-5">Job</li>
                    <li className="p-5">Search</li>

                </div>
                <div className="p-5 text-white bg-black">
                    <span className="p-5">Login</span>
                    <span className="p-5">Register</span>
                </div>
            </ul>
            <div onClick={handlenav} className="block md:hidden   bg-yellow-400 p-5 ">
                { !nav ?  <RxCross1 size={20} /> : <GiHamburgerMenu size={20} /> }
                
            </div>
            <div className= {!nav ? 'block md:hidden left-0 top-0 fixed bg-yellow-400 w-[150px] h-full ease-in-out duration-500' : 'fixed left-[-100%] '} >
                <h1 className="w-full font-bold  text-black text-2xl p-4">LetsHire</h1>
                <ul className=" uppercase border ">
                    <li className="p-4 border-t border-b ">Home</li>
                    <li className="p-4 border-b ">Job</li>
                    <li className="p-4 border-b ">Search</li>
                    <li className="p-4 border-b ">Login</li>
                    <li className="p-4 border-b ">Register</li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar