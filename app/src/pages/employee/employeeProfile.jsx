import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  selectCurrentId,
  selectCurrentToken,
} from "../../features/auth/authSlice";
import EmployeeUpdate from "../../components/modals/employeeUpdate";
const EmployeeProfile = () => {
  const Navigate = useNavigate();
  const id = useSelector(selectCurrentId);
  const token = useSelector(selectCurrentToken);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [place, setPlace] = useState("");
  const [qualification, setQualification] = useState("");
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState([]);
  const valuedata = { id };
  useEffect(() => {
    if (token) {
      axios
        .post(
          `${import.meta.env.VITE_BASESERVER_URL}/employee/profile`,
          valuedata
        )
        .then((response) => {
          if (!response.status) {
          } else {
            let data = response.data.data.user;
            setJob(response.data.data.job);
            console.log(job);
            setUserName(data.userName);
            setEmail(data.email);
            setPhoneNo(data.phoneNo);
            setPlace(data.place);
            setQualification(data.qualification);
            setImage(data.profilePic);
            setPdf(data.resume);
          }
        });
    }
  }, [isOpen]);
  const jobProfile = (id)=>{
    Navigate(`/employee/jobs/${id}`);
  }
  return (
    <>
      <div className="w-ful flex justify-center  ">
        <div className=" w-full md:w-[100%] p-5  flex flex-col-reverse md:flex-row ">
          <div className="md:w-[80%] w-full ">
            <div className="flex flex-row h-fit justify-around items-center">
              <div className="">RECEIVED</div>
              <div>YOUR BID</div>
              <div>FINISHED</div>
            </div>
            <div>
              {job &&
                job.map((value, index) => (
                  <div
                    className="   bg-yellow-400 p-5 m-5 rounded-xl"
                    key={index}
                    onClick={() => jobProfile(value._id)}
                  >
                    <p>Job Title:{value.jobTitle}</p>
                    <p>Bid : {value.bid.bidValue}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className=" md:w-[20%] md:h-[500px] h-[400px] w-full bg-yellow-400 rounded-md flex sm:flex-row md:flex-col md:justify-between items-center">
            <div className="lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] m-5 bg-white rounded-full ">
              <img
                className=" lg:w-[150px] md:w-[140px] w-[160px] lg:h-[150px] h-[125px] rounded-full"
                src={image}
                alt="profile"
              />
            </div>
            <div className="text-neutral-800 flex w-full lg:w-full flex-col p-1 lg:p-3 ld:text-lg   ">
              <div>Name :{userName}</div>
              <div>Place :{place}</div>
              <div>Qualification :{qualification}</div>
              <div>Contact :{phoneNo}</div>
              <div>Email :{email}</div>
              <div>Rating :{}</div>
              <div className=" ">
                <button
                  className="w-[75px] bg-neutral-900 text-yellow-400 rounded-lg"
                  onClick={() => setIsOpen(true)}
                >
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
