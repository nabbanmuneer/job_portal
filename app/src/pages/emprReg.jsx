import React,{useState} from 'react';
// import {useformik} from 'formik';
const EmprReg = () => {
    const [companyName, setcompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_password] = useState('');
    const [contactNo, setcontactNo] = useState('');
    const [validation, setValidation] = useState({
        companyName: {
            status: true,
            message: "",
        },
        email: {
            status: true,
            message: "",
        },
        password: {
            status: true,
            message: "",
        },
        contactNo: {
            status: true,
            message: "",
        },
        passwordResult: {
            status: true,
            message: "",
        },
    });
    const nameCheck = () => {
        if (companyName.length < 3) {
            setValidation((prevState) => ({
                ...prevState,
                companyName: {
                    status: false,
                    message: "name must be more than 2 character",
                },
            }));
            return false;
        } else {
            setValidation((prevState) => ({
                ...prevState,
                companyName: {
                    status: true,
                    message: "",
                },
            }));
            return true;
        }
    };
    const passwordCheck = () => {
        if (password.length < 6) {
            setValidation((prevState) => ({
                ...prevState,
                password: {
                    status: false,
                    message: "password must be 6 characters",
                },
            }));
            return false;
        } else {
            setValidation((prevState) => ({
                ...prevState,
                password: {
                    status: true,
                    message: "",
                },
            }));
            return true;
        }
    };
    const mobileCheck = () => {
        if (contactNo.length !== 10) {
            setValidation((prevState) => ({
                ...prevState,
                contactNo: {
                    status: false,
                    message: "invalid mobile number",
                },
            }));
            return false;
        } else {
            setValidation((prevState) => ({
                ...prevState,
                contactNo: {
                    status: true,
                    message: "",
                },
            }));
            return true;
        }
    };

    const passwordVerify = () => {
        if (password !== re_password) {
            setValidation((prevState) => ({
                ...prevState,
                passwordResult: {
                    status: false,
                    message: "password does not match",
                },
            }));
            return false;
        } else {
            setValidation((prevState) => ({
                ...prevState,
                passwordResult: {
                    status: true,
                    message: "",
                },
            }));
            return true;
        }
    };

    const onHandleSubmit = (e) => {
        const user = { email, companyName, contactNo, password };
        e.preventDefault();
        nameCheck();
        passwordCheck();
        mobileCheck();
        passwordVerify();
        if (
            nameCheck() &&
            passwordCheck() &&
            mobileCheck() &&
            password === re_password
        ) {
            const response = axios.post("", user);
            console.log("data", email, companyName, contactNo, password);
        } else {
            console.log("Error");
        }
    };
    return (
        <div className="w-full h-screen h-lg-full bg-yellow-400  flex flex-col items-center  ">
            <div className='p-5 text-5xl' >Sign Up</div>
            <div className='w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%]'>
                <form className="w-full bg-white p-5 rounded-xl bottom-5 h-full" onSubmit={onHandleSubmit}>
                    <div className="flex items-center border-b bg-white border-gray-700 py-2">
                        <input name='companyName' onBlur={nameCheck} onChange={(e) => { setcompanyName(e.target.value) }}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="companyName" aria-label="companyName" value={companyName}
                        />
                    </div>
                    {!validation.companyName.status && (
                        <p className="text-red-700 mt-6 ">{validation.companyName.message}</p>
                    )}
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='email' onChange={(e) => { setEmail(e.target.value) }}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="email" placeholder="Email" aria-label="Email" value={email}
                        />
                    </div>

                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='contactNo' onChange={(e) => { setcontactNo(e.target.value) }} onBlur={mobileCheck}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Phone no" aria-label="contactNo" value={contactNo}
                        />
                    </div>
                    {!validation.contactNo.status && (
                        <p className="text-red-700 mt-6 ">
                            {validation.contactNo.message}
                        </p>
                    )}
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='password' onChange={(e) => { setPassword(e.target.value) }} onBlur={passwordCheck}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password" placeholder="Password" aria-label="Password" value={password}
                        />
                    </div>
                    {!validation.password.status && (
                        <p className="text-red-700 mt-6 ">
                            {validation.password.message}
                        </p>
                    )}
                    <div className="flex items-center border-b bg-white border-gray-700 py-2 ">
                        <input name='re_password' onBlur={passwordVerify} onChange={(e) => { setRe_password(e.target.value) }}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password" placeholder=" Re-Password" aria-label="Re-Password" value={re_password}
                        />
                    </div>
                    {!validation.passwordResult.status && (
                        <p className="text-red-700 mt-6 ">
                            {validation.passwordResult.message}
                        </p>
                    )}
                    <button className="flex-shrink-0 bg-black hover:bg-yellow-400 border-black hover:border-yellow-400 text-sm border-4  text-white py-1 px-2 w-full mt-3 rounded"
                        type="submit">
                        Sign Up
                    </button>
                    <p className='p-3'>You Already have a Accon?<span className="text-blue-400 cursor-default"><a>Log in</a></span></p>
                </form>
            </div>
        </div>
    );
}

export default EmprReg;
