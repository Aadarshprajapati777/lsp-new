import React from "react"

import { FaEnvelope, FaMapMarked, FaSearch } from "react-icons/fa";
import user_profile_image from "../../../assets/test_image.jpeg";
import { FaPhone } from "react-icons/fa";


function ProviderCards(props) {
    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full md:w-auto md:flex-grow md:flex-shrink-0 p-2">
                <div className="group flex flex-col items-center ">
                    <div className="relative flex w-[300px] h-[250px] font-quicksand bg-[#1a1a1a] rounded-xl group-hover:h-[325px] duration-300 text-white text-3xl">
                        <div className="expert_image absolute top-[-30%] w-[150px] h-[150px] left-[24%] bg-primary rounded-3xl">
                            <img
                                src={props.profile_image}
                                className="w-full h-full object-cover rounded-3xl"
                                alt="User Profile"
                            />
                        </div>
                        <div className="justify-center flex flex-col items-center absolute bottom-14 left-0 py-4 px-6 w-full group-hover:opacity-0 duration-300">
                            <h2 className="text-white font-bold text-2xl">{props.name}</h2>
                            <p className="text-gray-300 text-xl">{props.profession}</p>
                        </div>
                        <div className="justify-center flex flex-col items-center absolute bottom-10 left-0 py-4 px-6 w-full opacity-0 group-hover:opacity-100 duration-300">
                            <h2 className="text-white font-bold text-xl">{props.name}</h2>
                            <p className="text-gray-300 text-lg">{props.profession}</p>
                            <div className="border-2     w-40 border-white inline-block mx-auto my-7"></div>
                            <div className="flex items-center">
                                <FaPhone className="mr-2 text-lg" />
                                <p className="text-gray-300 text-lg">{props.contact}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <FaEnvelope className="mr-2 text-lg" />
                                <p className="text-gray-300 text-lg">{props.profession}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProviderCards   ;    