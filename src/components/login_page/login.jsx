import React, { useState, useEffect } from "react";
import leftsideimage from "../../assets/leftsideimage.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../backend/firebase/firebase_config";

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);


  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    if (loggedInUser) {
      navigate("/home");
    }
  }, [loggedInUser]);

  const handleLoginFormInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUpButton = () => {
    navigate("/registration");
    };


    return (
        <div className="w-full h-screen flex item-start bg-gradient-to-r from-black via-gray-700 to-gray-800">
            <div className=" left-screen relative w-50 h-full flex flex-col overflow-hidden">
                <div className="absolute top-[25%] left-[13%] flex flex-col">
                    <h1 className=" text-6xl text-[#E0E0E0] font-bold font-quicksand">Welcome to our app</h1>
                    <div className="border-4 w-20 border-white inline-block mx-auto my-7 rounded-lg"></div>
                    <p className=" text-2xl font-quicksand font-semibold text-[#E0E0E0] my-15">Login and simplify your search for skilled professionals</p></div>
                <img src={leftsideimage} className="w-full h-full object-cover " />
            </div>
            <div className="right-screen relative w-50 h-full flex flex-col">
                <div className="text-2xl my-5 font-bold font-quicksand flex justify-end mr-10">
                    <span className="text-orange-500">Ham</span><span className="text-white">mer</span>iZe
                </div>
                <div className="border-2 w-[135px] border-white inline-block mx-auto my-0 mr-10 rounded-lg"></div>
                <div className="mx-30 my-20 ">
                    <h2 className="text-5xl font-bold font-quicksand text-[#ffffff]">Sign in to your Account</h2>
                    <div className="absolute left-[40%] border-4 w-20 border-white inline-block my-12 rounded-lg"></div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-3/4 flex flex-col">
                    <input
  type="email"
  name="email"
  value={loginData.email}
  onChange={handleLoginFormInput}
  className="opacity-70 w-full text-lg font-quicksand text-black py-3 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105"
/>
<input
  type="password"
  name="password"
  value={loginData.password}
  onChange={handleLoginFormInput}
  className="opacity-70 w-full text-lg font-quicksand text-black py-3 border-b border-white outline-none focus:outline-none px-4 my-2 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105"
/>

                    </div>
                    <div className="w-3/4 flex items-center justify-end">
                        <p className="text-lg font-quicksand text-white underline underline-offset-2 my-2 cursor-pointer ">Forgot Password?</p>
                    </div>
                    <div className="w-full flex flex-col  items-center justify-center">
                        <button className="w-3/4 text-white my-20 bg-[#db6221] rounded-2xl py-3 text-center flex items-center justify-center text-3xl hover:bg-[#e6956a]" onClick={handleLoginFormSubmit}>
                            Log In
                        </button>
                    </div>

                    <div className="w-full flex p-0 items-center justify-center ">
                        <p className="text-lg font-quicksand text-white">Don't have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer"  onClick={handleSignUpButton}>Sign up</span></p>
                    </div>

                </div>


            </div>

        </div >

    )
}

export default Login;