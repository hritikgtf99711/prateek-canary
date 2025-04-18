import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const data = [
  {
    heading: "1 BHK",
    img: "/assets/home/modern-house-floor-plan.png",
    isActive: false,
  },
  {
    heading: "2 BHK",
    img: "/assets/home/floor-2.png",
    isActive: false,
  },
  {
    heading: "MASTER PLAN",
    img: "/assets/home/floor-1.png",
    isActive: true,
  },
  {
    heading: "3 BHK",
    img: "/assets/home/floor-2.png",
    isActive: false,
  },
  {
    heading: "4 BHK",
    img: "/assets/home/floor-2.png",
    isActive: false,
  },
  {
    heading: "5 BHK",
    img: "/assets/home/floor-2.png",
    isActive: false,
  },
];

const MasterAndFloorPlans = () => {
  const [initialData, setInitialData] = useState(data);

  return (
    <section
      style={{
        background: "#FBFAF9",
      }}
      className="relative py-[50px]"
    >
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.5)",
        }}
        className="z-[2] font-[500] xl:text-[35px] text-[18px] xl:mt-0  custom-sub-heading-color xl:origin-top-left xl:translate-y-[-50%]  xl:absolute xl:left-[55px] xl:top-[95%] text-center poppins-regular  leading-[41px] tracking-[5px] uppercase xl:rotate-[-90deg]"
      >
        Master & Floor Plans
      </h2>
      <h3 className="custom-green text-[13px] my-[30px] leading-[23px] px-[10px]  xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] xl:mb-[50px]  uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400 ">
        Experience Elevated Comfort In Every Detail
      </h3>
      <div className="flex justify-center">
        <div className="w-[80%] max-w-[1200px] text-center">
          {initialData.map((info, i) => (
            <div className="flex justify-center" key={i}>
              {info.isActive && (
                <img
                  src={`${import.meta.env.VITE_BASE_URL}` + info.img}
                  className="h-[340px]"
                  alt={info.heading}
                />
              )}
            </div>
          ))}

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            navigation
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="!py-[15px] px-[10px] mt-[2rem] border-y-[1px] border-black"
          >
            {initialData.map((info, i) => (
              <SwiperSlide key={i}>
                <p
                  onClick={() => {
                    const newData = initialData.map((item, index) => ({
                      ...item,
                      isActive: index === i,
                    }));
                    setInitialData(newData);
                  }}
                  className={`${
                    info.isActive ? "font-[600]" : ""
                  } cursor-pointer uppercase text-[14px]`}
                >
                  {info.heading}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default MasterAndFloorPlans;
