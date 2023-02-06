import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../../features/auth/authSlice";
import EmployerUpdate from "../../components/modals/employerUpdate"
const EmployerProfile = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [place, setPlace] = useState("");
  const [logo, setLogo] = useState("");
  const [details, setDetails] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("error", user, token);
    if (token) {
      axios
        .post(`${import.meta.env.VITE_BASESERVER_URL}/home/get`, user, {
          headers: { token },
        })
        .then((response) => {
          if (!response.status) {
          } else {
            let data = response.data.data;
            setUserName(data.userName);
            setEmail(data.email);
            setPhoneNo(data.phoneNo);
            setPlace(data.place);
            setLogo(data.logoUrl);
            setDetails(data.details)
          }
        });
    }
  }, [<EmployerUpdate setIsOpen={setIsOpen} />]);

  return (
    <>
      <div className="w-[100%] flex justify-center  ">
        <div className=" w-full md:w-[100%] p-5 ">
          <div className=" h-full w-full bg-yellow-400 rounded-md flex flex-col  md:flex-row justify-between ">
            <div className="w-full h-full p-2 bg-black flex justify-center items-center ">
              <img
                className=" h-[250px] w-[260px] rounded-full bg-white"
                src={logo}
                alt="profile"
              />
            </div>
            <div className="text-neutral-800 h-full flex w-full flex-col p-1 justify-between lg:p-3 ld:text-lg  ">
              <div className="break-all p-2">Company Name :{userName}</div>
              <div className="break-all p-2">place :{place}</div>
              <div className="break-all p-2">Contact :{phoneNo}</div>
              <div className="break-all p-2">Email : {email}</div>
              <div className="p-2">Rating :{}</div>
              <div className="w-full flex flex-row border-4 border-black p-2 justify-around ">
                <div className="bg-neutral-800 w-full text-center text-yellow-400">
                  <button onClick={() => setIsOpen(true)}>update</button>
                </div>
                <div className="bg-neutral-800 w-full text-center text-yellow-400">
                  <button>Add Job</button>
                </div>
                <div className="bg-neutral-800 w-full text-center text-yellow-400">
                  <button>Notification</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <EmployerUpdate setIsOpen={setIsOpen} />}
    </>
  );
};

export default EmployerProfile;
