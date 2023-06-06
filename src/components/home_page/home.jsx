

// import React, { useState, useEffect } from "react";
// import Dropdown from "./filter_dropdown/filter_dropdown";
// import ProviderCards from "./provider_cards/provider_cards";
// import "./home.css";
// import test_image from "./test_image.jpeg"
// import { FaEdit } from 'react-icons/fa';
// import UserData from "../../backend/firebase/user_data";
// import { FaEnvelope, FaMapMarked, FaSearch, FaUser, FaUserCircle, FaArrowLeft } from "react-icons/fa";
// import { FaPhone, FaSignOutAlt } from "react-icons/fa";


// function ScrollContainer({ children }) {
//     const [isScrollingDown, setIsScrollingDown] = useState(false);

//     useEffect(() => {
//         let prevScrollPos = window.pageYOffset;

//         const handleScroll = () => {
//             const currentScrollPos = window.pageYOffset;
//             setIsScrollingDown(currentScrollPos > prevScrollPos);
//             prevScrollPos = currentScrollPos;
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className={`fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-700 to-gray-800 py-5 px-10 z-10 transition-all duration-300 ${isScrollingDown ? 'opacity-100' : 'opacity-100 '
//                 }`}
//         >
//             {children}
//         </div>
//     );
// }

// function Home() {
//     const [showSlider, setShowSlider] = useState(false);
//     const [sliderValue, setSliderValue] = useState(0);
//     const [showMenu, setShowMenu] = useState(false);
//     const [isNameEditing, setIsNameEditing] = useState(false);
//     const [name, setName] = useState('Full Name');
//     const [selectedProfession, setSelectedProfession] = useState("");
//     const [search, setSearch] = useState("");
//     const [showUser, setShowUser] = useState(false);

//     const handleNameEdit = () => {
//         setIsNameEditing(true);
//     };

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleNameKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             setIsNameEditing(false);
//         }
//     };

//     const [isBioEditing, setIsBioEditing] = useState(false);
//     const [bio, setBio] = useState('Mai to party kar rahi thee maze kar rahi thee mujhe bandar ne');

//     const handleBioEdit = () => {
//         setIsBioEditing(true);
//     };

//     const handleBioChange = (e) => {
//         setBio(e.target.value);
//     };

//     const handleBioKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             setIsBioEditing(false);
//         }
//     };


//     const handleMapIconClick = () => {
//         setShowSlider(true);
//     };

//     const handleSliderChange = (e) => {
//         setSliderValue(e.target.value);
//     };

//     const handleMenuClick = () => {
//         setShowMenu(!showMenu);
//     };

//     const handleBackClick = () => {
//         setShowMenu(false);
//     };
//     useEffect(() => {
//         let timer;
//         if (sliderValue > 0) {
//             timer = setTimeout(() => {
//                 setShowSlider(false);
//             }, 5000);
//         }

//         return () => {
//             clearTimeout(timer);
//         };
//     }, [sliderValue]);
//     const handleSearchChange = (e) => {
//         e.preventDefault();

//         if (e.target.value.length > 0) {
//             setSearch(e.target.value);

//         } else {
//             setSearch("");
//             alert("Please enter a valid search query");

//         }
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         setSelectedProfession(search);
//         setShowUser(true);
//         // alert("you searched for " + search);
//     };



//     const onSelectProfession = (profession) => {
//         setSelectedProfession(profession);
//         // alert("you selected " + profession);
//         setShowUser(true);
//     };



