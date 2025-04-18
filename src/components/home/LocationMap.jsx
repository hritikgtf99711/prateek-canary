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
    <section
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 30.58%),linear-gradient(to bottom, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 20.58%),url(${
          import.meta.env.VITE_BASE_URL
        }/assets/home/locationMap/location.jpg)`,
      }}
      className="w-[100vw] z-[99999]  relative overflow-hidden bg-cover xl:h-[87vh] h-screen  bg-center bg-no-repeat "
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
      <div className="w-full bottom-[30px] absolute flex justify-center">
        <div className="bg-[white] 2xl:w-[58%] xl:w-[60%] w-[92%] mx-0 my-auto xl:px-[35px] p-[20px] xl:py-0  flex justify-between flex-wrap items-center">
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
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
              className="fixed inset-0 z-[999999999]  bg-opacity-80  flex items-center justify-center p-4"
            >
              <div
                style={{ backgroundColor: "rgba(53, 84, 61, 0.93)" }}
                className="xl:w-[800px] min-w-[85%] p-[30px] text-white  relative text-center tracking-[1.5px] font-playfair uppercase "
              >
                <h2 className="my-[25px]">Have Questions ? Ask Away!</h2>
                <form
                  action="#"
                  className="flex flex-wrap  w-full mx-0 my-auto"
                >
                  <div className="flex poppins-regular p flex-wrap basis-[100%] justify-between items-center">
                    <input
                      type="text"
                      className="border-[1px] border-solid placeholder:text-left border-[white] basis-[100%] inline-block xl:my-0 my-[24px]  xl:basis-[31%] px-[10px] py-[8px] placeholder:text-[13px] placeholder:text-white"
                      name="name"
                      placeholder="ENTER NAME"
                    />
                    <input
                      type="email"
                      className="border-[1px] border-solid border-[white] placeholder:text-left basis-[100%] inline-block xl:mb-0 mb-[24px] xl:basis-[31%] px-[10px] py-[8px] placeholder:text-[13px] placeholder:text-white"
                      name="email"
                      placeholder="ENTER EMAIL"
                    />
                    <input
                      type="tel"
                      className="border-[1px] border-solid border-[white] placeholder:text-left  xl:basis-[31%] basis-[100%] px-[10px] py-[8px] placeholder:text-[13px] placeholder:text-white"
                      name="phonenumber"
                      placeholder="ENTER NUMBER"
                    />
                  </div>
                  <textarea
                    className="basis-[100%] mt-[24px] placeholder:text-[13px] placeholder:text-left font-poppins placeholder:text-white border-[1px] border-solid border-[white] px-[10px] py-[10px] "
                    name="message"
                    cols={54}
                    placeholder="ENTER MESSAGE"
                    id="msg"
                  ></textarea>
                  <div className="flex basis-[100%] mt-[35px] justify-center">
                    {" "}
                    <button className="bg-[white] !font-[500] tracking-[1px] font-poppins xl:w-[20%] w-[132px] text-center border-none text-[11px]  outline-none custom-green px-[20px] py-[10px]">
                      Submit now
                    </button>
                  </div>{" "}
                </form>
                {/* Close Icon */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 cursor-pointer  !text-white text-xl"
                >
                  <RxCross1 />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
