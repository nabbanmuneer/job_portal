import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../../features/auth/authSlice";
const EmployeeProfile = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [place, setPlace] = useState("");
  const [qualification, setQualification] = useState("");
  useEffect(() => {
    console.log("error", user, token);
    if (token) {
      axios
        .post("http://localhost:3000/home/get", user, {
          headers: { token },
        })
        .then((response) => {
          if (!response.status) {
            console.log("data reviced in emplyee pro");
          } else {
            let data = response.data.data;
            console.log("data",response.data);
            console.log("value",data.userName,data.email,data.phoneNo,data.place,data.qualification);
            setName(data.userName);
            setEmail(data.email);
            setPhoneNo(data.phoneNo);
            setPlace(data.place);
            setQualification(data.qualification)
          }
        });
    }
  },[]);

  return (
    <div className="w-screen flex justify-center  ">
      <div className=" w-[full] md:w-[100%] p-5  flex flex-col-reverse md:flex-row h-[500px]">
        <div className="md:w-[80%] w-full h-full border-2 border-black m-3"></div>
        <div className=" md:w-[20%] h-full w-full bg-yellow-400 rounded-md m-3 flex sm:flex-row md:flex-col md:justify-between items-center">
          <div className="lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] m-5 bg-white rounded-full ">
            <img className=" h-full rounded-full" src="" alt="profile" />
          </div>
          <div className="text-neutral-800 flex w-full lg:w-full flex-col p-1 lg:p-3 ld:text-lg   ">
            <div>Name :{name}</div>
            <div>Place :{place}</div>
            <div>Qualification :{qualification}</div>
            <div>Contact :{phoneNo}</div>
            <div>Email :{email}</div>
            <div>Rating :{}</div>
            <div className=" ">
              <button className="w-full bg-neutral-900 text-yellow-400 rounded-lg">
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
