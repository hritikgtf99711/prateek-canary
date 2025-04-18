import CommonHeading from "../common/CommonHeading";

const AboutUs = () => {
  return (
    <section className="bg-[url(/assets/home/about-us-bg.png)] bg-[#F4F3EE] bg-blend-lighten relative  !py-[60px]">
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.5)",
        }}
        className={`xl:hidden custom-sub-heading-color text-center poppins-regular !font-[200] text-[18px] mb-[20px]  leading-[41px] tracking-[5px] uppercase `}
      >
        ABOUT US
      </h2>
      <CommonHeading text={"ABOUT US"} top={"top-[58%]"} />{" "}
      <h3 className="custom-green xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] uppercase  text-[13px]  playfair-display-400 tracking-[1px] text-center">
        <span className="xl:inline-block hidden ">
          {" "}
          Unlock the Door to Your Luxurious Dream Home, Explore
        </span>{" "}
        <span className="xl:block hidden">
          Exquisite Apartments Tailored for Elegance and Comfort.
        </span>{" "}
        <span className="xl:hidden block">
          {" "}
          Unlock the Door to Your Luxurious Dream Home, Explore Exquisite
          Apartments Tailored for Elegance and Comfort.
        </span>
      </h3>
      <div className="flex mt-[60px] flex-wrap justify-center items-center">
        <div className="bg-[white] pr-[19px] xl:pb-[0px] pb-[30px] xl:h-[400px] poppins-regular pt-[30px] pl-[19px]  xl:basis-[34%] basis-[100%] xl:mb-[0px] mb-[30px]">
          <p className="text-justify xl:text-[12px] text-[14px] tracking-[1.5px] leading-[25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="mt-[30px] uppercase text-[white] text-[10px] tracking-[1.5px]  custom-bg-green px-[20px] py-[10px]  ">
            Download Brochure
          </button>
        </div>

        <img
          className="basis-[34%] object-cover h-[400px]"
          src={`${import.meta.env.VITE_BASE_URL}assets/home/about_us.png`}
          alt="about_us"
        />
      </div>
      <div className="flex xl:mt-[60px] mt-[40px] flex-wrap justify-between xl:px-[130px] items-center ">
        <p className="xl:basis-[30%] basis-[100%]  custom-green flex flex-col xl:items-start items-center playfair-display-600">
          <span> WHY SECTOR </span>
          <span>144 NOIDA?</span>{" "}
        </p>
        <div className="flex justify-between xl:basis-[60%] xl:mt-0 mt-[20px] basis-[100%] items-center xl:flex-nowrap flex-wrap">
          <p className="flex justify-center basis-[50%] xl:mb-0 mb-[30px] flex-col">
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/home/subway.png`}
              className="block h-[50px] object-contain"
              alt="subway"
            />
            <span className="text-center mt-[8px] text-[13px] uppercase">
              Shopping
            </span>
          </p>
          <p className="flex justify-center basis-[50%] xl:mb-0 mb-[30px] flex-col">
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/home/mall.png`}
              className="block h-[50px] object-contain"
              alt="mall"
            />
            <span className="text-center mt-[8px] text-[13px] uppercase">
              Metro
            </span>
          </p>
          <p className="flex justify-center basis-[50%] flex-col">
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/home/education.png`}
              className="block h-[50px] object-contain"
              alt="education"
            />
            <span className="text-center mt-[8px] text-[13px] uppercase">
              University
            </span>
          </p>
          <p className="flex justify-center basis-[50%] flex-col">
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/home/hospital.png`}
              className="block h-[50px] object-contain"
              alt="hospital"
            />
            <span className="text-center mt-[8px] text-[13px] uppercase">
              Hospital
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
