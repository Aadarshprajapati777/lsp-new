import React, { useState } from 'react';
import registrationbg from "../../assets/regbg.jpeg";
import Dropdown2 from './Dropdown/filter_dropdown';
import ImageUpload from './ImageUpload/ImageUpload';
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const [locationRequired, setLocationRequired] = useState(false);
    const navigate = useNavigate();

    const handleLocationChange = () => {
        setLocationRequired(!locationRequired);
    };

    return (
        <div className="main_body h-screen w-screen relative">
            <div className="brightness-75" style={{ zIndex: 1 }}></div>
            <div
                className="absolute inset-0 bg-cover bg-center brightness-70"
                style={{ backgroundImage: `url(${registrationbg})`, zIndex: 0 }}
            ></div>
            <div className="flex items-center justify-center h-full relative z-10">
                <div className="h-[970px] w-[1200px] bg-[#F1D6AC] bg-opacity-80  p-8 rounded-3xl shadow-lg flex flex-col">
                    <h1 className="flex justify-center items-center font-quicksand text-5xl font-bold text-black">Sign Up</h1>
                    <div className="border-4 w-20 border-black mx-auto my-6" />
                    <div className='flex'>
                        <div className='flex ml-0 mx-auto flex-col'>
                            <input
                                type="email"
                                placeholder="Email"
                                autoComplete="off"
                                className="ml-10 w-[600px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105"
                            />
                            <input
                                type="password"
                                autoComplete="off"
                                placeholder="Password"
                                className="ml-10 w-[600px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="ml-10 w-[600px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105"
                            />
                            <div className="flex ml-10">
                                <input
                                    type="text"
                                    placeholder="Street"
                                    className="w-[290px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105 mr-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Area"
                                    className="w-[300px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105 mr-2"
                                />
                            </div>
                            <div className="flex ml-10">
                                <input
                                    type="text"
                                    placeholder="District"
                                    className="w-[290px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105 mr-2"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    className="w-[300px] bg-[#000000] opacity-70 text-lg font-quicksand text-white py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105"
                                />
                            </div>

                            <Dropdown2 />
                            <div className="flex items-center ml-10 mt-6 my-4">
                                <input
                                    type="checkbox"
                                    id="locationCheckbox"
                                    className="form-checkbox h-10 w-5  text-[#000000] rounded-md bg-[#000000] transition duration-200 ease-in-out "
                                    checked={locationRequired}
                                    onChange={handleLocationChange}
                                />
                                <label htmlFor="locationCheckbox" className="ml-2 font-quicksand  font-bold text-xl text-black">This product requires your location</label>
                            </div>
                        </div>
                        <ImageUpload />
                    </div>
                    <button className='rounded-lg w-1/2 h-[70px] mx-auto font-quicksand font-bold text-white bg-secondary opacity-80 text-4xl hover:bg-[#313131]'>
                        Register
                    </button>
                    <div className="w-full flex items-center justify-center mt-4">
                        <p className="text-xl font-quicksand text-black">Already have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer" onClick={()=>navigate("/")}>Sign in</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Registration;
