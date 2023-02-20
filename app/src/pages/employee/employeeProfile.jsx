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
            let count = response.data.data.job.length;
            setJob(response.data.data.job);
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

  return (
    <>
      <div className="w-ful flex justify-center  ">
        <div className=" w-full md:w-[100%] p-5  flex flex-col-reverse md:flex-row ">
          <div className="md:w-[80%] w-full  m-3">
            <div className="flex flex-row h-fit justify-around items-center">
              <div className="flex flex-col item-center">
                <div className="text-center">{job.length}</div>
                <div>Applied JOB</div>
              </div>
              <div className="flex flex-col item-center">
                <div className="text-center">{job.length}</div>
                <div>YOUR BID</div>
              </div>
              <div className="flex flex-col item-center">
                <div className="text-center">{job.length}</div>
                <div>FINISHED</div>
              </div>
            </div>
            <div>
              {job &&
                job.map((value, index) => (
                  <div
                    className="   bg-yellow-400 p-5 m-5"
                    key={index}
                    onClick={() => jobProfile(value._id)}
                  >
                    <p>Job Title:{value.jobTitle}</p>
                    <p>Bid : {value.bid.bidValue}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className=" md:w-[20%] h-full w-full bg-yellow-400 rounded-md m-3 flex sm:flex-row md:flex-col md:justify-between items-center">
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
                  className="w-full bg-neutral-900 text-yellow-400 rounded-lg"
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
