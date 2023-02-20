import Moment from "moment";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const FilterJobs = () => {
  const Navigate = useNavigate();
  let { role, id } = useParams();
  const [jobData, setJobData] = useState("");
  Moment.locale("en");
  useEffect(() => {
    const data = { role, id };
    axios
      .post(`${import.meta.env.VITE_BASESERVER_URL}/home/filterJob`, data)
      .then((response) => {
        setJobData(response.data.data);
      });
  }, []);
  const selection = (id) => {
    Navigate(`/employee/jobs/${id}`);
  };
  return (
    <div>
      <div className="m-5 p-5 h-[100px] grid grid-flow-row bg-yellow-400">
        {jobData &&
          jobData.map((value, index) => (
            <div onClick={() => selection(value._id)} key={index}>
              <div>{value.jobTitle}</div>
              <div>
                POST DATE :
                <span> {Moment(value.createdAt).format("d MMM yyyy")} </span>
              </div>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default FilterJobs;
