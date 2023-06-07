import React, { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
// import { app } from "../../../backend/firebase/firebase_config";

const ImageUpload = ({onSelectImage})=> {
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
      onSelectImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const containerStyle = uploadedImage
    ? {
        backgroundImage: `url(${uploadedImage})`,
      }
    : {};



  return (
    <div className="flex flex-col mx-auto  mt-3  items-center">
      <div
        className="w-72 h-72 border-4 border-black rounded-2xl bg-cover bg-center bg-no-repeat"
        style={containerStyle}
      >
        {!uploadedImage && (
          <div className="flex items-center justify-center h-full object-cover">
            <AiOutlineCloudUpload size={100} color="black" />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          ref={fileInputRef}
        />
      </div>

      <button
        onClick={handleButtonClick}
        className="mt-3 px-8 py-2 bg-gray-200 border-none rounded-md cursor-pointer font-quicksand font-bold text-white text-lg bg-secondary opacity-80 hover:bg-secondary"
      >
        Upload Image
      </button>
    </div>
  );
}

export default ImageUpload;
