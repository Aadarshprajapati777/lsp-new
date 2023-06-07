import React, { useState, useEffect } from "react";
import Dropdown from "./filter_dropdown/filter_dropdown";
import ProviderCards from "./provider_cards/provider_cards";
import UserData from "../../backend/firebase/user_data";
import "./home.css";



import { FaEnvelope, FaMapMarked, FaSearch, FaUser, FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function ScrollContainer({ children }) {
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrollingDown(currentScrollPos > prevScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-700 to-gray-800 py-5 px-10 z-10 transition-all duration-300 ${isScrollingDown ? 'opacity-100' : 'opacity-100 '
                }`}
        >
            {children}
        </div>
    );
}

function Home() {
    const [showSlider, setShowSlider] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

  const [selectedProfession, setSelectedProfession] = useState("");
  const[search, setSearch] = useState("");
  const [showUser, setShowUser] = useState(false);




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





    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     alert("you searched for " + query.search);
    // };

    const handleSearchChange = (e) => {
        e.preventDefault();

        if (e.target.value.length > 0) {
        setSearch(e.target.value);

        } else {
            setSearch("");
            alert("Please enter a valid search query");

        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSelectedProfession(search); 
        setShowUser(true);
        // alert("you searched for " + search);
    };



    const onSelectProfession = (profession) => {
        setSelectedProfession(profession);
        // alert("you selected " + profession);
        setShowUser(true);    
    };
    


   return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-500 min-h-screen flex flex-col items-center">
            <ScrollContainer>
                <div className="relative text-xl font-quicksand flex m-auto">
                    <Dropdown onSelectProfession={onSelectProfession} />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="relative text-xl font-quicksand rounded-full py-2 pl-10 pr-4 bg-gray-900 text-black w-3/5 mr-4"
                        onChange={handleSearchChange}
                    />
                    <FaSearch className="relative right-[55px] top-[25px] transform -translate-y-1/2 text-gray-700 text-2xl"  onClick={handleSearch} />
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
                                    className="relative top-3 w-[140px]"
                                />
                                <span className="text-white text-quicksand text-xl"> {sliderValue}km</span>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <FaMapMarked className="text-white text-4xl" onClick={handleMapIconClick} />
                                <span className="text-white text-xl ml-2">Near Me</span>
                            </div>
                        )}
                    </div>
                    <FaUserCircle className="absolute text-white text-5xl ml-2 cursor-pointer right-10 top-0" />
                </div>
            </ScrollContainer>
            <div className="h-30" />
            <div className="flex flex-wrap justify-center mt-48">
                <div className="w-full md:w-auto md:flex-grow md:flex-shrink-0 p-2">
                    {/* <ProviderCards /> */}
                    {showUser ? (
          selectedProfession !== "All" ? (
            <UserData
              profession={selectedProfession}
   
            />
          ) : (
            <UserData
     
            />
          )
        ) : (
          <UserData
          />
        )}
          
          
    
          </div>
               
            </div>
        </div>
    );
}

export default Home;