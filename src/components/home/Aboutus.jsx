import CommonHeading from "../common/CommonHeading";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import EnquiryForm from "../common/enquiryForm";

const AboutUs = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  return (
    <section
      id="aboutus"
      // bg-[url(assets/home/about-us-bg.png)]
      className=" bg-[#F4F3EE] bg-blend-lighten relative  !py-[60px]"
    >
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.5)",
        }}
        className={`xl:hidden custom-sub-heading-color text-center poppins-regular text-[18px] mb-[20px]  leading-[41px] tracking-[5px] uppercase `}
      >
        PRATEEK CANARY
      </h2>
      <CommonHeading text={"PRATEEK CANARY"} top={"top-[58%]"} />
      <h3 className="custom-green xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] uppercase  text-[13px]  playfair-display-400 tracking-[1px] text-center">
        <span className="xl:inline-block hidden">
          THE LUXURY OF UNINTERRUPTED VISTAS THE JOY OF
        </span>
        <span className="xl:block hidden">BOUNDLESS LIVING.</span>
        <span className="xl:hidden block leading-[25px]">
          Unlock the Door to Your Luxurious Dream Home, Explore Exquisite
          Apartments Tailored for Elegance and Comfort.
        </span>
      </h3>
      <div className="flex mt-[60px] flex-wrap justify-center items-center">
        <div className="bg-[white] xl:px-[56px] pr-[19px] xl:pb-[0px] pb-[30px] xl:h-[470px] poppins-regular pt-[70px] pl-[19px]  xl:basis-[34%] basis-[100%] xl:mb-[0px] mb-[30px]">
          <p className="text-center xl:text-left xl:text-[12px] text-[14px] tracking-[1.5px] leading-[25px]">
            Imagine waking up to a magnificent and uninterrupted panoramic green
            view and a huge private party deck to embrace it. A neighbourhood
            for the select few with a carefully crafted collection of just 664
            units having 3/4 BHK residences and duplex penthouses built over a
            sprawling 12.55 acres of land. Add to it, a dedicated clubhouse with
            all the modern amenities including, hospitality, retail,
            entertainment and wellness.
          </p>
          <div className="xl:text-left text-center">
            {" "}
            <button
              onClick={openForm}
              className="mt-[30px] cursor-pointer uppercase text-[white] text-[10px] tracking-[1.5px]  custom-bg-green px-[20px] py-[10px]  "
            >
              Download Brochure
            </button>
          </div>
        </div>

        <img
          loading="lazy"
          decoding="async"
          className="basis-[34%] object-cover h-[470px]"
          src={`${import.meta.env.VITE_BASE_URL}assets/home/aboutus.png`}
          alt="about_us"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex xl:mt-[60px] mt-[40px] flex-wrap justify-between w-[90%] xl:w-[71%] mx-0 my-auto items-center ">
          <p className="xl:basis-[15%] basis-[100%]  custom-green flex lg:flex-col justify-center xl:items-start items-center playfair-display-600">
            <span className="lg:mr-[0] mr-[10px]"> WHY SECTOR </span>
            <span>
              <span className="text-[20px] inline-block mr-[10px]"> 150</span>
               NOIDA?
            </span>
          </p>
          <div className="flex justify-around xl:basis-[75%] xl:mt-0 mt-[20px] basis-[100%] items-start xl:flex-wrap flex-wrap">
            <p className="flex lg:items-center items-center xl:basis-[20%] basis-[50%] xl:mb-0 mb-[30px] flex-col">
              <img
                loading="lazy"
                decoding="async"
                src={`${
                  import.meta.env.VITE_BASE_URL
                }assets/home/locationMap/junction.png`}
                className="block h-[50px] object-contain"
                alt="mall"
              />
              <span className="text-center mt-[8px] text-[12px] uppercase">
                Noida-Greater Noida Expressway
              </span>
            </p>
            <p className="flex lg:items-center items-center xl:basis-[20%] basis-[50%] xl:mb-0 mb-[30px] flex-col">
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.VITE_BASE_URL}assets/home/subway.png`}
                className="block h-[50px] object-contain"
                alt="subway"
              />
              <span className="text-center mt-[8px] text-[12px] uppercase">
                Aqua Line Metro (Via Noida Sector 148 station)
              </span>
            </p>
            <p className="flex lg:items-center items-center xl:basis-[20%] basis-[50%] flex-col">
              <img
                loading="lazy"
                decoding="async"
                src={`${
                  import.meta.env.VITE_BASE_URL
                }assets/home/locationMap/airport.png`}
                className="block h-[50px] object-contain"
                alt="education"
              />
              <span className="text-center mt-[8px] text-[12px] uppercase">
                Upcoming Jewar Airport
              </span>
            </p>
            <p className="flex lg:items-center items-center xl:basis-[20%] basis-[50%] flex-col">
              <img
                loading="lazy"
                decoding="async"
                src={`${import.meta.env.VITE_BASE_URL}assets/home/motorway.png`}
                className="block h-[50px] object-contain"
                alt="hospital"
              />
              <span className="text-center mt-[8px] text-[12px] uppercase">
                Close To Yamuna Expressway
              </span>
            </p>
          </div>
        </div>
      </div>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};

export default AboutUs;