//     return (<div className="bg-gradient-to-r from-gray-900 to-gray-500 min-h-screen flex flex-col items-center">
//         <ScrollContainer>
//             <div className="relative text-xl font-quicksand flex m-auto">
//                 <Dropdown onSelectProfession={onSelectProfession} />
//                 <input
//                     type="text"
//                     placeholder="Search here..."
//                     className="relative text-xl font-quicksand rounded-full py-2 pl-10 pr-4 bg-gray-900 text-black w-3/5 mr-4"
//                     onChange={handleSearchChange}
//                 />
//                 <FaSearch className="relative right-[55px] top-[25px] transform -translate-y-1/2 text-gray-700 text-2xl" onClick={handleSearch} />
//                 <div>
//                     {showSlider ? (
//                         <div>
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max="80"
//                                 step="10"
//                                 value={sliderValue}
//                                 onChange={handleSliderChange}
//                                 className="relative top-3 w-[140px]"
//                             />
//                             <span className="text-white text-quicksand text-xl"> {sliderValue}km</span>
//                         </div>
//                     ) : (
//                         <div className="flex items-center">
//                             <FaMapMarked className="text-white text-4xl" onClick={handleMapIconClick} />
//                             <span className="text-white text-xl ml-2 mt-2">Near Me</span>
//                         </div>
//                     )}
//                 </div>
//                 <FaUserCircle className="absolute text-white text-5xl ml-2 cursor-pointer right-10 top-0" onClick={handleMenuClick} />
//             </div>
//         </ScrollContainer>
//         <div className={`fixed top-0 right-0 w-96 h-full bg-secondary opacity-95 rounded-lg z-50 transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
//             <div className="flex justify-between items-center p-4">
//                 <FaArrowLeft className="text-white text-2xl cursor-pointer" onClick={handleBackClick} />
//             </div>
//             <div className="flex flex-col items-center justify-center p-4">
//                 <div className="w-48 h-48 rounded-full overflow-hidden">
//                     <img src={test_image} alt="User" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex items-center mt-4">
//                     {isNameEditing ? (
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={handleNameChange}
//                             onKeyPress={handleNameKeyPress}
//                             className="text-white text-lg font-semibold bg-[#414141] opacity-95 font-quicksand bg-transparent border-b border-white focus:outline-none focus:border-gray-300"
//                         />
//                     ) : (
//                         <>
//                             <h3 className="text-white text-lg font-semibold font-quicksand">{name}</h3>
//                             <FaEdit className="ml-2 text-white cursor-pointer" onClick={handleNameEdit} />
//                         </>
//                     )}
//                 </div>
//                 <p className="text-gray-400 text-md mt-2 font-quicksand">Profession</p>
//                 <div className="flex flex-col items-start mt-8">
//                     <div className="flex items-start mt-4">
//                         {isBioEditing ? (
//                             <textarea
//                                 value={bio}
//                                 onChange={handleBioChange}
//                                 onKeyPress={handleBioKeyPress}
//                                 className="text-white text-lg font-semibold bg-[#414141] opacity-95 font-quicksand bg-transparent border-b border-white focus:outline-none focus:border-gray-300"
//                             />
//                         ) : (
//                             <>
//                                 <h3 className="text-white text-lg font-semibold font-quicksand">Bio</h3>
//                                 <FaEdit className="ml-2 text-white cursor-pointer mt-1" onClick={handleBioEdit} />
//                             </>
//                         )}
//                     </div>
//                     {isBioEditing ? null : (
//                         <p className="text-gray-400 text-md mt-2 font-quicksand">{bio}</p>
//                     )}
//                 </div>
//                 <button className="mt-96 w-48 p-3 font-quicksand text-xl bg-[#e0dede] flex items-center justify-center font-bold rounded-lg hover:bg-primary">
//                     <FaSignOutAlt className="mr-2" />
//                     Log Out
//                 </button>
//             </div>
//         </div>
//         <div className="flex flex-wrap justify-center mt-48">
//             <div className="w-full md:w-auto md:flex-grow md:flex-shrink-0 p-2">
                
//             </div>
//         </div>
//     </div >
//     );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import Dropdown from "./filter_dropdown/filter_dropdown";
import ProviderCards from "./provider_cards/provider_cards";
import "./home.css";
import hammerise from "../../assets/hammerise.png"
import user_profile_image from "../../assets/userimage2.jpg"
import { FaEdit } from 'react-icons/fa';
import UserData from "../../backend/firebase/user_data";
import {useNavigate} from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../backend/firebase/firebase_config";


