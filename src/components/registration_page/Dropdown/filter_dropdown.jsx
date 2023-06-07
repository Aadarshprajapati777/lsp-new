import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown2({ onSelectFilter }) {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const filters = [{
        "occupation": "Electrician"
    },
    {
        "occupation": "Carpenter"

    }, {
        "occupation": "Car Wash"
    }]
    const handleFilterClick = (item) => {
        setSelectedFilter(item.occupation);
        setIsOpen(false);
        onSelectFilter(item.occupation); // Pass the selected filter to the parent component

    };
    return (
        <div className="relative flex flex-col w-[340px] rounded-lg">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-[#000000] opacity-70 p-1.5 w-[200px] h-[45px] text-white mt-1 flex items-center justify-between font-bold font-quicksand text-sm rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                {selectedFilter || 'Occupation'}
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-[30px] text-white" />
                ) : (
                    <AiOutlineCaretUp />
                )}
            </button>
            {isOpen && (
                <div className="bg-[#000000] opacity-90 font-quicksand absolute mt-14 flex-col items-start rounded-lg p-2 w-[200px]">
                    {filters.map((item) => (
                        <div
                            key={item.id}
                            className="flex w-full p-2 justify-between hover:bg-[#443c3c] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-[#ffffff] duration-200 border-l-8"
                            onClick={() => handleFilterClick(item)}
                        >
                            <h1 className="text-sm font-quicksand text-white ">{item.occupation}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown2;