import CommonHeading from "../common/CommonHeading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const data = [
  {
    img: "assets/home/locationMap/race.png",
    name: "BIC F1 track in close proximity",
  },
  {
    img: "assets/home/locationMap/airport.png",
    name: "15 mins from upcoming Jewar Airport",
  },
  {
    img: "assets/home/locationMap/junction.png",
    name: "Connected through 3 expressways",
  },
  {
    img: "assets/home/locationMap/subway.png",
    name: "Close to Sec-148 Metro",
  },
];

const LocationMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
     <>
    <section
      id="location"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 30.58%),linear-gradient(to bottom, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 20.58%),url(${
          import.meta.env.VITE_BASE_URL
        }/assets/home/locationMap/location.jpg)`,
      }}
      className="w-[100vw] z-[99]  relative overflow-hidden bg-cover xl:h-[87vh] h-screen  bg-center bg-no-repeat "
    >
      <h2
        style={{
          color: "rgba(255, 255, 255, 0.5)",
        }}
        className={`custom-sub-heading-color xl:hidden text-center poppins-regular  text-[18px] pt-[40px]  leading-[41px] tracking-[5px] uppercase `}
      >
        LOCATION MAP
      </h2>
      <CommonHeading
        text={"LOCATION MAP"}
        top={"top-[85%]"}
        textColor={"rgba(255, 255, 255, 0.5)"}
      />
      <h2 className="text-[white]  xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] text-[19px] pt-[30px] uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400 leading-[30px]">
        <span className="xl:block hidden">
          Embrace the Perfect Location Advantage with Seamless
        </span>
        <span className="xl:block hidden">
          {" "}
          Connectivity, Urban Convenience, and Serene Surroundings.{" "}
        </span>
        <span className="xl:hidden block text-[13px] leading-[23px] px-[10px]">
          {" "}
          Embrace the Perfect Location Advantage with Seamless Connectivity,
          Urban Convenience, and Serene Surroundings.{" "}
        </span>{" "}
      </h2>
      <div className="top-[50%] lg:right-[60px] right-[20px] absolute translate-y-[-50%] ">
        <div className="bg-[white] py-[40px] inline-block mx-0 my-auto px-[50px] ">
          {/* Swiper + Arrows Section */}
          <div className="relative   flex-col xl:mb-0 mb-[1.5rem] basis-[100%] flex   overflow-hidden">
              {  data.map((item, idx) => (
                  <div className="flex place-items-center mb-[25px] bg-white">
                    <img
                      src={item.img}
                      alt={item.name}
                      className=" xl:h-[35px] h-[35px] object-contain"
                    />
                    <p className="xl:text-sm text-[13px] font-playfair  font-medium ml-[1.5rem] xl:ml-[3rem] text-gray-700">
                      {item.name}
                    </p>
                  </div>))}
                
          </div>

          {/* Button Section */}
          <div className="xl:basis-[25%] mt-[40px] basis-[100%]">
            <button
              onClick={handleOpen}
              className="text-[white] cursor-pointer text-[14px] custom-bg-green px-[20px] py-[10px] "
            >
              View Location Map
            </button>
          </div>
          {/* Modal Overlay */}
     
        </div>
      </div>
     
    </section>
   
         {isOpen && (
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
              className="fixed inset-0 z-[999999999]  bg-opacity-80  flex items-center justify-center p-4"
            >
              <div
                // style={{ backgroundColor: "rgba(53, 84, 61, 0.93)" }}
                className="p-[30px] text-white  relative text-center tracking-[1.5px] font-playfair uppercase "
              >
                <img
                  src="assets/home/map.png"
                  className="h-[auto] lg:w-[60vw] w-[100vw] object-contain"
                  alt="map"
                />
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 cursor-pointer   text-xl"
                >
                  <RxCross1 className="text-black" />
                </button>{" "}
              </div>

             
            </div>
          )}</>
  );
};

export default LocationMap;
