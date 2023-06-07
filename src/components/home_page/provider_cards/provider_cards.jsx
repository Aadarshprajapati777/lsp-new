import React from "react"

import { FaEnvelope, FaMapMarked, FaSearch } from "react-icons/fa";
import user_profile_image from "../../../assets/test_image.jpeg";
import { FaPhone } from "react-icons/fa";

function ProviderCards(props) {
    return (
        <div className="group flex flex-col items-center">
            <div className="relative ml-10 mt-30 flex w-[500px] h-[300px] font-quicksand bg-secondary rounded-3xl group-hover:h-[400px] duration-300 text-white text-3xl">
                <div className="expert_image absolute top-[-30%] w-[225px] h-[225px] bg-primary left-[26%] rounded-3xl">
                    <img
                        src={props.profile_image}
                        className="w-full h-full object-cover rounded-3xl"
                        alt="User Profile"
                    />
                </div>
                <div className="justify-center flex flex-col items-center absolute bottom-10 left-0 py-4 px-6 w-full group-hover:opacity-0 duration-300">
                    <h2 className="text-white font-bold">{props.name}</h2>
                    <p className="text-gray-300 text-2xl">{props.profession}</p>
                </div>
                <div className="justify-center flex flex-col items-center absolute bottom-10 left-0 py-4 px-6 w-full opacity-0 group-hover:opacity-100 duration-300">
                    <h2 className="text-white font-bold">{props.name}</h2>
                    <p className="text-gray-300 text-2xl">{props.profession}</p>
                    <div className="border-4 w-40 border-white inline-block mx-auto my-7"></div>
                    <div className="flex items-center">
                        <FaPhone className="mr-2" />
                        <p className="text-gray-300 text-2xl">{props.contact}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <FaEnvelope className="mr-2" />
                        <p className="text-gray-300 text-2xl"></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProviderCards;