import axios from "axios";
import Moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  EditJob  from "../../components/modals/editJob";
const JobDetail = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [isOpenFrom,setIsOpenFrom] = useState(false);
  Moment.locale("en");
  let { id } = useParams();
  useEffect(() => {
    const data = { id };
    axios
      .post(`${import.meta.env.VITE_BASESERVER_URL}/employer/jobData`, data)
      .then((response) => {
        const jobData = response.data.data;
        setJobTitle(jobData);
      });
  }, []);
  return (
    <div>
      <div className="bg-yellow-400 m-5 p-5 flex flex-col">
        <div className="self-center text-xl font-bold  p-2 ">{jobTitle.jobTitle} </div>
        <div className="p-2"><span className="font-bold"> CATEGORY : </span> <span className=''>{jobTitle.Category} </span> </div>
        <div className="p-2">
        <span className="font-bold"> AMOUNT : </span> {jobTitle.amount} {jobTitle.salaryType}
        </div>
        <div className=" p-2">
        <span className="font-bold"> WORK TYPE : </span> {jobTitle.workPlacetype}
        </div>
        <div className="text-lg p-2"> <span className="font-bold">DURATION :</span> {jobTitle.duration} </div>

        <div className="whitespace-pre-line font-bold p-2">DECRPTION</div>
        <div className="whitespace-pre-line ml-5">
          {jobTitle.decrption}
        </div>
        <div className="p-2 self-end">
          POST DATE :<span  > {Moment(jobTitle.createdAt).format('d MMM yyyy')}{" "}</span>
        </div>
        <div>status : {jobTitle.status}</div>
        <div className="p-2">
          <button 
          onClick={() => setIsOpenFrom(true)} 
          className="p-2 bg-neutral-800 rounded-md  text-white hover:bg-black "
          >Edit</button> 
          <button className="p-2 rounded-md   hover:bg-red-900 bg-red-700">Delete</button></div>
      </div>
      {isOpenFrom && <EditJob setIsOpenFrom={setIsOpenFrom} />}
    </div>
  );
};

export default JobDetail;
