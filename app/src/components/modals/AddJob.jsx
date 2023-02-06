import React,{useState,useEffect} from "react";
const AddJob = () => {
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, []);
    
    const [jobTitle, setJobTitle] = useState('');

  return (
    <>
      <div className="w-full h-screen h-lg-full bg-opacity-75 bg-black inset-0 fixed flex flex-col items-center">
        <div
          className="text-white font-extrabold self-end cursor-pointer"
          //   onClick={() => setIsOpen(false)}
        >
          close
        </div>
        <div className="p-5 text-3xl text-white">Add Job From</div>
        <div className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
          <form
            className="w-full bg-yellow-400 p-5 rounded-xl bottom-5 h-full"
            //   onSubmit={onHandleSubmit}
            //   onClick={() => setIsOpen(true)}
          >
            <div className="flex items-center border-b border-gray-700  py-2">
              <p className="w-[50%]">Job Title :</p>
              <input
                name="userName"
                  onChange={(e) => {
                setJobTitle(e.target.value);
                  }}
                className="appearance-none border-b  border-gray-700 bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="text"
                placeholder="Username"
                aria-label="Username"
                  value={jobTitle}
              />
            </div>
            {/* {!validation.userName.status && (
            <p className="text-red-700 mt-6 ">{validation.userName.message}</p>
          )} */}
            <div className="flex items-center border-b border-gray-700 py-2 ">
              <p className="w-[50%]">categories :</p>
              <label
                name="email"
                className="appearance-none  bg-transparent border-none w-full  leading-tight focus:outline-none"
              >
                {/* {email} */}
              </label>
            </div>

            <div className="flex items-center border-b border-gray-700  py-2 ">
              <p className="w-[50%]">Job Type </p>
              <label
                name="phoneNo"
                className="aappearance-none  bg-transparent border-none w-full  leading-tight focus:outline-none"
              >
                {/* {phoneNo} */}
              </label>
            </div>

            <div className="flex items-center border-b border-gray-700 py-2 ">
              <p className="w-[50%]"></p>
              <input
                name=" "
                //   onChange={(e) => {
                //     setPlace(e.target.value);
                //   }}
                className="appearance-none border-b  border-gray-700 bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="text"
                placeholder="place"
                aria-label="PhoneNo"
                //   value={place}
              />
            </div>
            <div className="flex items-center border-b border-gray-700 py-2 ">
              <p className="w-[50%]">Qualification :</p>
              <input
                name=" "
                //   onChange={(e) => {
                //     setQualification(e.target.value);
                //   }}
                className="appearance-none border-b  border-gray-700 bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                type="text"
                placeholder="Qualification"
                aria-label="PhoneNo"
                //   value={qualification}
              />
            </div>

            <button
              className="flex-shrink-0 bg-black hover:bg-yellow-400 border-black text-semibold hover:border-yellow-400 text-sm border-4  text-white py-1 px-2 w-full mt-3 rounded"
              type="submit"
            >
              Add Job
            </button>
          </form>
        </div>

        <div className="flex items-center py-2 ">
          <p className="text-red-900"></p>
        </div>
      </div>
    </>
  );
};

export default AddJob;
