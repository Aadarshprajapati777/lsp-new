import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
function Dropdown() {
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
    };
    return (
        <div className="relative flex flex-col items-center w-[200px] rounded-lg">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-[#ffffff] h-12 w-4/5 flex items-center ml-2 justify-between font-bold font-quicksand text-lg rounded-lg tracking-wider border-4 border-transparent active:border-gray-800 duration-300 active:text-gray-800"
            >
                {selectedFilter || 'Filter'}
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                ) : (
                    <AiOutlineCaretUp />
                )}
            </button>
            {isOpen && (
                <div className="bg-[#ffffff] font-quicksand absolute top-14 flex-col items-start rounded-lg p-2 w-4/5">
                    {filters.map((item) => (
                        <div
                            key={item.id}
                            className="flex w-full p-2 justify-between hover:bg-[#b4b3b3] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-[#000000] duration-200 border-l-8"
                            onClick={() => handleFilterClick(item)}
                        >
                            <h1 className="text-lg font-quicksand">{item.occupation}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;