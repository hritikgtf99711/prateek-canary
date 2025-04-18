import CommonHeading from "../common/CommonHeading";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const initialData = [
  { img: "assets/home/amenties/park.png", name: "park" },
  { img: "assets/home/amenties/swimming-pool.png", name: "swimming pool" },
  { img: "assets/home/amenties/dumbbell.png", name: "gym" },
  { img: "assets/home/amenties/parking.png", name: "parking" },
  { img: "assets/home/amenties/running-track.png", name: "jogging track" },
];

const Amenties = () => {
  const [data, setData] = useState(initialData);

  const itemsRef = useRef([]);

  const containerRef = useRef(null);

  const goNext = () => {
    // Fade out first
    gsap.to(itemsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.in",
      onComplete: () => {
        // After fade-out completes, update data
        const newData = [...data];
        const first = newData.shift();
        newData.push(first);
        setData(newData); // triggers re-render

        // Then animate in
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      },
    });
  };

  const goPrev = () => {
    gsap.to(itemsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.in",
      onComplete: () => {
        const newData = [...data];
        const last = newData.pop();
        newData.unshift(last);
        setData(newData);

        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      },
    });
  };

  return (
    <section className="w-screen relative bg-top overflow-hidden bg-cover xl:h-[87vh] h-[80vh] bg-[url('/assets/home/amenties/amenties.png')] bg-center bg-no-repeat relative">
      <h2
        style={{
          color: "rgba(255, 255, 255, 0.5)",
        }}
        className={`custom-sub-heading-color text-center poppins-regular !font-[200] xl:text-[25px] text-[18px] py-[35px]  xl:py-[20px] xl:hidden leading-[41px] tracking-[5px] uppercase `}
      >
        AMENTIES
      </h2>
      <CommonHeading text={"AMENTIES"} textColor={"rgba(255, 255, 255, 0.5)"} />{" "}
      <h2 className="text-[white] text-[19px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] xl:pt-[30px] uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400 leading-[30px]">
        <span className="xl:block hidden">
          Elevate Your Lifestyle with Exquisite Amenities Designed for
        </span>{" "}
        <span className="xl:block hidden">Comfort, Leisure, and Luxury.</span>
        <span className="xl:hidden block text-[13px] leading-[23px] px-[10px]">
          Elevate Your Lifestyle with Exquisite Amenities Designed for Comfort,
          Leisure, and Luxury.
        </span>
      </h2>
      <div className="absolute xl:flex hidden left-0 w-full bottom-[40px]  justify-center">
        <div
          ref={containerRef}
          className="bg-[white] w-[70%]  2xl:w-[63%] relative flex justify-center py-[1.5rem] "
        >
          <button
            onClick={goPrev}
            className="px-4 py-2   absolute left-2   text-black rounded"
          >
            <GrFormPrevious className="text-[26px]" />
          </button>
          <button
            onClick={goNext}
            className="px-4 py-2 absolute right-2   text-black rounded"
          >
            <GrFormNext className="text-[26px]" />
          </button>

          <div className="flex items-center justify-center gap-4 overflow-hidden">
            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className={`transition-all duration-500 flex items-center  bg-white rounded-xl  ${
                  i === 0
                    ? "w-[300px] justify-start px-4"
                    : "w-[100px] justify-end"
                }  overflow-hidden`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[43px] object-contain transition-opacity duration-300"
                />
                {i === 0 && (
                  <span className="ml-[40px] text-[18px] font-playfair font-[500] tracking-[1px] uppercase text-black animate-fade-in">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute xl:hidden w-[100%] bottom-[40px] flex justify-center overflow-hidden">
        <div className="w-[85%] bg-[white]">
          {" "}
          <Swiper
            modules={[Navigation]}
            navigation={true} // Enable Swiper's default arrows
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            className="w-full custom-swiper"
          >
            {data.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className="!flex !items-center !justify-center"
              >
                <div className="flex items-center justify-center gap-4 p-4 bg-white">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[43px] object-contain"
                  />
                  <p className="text-sm uppercase font-medium ml-[2.5rem] !text-[18px] text-gray-700">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Amenties;
