import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../../features/auth/authSlice";
import EmployeeUpdate from "../../components/modals/employeeUpdate"
const EmployeeProfile = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [place, setPlace] = useState("");
  const [qualification, setQualification] = useState("");
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("error", user, token);
    if (token) {
      axios
        .post(`${import.meta.env.VITE_BASESERVER_URL}`, user, {
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
            setQualification(data.qualification);
            setImage(data.profilePic);
            setPdf(data.resume)
          }
        });
    }
  },[]);

  return (
    <>
    <div className="w-screen flex justify-center  ">
      <div className=" w-[full] md:w-[100%] p-5  flex flex-col-reverse md:flex-row h-[500px]">
        <div className="md:w-[80%] w-full h-full border-2 border-black m-3"></div>
        <div className=" md:w-[20%] h-full w-full bg-yellow-400 rounded-md m-3 flex sm:flex-row md:flex-col md:justify-between items-center">
          <div className="lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] m-5 bg-white rounded-full ">
            <img className=" lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] rounded-full" src={image} alt="profile" />
          </div>
          <div className="text-neutral-800 flex w-full lg:w-full flex-col p-1 lg:p-3 ld:text-lg   ">
            <div>Name :{userName}</div>
            <div>Place :{place}</div>
            <div>Qualification :{qualification}</div>
            <div>Contact :{phoneNo}</div>
            <div>Email :{email}</div>
            <div>Rating :{}</div>
            <div className=" ">
              <button className="w-full bg-neutral-900 text-yellow-400 rounded-lg" onClick={() => setIsOpen(true)}>
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      {isOpen && <EmployeeUpdate setIsOpen={setIsOpen} />}
    </>
  );
};

export default EmployeeProfile;
