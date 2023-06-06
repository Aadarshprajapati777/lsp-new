import React, { useState, useEffect } from "react";
import Dropdown from "./filter_dropdown/filter_dropdown";
import ProviderCards from "./provider_cards/provider_cards";
import UserData from "../../backend/firebase/user_data";


import { FaEnvelope, FaMapMarked, FaSearch, FaUser, FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Home() {
    const [showSlider, setShowSlider] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

    const handleMapIconClick = () => {
        setShowSlider(true);
    };

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    useEffect(() => {
        let timer;
        if (sliderValue > 0) {
            timer = setTimeout(() => {
                setShowSlider(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [sliderValue]);

    return (
        <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-500 flex flex-col items-center justify-center">
            <div className="fixed top-[10%] w-3/5 bg-black py-5 px-10 z-10">
                <div className="relative text-3xl font-quicksand flex m-auto">
                    <Dropdown />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="relative text-3xl font-quicksand rounded-full py-4 pl-10 pr-16 bg-gray-900 text-black w-3/5 mr-4"
                    />
                    <FaSearch className="relative right-20 top-10 transform -translate-y-1/2 text-gray-700 text-4xl" />

                    <div>
                        {showSlider ? (
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="80"
                                    step="10"
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                    className="relative top-3 w-[130px] "
                                />
                                <span className="text-white text-quicksand text-2xl"> {sliderValue}km</span>
                            </div>
                        ) : (
                            <div className="flex items-center mt-2 ">
                                <FaMapMarked className="text-white text-5xl" onClick={handleMapIconClick} />
                                <span className="text-white text-3xl ml-2">Near Me</span>
                            </div>
                        )}
                    </div>
                    <FaUserCircle className="absolute text-white text-6xl ml-2 cursor-pointer right-0 top-0 " />

                </div>
            </div>
            {/* <ProviderCards /> */}
            <UserData />
        </div>
    );
};

export default Home;
