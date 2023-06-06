import React, { useState } from "react";
import registrationbg from "../../assets/regbg.jpeg";
import Dropdown2 from "./Dropdown/filter_dropdown";
import ImageUpload from "./ImageUpload/ImageUpload";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../../backend/firebase/firebase_config";
import { useNavigate } from "react-router-dom";

const firebaseStore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

function Registration() {
  const navigate = useNavigate();

  // const createuser = () => {
  //   createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then(alert("User Created Successfully"))
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // };
  const createuser = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        alert("User Created Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const [data, setData] = useState({
    fullName: "",
    address: "",
    contactNumber: "",
    password: "",
    profession: "",
    email: "",
    confirmPassword: "",
    pic: "",
  });

  const writeUserData = async (data) => {
    try {
      const imageRef = ref(
        storage,
        `uploads/images/${Date.now()}-${data.pic.name}`
      );
      await uploadBytes(imageRef, data.pic);

      await addDoc(collection(firebaseStore, "users"), {
        fullName: data.fullName,
        phoneNumber: data.contactNumber,
        address: data.address,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        profession: data.profession,
        imageUrl: imageRef.fullPath,
      });

      console.log("User data written successfully");
    } catch (error) {
      console.error(error);
    }
  };

  let name, value;

  const handleRegistrationFormInput = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const postregistrationData = async (e) => {
    e.preventDefault();

    if (
      !data.fullName ||
      !data.contactNumber ||
      !data.address ||
      !data.password ||
      !data.confirmPassword ||
      !data.profession ||
      !data.email ||
      !data.pic
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const {
      fullName,
      phoneNumber,
      address,
      email,
      password,
      confirmPassword,
      profession,
    } = data;

    const res = await fetch(
      "https://mobile-app-c8db0-default-rtdb.firebaseio.com/registration.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          address,
          email,
          password,
          confirmPassword,
          profession,
        }),
      }
    );

    if (res) {
      setData({
        fullName: "",

        phoneNumber: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
        profession: "",
      });
      alert("sign up Successful");
      writeUserData(data);
      createuser();
      navigate("/login");
    } else {
      alert("oops! something went wrong, please try again");
    }
  };

  const [locationRequired, setLocationRequired] = useState(false);

  const handleLocationChange = () => {
    setLocationRequired(!locationRequired);
  };

  // const handleImageChange = (e) => {
  //   setData({ ...data, pic: e.target.files[0] });
  // };
  const onSelectImage = (file) => {
    setData({ ...data, pic: file });
  };

  const onSelectFilter = (filter) => {
    setData({ ...data, profession: filter });
  };

  return (
    <div className="main_body relative h-screen w-screen">
      <div className="brightness-75" style={{ zIndex: 1 }}></div>
      <div
        className="brightness-70 absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${registrationbg})`, zIndex: 0 }}
      ></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex h-[670px] w-[750px] flex-col  rounded-3xl bg-[#F1D6AC] bg-opacity-80 p-8 shadow-lg">
          <h1 className="flex items-center justify-center font-quicksand text-4xl font-bold text-black">
            Sign Up
          </h1>
          <div className="mx-auto my-3 w-20 rounded-lg border-4 border-black" />
          <div className="flex">
            <div className="mx-auto ml-0 mt-3 flex flex-col justify-around">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                autoComplete="off"
                className=" bg-transparent my-1 h-[50px] w-[325px] rounded-lg border-b border-white bg-[#000000] px-4 py-5 font-quicksand text-sm text-white opacity-70 outline-none transition-transform duration-300 focus:scale-105 focus:outline-none"
                onChange={handleRegistrationFormInput}
                value={data.fullName}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className=" bg-transparent my-1 h-[50px] w-[325px] rounded-lg border-b border-white bg-[#000000] px-4 py-5 font-quicksand text-sm text-white opacity-70 outline-none transition-transform duration-300 focus:scale-105 focus:outline-none"
                onChange={handleRegistrationFormInput}
                value={data.email}
              />
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                className=" bg-transparent my-1 h-[50px] w-[325px] rounded-lg border-b border-white bg-[#000000] px-4 py-5 font-quicksand text-sm text-white opacity-70 outline-none transition-transform duration-300 focus:scale-105 focus:outline-none"
                onChange={handleRegistrationFormInput}
                value={data.password}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="bg-transparent my-1 h-[50px] w-[325px] rounded-lg border-b border-white bg-[#000000] px-4 py-5 font-quicksand text-sm text-white  opacity-70 outline-none transition-transform duration-300 focus:scale-105 focus:outline-none"
                onChange={handleRegistrationFormInput}
                value={data.confirmPassword}
                required
              />
              <div className="flex">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="bg-transparent my-1 h-[50px] w-[155px] rounded-lg border-b border-white bg-[#000000] px-4 py-5 font-quicksand text-sm text-white opacity-70 outline-none transition-transform duration-300 focus:scale-105 focus:outline-none"
                  onChange={handleRegistrationFormInput}
                  value={data.address}
                  required
                />
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Phone Number"
                  className="bg-transparent my-1 ml-2 h-[50px] w-[163px] rounded-lg border-b border-white bg-[#000000] px-4 py-5 font-quicksand text-sm text-white opacity-70 outline-none transition-transform duration-300 focus:scale-105 focus:outline-none"
                  onChange={handleRegistrationFormInput}
                  value={data.contactNumber}
                  required
                />
              </div>

              <Dropdown2 onSelectFilter={onSelectFilter} />
              {/* <div className="flex">
                <select
                  name="profession"
                  onChange={handleRegistrationFormInput}
                  value={data.profession}
                  required
                >
                  <option value="">Select Profession</option>
                  <option value="accountant">Accountant</option>
                  <option value="architect">Architect</option>
                  <option value="babysitter">Babysitter</option>
                </select>
              </div> */}

              <div className="my-4 mt-6 flex items-center">
                <input
                  type="checkbox"
                  id="locationCheckbox"
                  className="form-checkbox h-10 w-5  rounded-md bg-[#000000] text-[#000000] transition duration-200 ease-in-out "
                  checked={locationRequired}
                  onChange={handleLocationChange}
                />
                <label
                  htmlFor="locationCheckbox"
                  className="text-md ml-2  font-quicksand font-bold text-black"
                >
                  This product requires your location
                </label>
              </div>
            </div>
            <ImageUpload onSelectImage={onSelectImage} />
            {/* <div>
              <h2>Upload image</h2>
              <input
                type="file"
                name="profileImage"
                onChange={(e) => {
                  setData({ ...data, pic: e.target.files[0] });
                }}
              />
            </div> */}
          </div>
          <button
            className="mx-auto mt-3 h-[50px] w-2/5 rounded-md bg-secondary font-quicksand text-2xl font-bold text-white opacity-80 hover:bg-[#313131]"
            onClick={postregistrationData}
          >
            Register
          </button>
          <div className="mt-4 flex w-full items-center justify-center">
            <p className="text-md font-quicksand text-black">
              Already have an account?{" "}
              <span
                className="cursor-pointer font-semibold underline underline-offset-2"
                onClick={() => navigate("/login")}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