import { FaEnvelope, FaMapMarked, FaSearch, FaUser, FaUserCircle, FaArrowLeft } from "react-icons/fa";
import { FaPhone, FaSignOutAlt } from "react-icons/fa";
const auth = getAuth(app);


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
    const [showMenu, setShowMenu] = useState(false);
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [name, setName] = useState('Full Name');

  const [selectedProfession, setSelectedProfession] = useState("");
  const[search, setSearch] = useState("");
  const [showUser, setShowUser] = useState(false);


    const navigate = useNavigate();

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
    







    const handleNameEdit = () => {
        setIsNameEditing(true);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleNameKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsNameEditing(false);
        }
    };

    const [isBioEditing, setIsBioEditing] = useState(false);
    const [bio, setBio] = useState('Mai to party kar rahi thee maze kar rahi thee mujhe bandar ne');

    const handleBioEdit = () => {
        setIsBioEditing(true);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleBioKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsBioEditing(false);
        }
    };


    const handleMapIconClick = () => {
        setShowSlider(true);
    };

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleBackClick = () => {
        setShowMenu(false);
    };

    const handleLogout = () => {    
        auth.signOut().then(() => {
navigate("/login")     });

    };


    return (<div className="bg-gradient-to-r from-gray-900 to-gray-500 min-h-screen flex flex-col items-center">
        <ScrollContainer>
            <div className="relative text-xl font-quicksand flex m-auto">
                <Dropdown onSelectProfession={onSelectProfession} />    
                <input
                    type="text"
                    placeholder="Search here..."
                    className="relative text-xl font-quicksand rounded-full py-2 pl-10 pr-4 bg-gray-900 text-black w-3/5 mr-4"
                    onChange={handleSearchChange}   

                />
                <FaSearch className="relative right-[55px] top-[25px] transform -translate-y-1/2 text-gray-700 text-2xl hover:text-[#fffffff]" onClick={handleSearch} />
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
                            <span className="text-white text-xl ml-2 mt-2">Near Me</span>
                        </div>
                    )}
                </div>
                <FaUserCircle className="absolute text-white text-5xl ml-2 cursor-pointer right-10 top-0" onClick={handleMenuClick} />
            </div>
        </ScrollContainer>
        <div className={`fixed top-0 right-0 w-96 h-full bg-secondary opacity-95 rounded-lg z-50 transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4">
                <FaArrowLeft className="text-white text-2xl cursor-pointer" onClick={handleBackClick} />
            </div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img src={user_profile_image} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center mt-4">
                    {isNameEditing ? (
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            onKeyPress={handleNameKeyPress}
                            className="text-white text-lg font-semibold bg-[#414141] opacity-95 font-quicksand bg-transparent border-b border-white focus:outline-none focus:border-gray-300"
                        />
                    ) : (
                        <>
                            <h3 className="text-white text-lg font-semibold font-quicksand">{name}</h3>
                            <FaEdit className="ml-2 text-white cursor-pointer" onClick={handleNameEdit} />
                        </>
                    )}
                </div>
                <p className="text-gray-400 text-md mt-2 font-quicksand">Profession</p>
                <div className="flex flex-col items-start mt-8">
                    <div className="flex items-start mt-4">
                        {isBioEditing ? (
                            <textarea
                                value={bio}
                                onChange={handleBioChange}
                                onKeyPress={handleBioKeyPress}
                                className="text-white text-lg font-semibold bg-[#414141] opacity-95 font-quicksand bg-transparent border-b border-white focus:outline-none focus:border-gray-300"
                            />
                        ) : (
                            <>
                                <h3 className="text-white text-lg font-semibold font-quicksand">Bio</h3>
                                <FaEdit className="ml-2 text-white cursor-pointer mt-1" onClick={handleBioEdit} />
                            </>
                        )}
                    </div>
                    {isBioEditing ? null : (
                        <p className="text-gray-400 text-md mt-2 font-quicksand">{bio}</p>
                    )}
                </div>
                <button className="mt-96 w-48 p-3 font-quicksand text-xl bg-[#e0dede] flex items-center justify-center font-bold rounded-lg hover:bg-primary" onClick={handleLogout}>
                    <FaSignOutAlt className="mr-2" />
                    Log Out
                </button>
            </div>
        </div>
        <div className="flex flex-wrap justify-center mt-48">
            <div className="w-full md:w-auto md:flex-grow md:flex-shrink-0 p-2">
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
    </div >
    );
}

export default Home;
