import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser,selectCurrentToken } from '../features/auth/authSlice';

import JobCat from '../components/jobCat';
import axios from 'axios';
const Home = () => {

    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    console.log("home access token",user,token);
    const home = user ? `welcome ${user}!` : 'home!'
    // const tokkenAbbr = `${token.slice(0, 9)}...`;
    useEffect(() => {
        if(user){
        axios
          .post("http://localhost:3000/home/get")
          .then((response) => {
            setUserResult(response.data);
    
            return response;
          })
          .then((response) => {
            // setSearchResult(response.data);
            console.log(response.data);
          });
        }
      }, []);
    
    return (
        <div className=''>
            <div className='w-full  h-[500px] flex justify-center items-center relative flex-col'  >
                <div className='w-[100%] text-center absolute top-[15%] '>
                    {/* <p>RECOMMENDED JOBS</p> */}
                    {/* <P>15,000+ AVAILABLE HERE FOR YOU</P> */}
                    <p className='font-extrabold text-2xl md:text-4xl p-5 md:tracking-widest text-yellow-500'>RECOMMENDED JOBS</p>
                    <p className='font-bold text-2xl md:text-4xl p-5 md:tracking-widest '> 15,000+  AVAILABLE HERE FOR YOU </p>
                </div>
                <div className='absolute top-[55%] w-full h-10 flex justify-around'>
                    <div>
                        <button className=' bg-yellow-400 rounded-xl font-semibold w-40 h-full hover:bg-black hover:text-yellow-400'>Full Time</button>
                    </div>
                    <div>
                        <button className='  bg-yellow-400 rounded-xl font-semibold  w-40 h-full hover:bg-black hover:text-yellow-400 '>Half Time</button>
                    </div>
                </div>
                <div>
                    {/* <JobCat /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
