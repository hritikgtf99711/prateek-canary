import CommonHeading from "../common/CommonHeading";
import "swiper/css/navigation";
import "swiper/css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";

const data = [
  {
    img: "/assets/home/locationMap/racing-car-white.png",

    name: "BIC F1 track in close proximity",
  },
  {
    img: "/assets/home/locationMap/airport-white.png",

    name: "15 mins from upcoming The Jewar Airport",
  },
  {
    img: "/assets/home/locationMap/junction-white.png",

    name: "Connected through 3 expressways",
  },
  {
    img: "/assets/home/locationMap/subway-white.png",

    name: "Close to Sec-148 Metro",
  },
];

const LocationMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        id="location"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 75%),linear-gradient(to bottom, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 39%),url(/assets/home/locationMap/location.jpg)`,
        }}
        className="w-[100vw] z-[99]  relative overflow-hidden bg-cover h-[75vh] xl:h-[87vh]   bg-center bg-no-repeat "
      >
        <h2
          className={` xl:hidden text-center poppins-regular text-white text-[18px] pt-[40px]  leading-[41px] tracking-[5px] uppercase `}
        >
          LOCATION MAP
        </h2>
        <CommonHeading
          text={"LOCATION MAP"}
          top={"top-[85%]"}
          textColor={"white"}
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
        <div className="hidden xl:flex flex-col flex-wrap items-center  w-[100%] mt-[50px] xl:mt-[80px] justify-center">
          <div className="flex justify-between xl:w-[64%] 2xl:w-[66%]">
            {" "}
            {data.map((item, idx) => (
              <div
                key={item.name}
                className="flex justify-center w-[180px]  rounded-[20px] xl:p-[20px] h-[150px] !text-white items-center flex-col bg-[#295245e3]"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.img}
                  alt={item.name}
                  className=" xl:h-[55px] h-[35px] object-contain"
                />
                <p className="xl:text-sm poppins-regular text-[13px] font-playfair  text-center font-medium text-white mt-[14px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[50px] basis-[100%]">
            <button
              onClick={handleOpen}
              className="text-[white] cursor-pointer text-[14px] custom-bg-green px-[20px] py-[10px] "
            >
              View Location Map
            </button>
          </div>
        </div>
        {/* for mobile only */}
        <div className="2xl:top-[50%] xl:hidden block mt-[42px] right-[10%] xl:w-auto w-[80%] top-[57%] lg:right-[60px] xl:right-[20px] absolute translate-y-[-50%] ">
          <div className="bg-[white] xl:w-auto w-full px-[22px] xl:p-[22px] lgmac:py-[40px] lgmac:px-[50px] py-[40px] inline-block mx-0 my-auto ">
            <div className="relative  flex-col xl:mb-0 mb-[1.5rem] basis-[100%] flex   overflow-hidden">
              {data.map((item, idx) => (
                <div className="flex place-items-center mb-[25px] bg-white">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.img}
                    alt={item.name}
                    className="invert-[100%] xl:h-[35px] h-[35px] object-contain"
                  />
                  <p className="xl:text-sm text-[13px] font-playfair  font-medium ml-[1.5rem] xl:ml-[3rem] text-gray-700">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="xl:basis-[25%] text-center lg:mt-0 2xl:mt-[20px] basis-[100%]">
              <button
                onClick={handleOpen}
                className="text-[white] cursor-pointer text-[14px] custom-bg-green px-[20px] py-[10px] "
              >
                View Location Map
              </button>
            </div>
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
              loading="lazy"
              decoding="async"
              src="/assets/home/map.webp"
              className="h-[auto] xl:w-[40vw] lg:w-[60vw] w-[100vw] object-contain"
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
      )}
    </>
  );
};

export default LocationMap;
