import React from "react";
import { FaHammer, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../../assets/landingbg.webp";
import wood from "../../assets/wood.jpg";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex h-screen flex-col">
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 h-full bg-secondary bg-opacity-50">
          <nav className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center font-quicksand text-xl font-bold text-white">
              Hammerise
              <FaHammer className="ml-2" />
            </div>
            <div className="space-x-4">
              <a href="#about" className="text-white hover:text-gray-200">
                About
              </a>
              <a href="#contacts" className="text-white hover:text-gray-200">
                Contacts
              </a>
            </div>
          </nav>

          <div className="flex h-full flex-col items-center justify-center text-center">
            <h1 className="mb-8 font-quicksand text-8xl font-bold text-white">
              Welcome to Hammerise!
            </h1>
            <p className="mb-12 font-quicksand text-3xl text-gray-300">
              Bridge the Gap between Service Provider and Consumer
            </p>
            <p className="mb-12 w-[1000px] font-quicksand text-lg text-gray-300">
              Welcome to Local Service Provider, your go-to platform for
              connecting with skilled professionals in your area. Whether you
              need a plumber, electrician, tutor, or any other service provider,
              we've got you covered. Our platform simplifies the process of
              finding reliable experts, ensuring you get quality services
              without the hassle. With a seamless search and filter system, you
              can easily locate the right person for the job. Empowering
              individuals and organizations, we're here to bridge the gap
              between service providers and those in need. Experience
              convenience and excellence with Local Service Provider today.
            </p>
            <div className="flex items-center">
              <button
                className="hover:bg-blue-600  mr-4 rounded-full bg-[#f5722bee] px-20 py-5 font-quicksand text-3xl font-bold text-white hover:bg-[#ff8b4dee]"
                onClick={handleClick}
              >
                Get Started
              </button>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-full px-6 py-3 text-lg font-semibold text-white"
              ></a>
            </div>
          </div>

          {/* <div>
            <div
              id="about"
              className="mt-16 bg-primary"
              style={{
                backgroundImage: `url(${wood})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 1s ease-in-out",
              }}
            >
              <div className="h-full bg-secondary bg-opacity-50">
                <h2 className="mb-8 font-quicksand text-4xl font-bold text-white">
                  About
                </h2>
                <p className="font-quicksand text-lg text-gray-300">
                  At HandyHire, we believe in making quality services accessible
                  and affordable for everyone. We understand that finding
                  skilled professionals for your various needs can be a daunting
                  task, and that's why we've created a platform that simplifies
                  the process and connects you with reliable service providers
                  near you. Our platform is designed to bridge the gap between
                  service providers and consumers, and empower both parties by
                  providing a seamless and efficient way to connect. With our
                  easy-to-use interface, you can easily search and filter
                  service providers based on your specific requirements and
                  location, making it easier than ever to find the right person
                  for the job.
                </p>
                <div id="contacts" className="mt-16">
                  <h2 className="mb-8 font-quicksand text-4xl font-bold text-white">
                    Contact
                  </h2>
                  <p className="font-quicksand text-lg text-gray-300">
                    Email: hammarise@example.com
                    <br />
                    Phone: 123-456-7890
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
