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
    img: "assets/home/amenties/park.png",
    name: "10 minutes - Upcoming Metro Station",
  },
  {
    img: "assets/home/amenties/park.png",
    name: "10 minutes - Upcoming Metro Station",
  },
];

const LocationMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <section className="w-[100vw] z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_60.58%,rgba(0,0,0,0.71)_100%),url('/assets/home/locationMap/location.jpg')] relative overflow-hidden bg-cover h-screen  bg-center bg-no-repeat ">
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
      <div className="container bottom-[21px] absolute flex justify-center">
        <div className="bg-[white]  xl:w-[75%] w-[92%] mx-0 my-auto xl:px-[50px] p-[20px] xl:py-0  flex justify-between flex-wrap items-center">
          {/* Swiper + Arrows Section */}
          <div className="relative xl:basis-[70%] xl:mb-0 mb-[1.5rem] basis-[100%] flex items-center  overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation={true} // Enable Swiper's default arrows
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              className="w-full custom-swiper"
            >
              {data.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!flex !items-center !justify-center"
                >
                  <div className="flex items-center justify-center xl:p-4 px-[60px] bg-white">
                    <img
                      src={item.img}
                      alt={item.name}
                      className=" xl:h-[60px] h-[40px] object-contain"
                    />
                    <p className="xl:text-sm text-[13px] font-medium ml-[1.5rem] xl:ml-[3rem] text-gray-700">
                      {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Button Section */}
          <div className="xl:basis-[25%] basis-[100%] flex justify-center">
            <button
              onClick={handleOpen}
              className="text-[white] cursor-pointer text-[12px] custom-bg-green px-[20px] py-[10px] "
            >
              View Location Map
            </button>
          </div>
          {/* Modal Overlay */}
          {isOpen && (
            <div className="fixed inset-0 z-[999999999] bg-black bg-opacity-80  flex items-center justify-center p-4">
              {/* Close Icon */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 cursor-pointer text-white text-xl"
              >
                <RxCross1 />
              </button>

              {/* Image */}
              <img
                src="/assets/home/floor-1.png"
                alt="Location Map"
                className="max-w-full h-[300px] max-h-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
