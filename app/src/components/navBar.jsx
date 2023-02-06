import React, { useState } from "react";
import { GiHamburgerMenu, RxCross1 } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCurrentUser,
  selectCurrentToken,
  selectCurrentRole,
} from "../features/auth/authSlice";
import { logOut } from "../features/auth/authSlice";
function NavBar() {
  const Navigate = useNavigate();
  const [nav, setNav] = useState("nav");
  const role = useSelector(selectCurrentRole);
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();
  const handlenav = () => {
    setNav(!nav);
  };
  const home = () => {
    Navigate("/");
  };
  const login = () => {
    Navigate("/login");
  };
  const register = () => {
    Navigate("/choice");
  };
  const profile = () => {
    if (role == "employer") {
      Navigate("/employer/profile");
    } else if (role == "employee") {
      Navigate("/employee/profile");
    }
  };
  return (
    <div className="flex  cursor-context-menu  h-30 max-w-[1240] mx-auto px-0  ">
      <h1
        onClick={home}
        className="w-full font-bold bg-black text-yellow-400  text-2xl p-4"
      >
        LetsHire
      </h1>
      <div className="hidden md:flex w-screen ">
        <div className="flex flex-row justify-end text-yellow-400 w-[70%] bg-black ">
          <div className="p-3" onClick={home}>
            Home
          </div>
          <div className="p-3">Job</div>
          <div className="p-3">Search</div>
        </div>
        {!token ? (
          <div className="p-3 flex flex-row justify-around text-black bg-yellow-400 font-semibold w-[30%] ">
            <div onClick={login} className="">
              Login
            </div>
            <div onClick={register} className="">
              Register
            </div>
          </div>
        ) : (
          <div className="p-3 flex flex-row justify-around text-black bg-yellow-400 font-semibold w-[30%] ">
            <div onClick={profile} className="">
              {user}
            </div>
            <div
              onClick={(e) => {
                dispatch(logOut());
                Navigate('/');
              }}
              className=""
            >
              LogOut
            </div>
          </div>
        )}
      </div>
      <div
        onClick={handlenav}
        className="block md:hidden justify-end text-yellow-400  bg-black  p-5 "
      >
        {!nav ? <RxCross1 size={20} /> : <GiHamburgerMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "block md:hidden left-0 top-0 fixed bg-yellow-400 w-[150px] h-[400px] ease-in-out duration-500 z-10"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full font-bold  text-black text-2xl p-4">LetsHire</h1>
        <ul className=" uppercase border">
          <li onClick={home} className="p-4 border-t border-b ">
            Home
          </li>
          <li className="p-4 border-b ">Job</li>
          <li className="p-4 border-b ">Search</li>
          <li className="p-4 border-b " onClick={login}>
            Login
          </li>
          <li className="p-4 border-b " onClick={register}>
            Register
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
