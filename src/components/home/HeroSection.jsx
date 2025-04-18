import { BsQrCode, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineWhatsapp } from "react-icons/md";
import { GoMail } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="relative">
      <img
        src={`${import.meta.env.VITE_BASE_URL}assets/home/bg.png`}
        className="object-cover h-[calc(100vh-80px)] w-[100%]"
        alt="bg.png"
      />
      <div className="bg-[linear-gradient(180deg,_#35543D_0%,_rgba(233,238,242,0.41)_96.15%)] xl:px-[40px] text-[white] text-center absolute top-[80px] left-1/2 transform -translate-x-1/2 px-[45px] py-[30px]">
        <h2 className="text-white mb-[30px] text-center font-[400]  xl:text-[20px] text-[20px] playfair-display-400 xl:leading-[28px] leading-[35px] tracking-[5px] uppercase">
          <span className="poppins-regular">2 & 3</span> BHK Luxury <br />
          Apartments
        </h2>
        <p className="mt-[4rem] mb-[2rem]">
          <span className="xl:text-[43px] font-[200] text-[35px]   block">
            ₹96
          </span>
          <span className="xl:text-[20px] text-[30px] tracking-[2px] playfair-display-400">
            Lacs Onwards
          </span>
        </p>
      </div>
      <div className="py-[20px] w-screen z-[999] fixed left-[0px] bg-[white] bottom-[0px]">
        <div className="flex px-[15px]  xl:px-[40px] flex-wrap poppins-medium  uppercase text-[14px] justify-between items-center">
          <p className="xl:flex hidden  items-center">
            PROJECTS RERA No. : XXXXXXXXXXXXXX
            <BsQrCode className="ml-[20px] w-[25px] h-[25px]" />
          </p>
          <div className="xl:basis-[45%] basis-[100%] flex justify-between items-center">
            <p className="flex items-center !text-[16px]">
              <MdOutlineWhatsapp className="xl:mr-[15px] mr-[8px] xl:text-[20px] text-[16px]" />
              <span className="xl:text-[14px] text-[10px]">
                +91 9999-999-99
              </span>
            </p>
            <p className="flex items-center">
              <BsTelephoneFill className="xl:mr-[15px] mr-[8px]" />
              <span className="xl:text-[14px] text-[10px]">
                +91 9999-999-99
              </span>
            </p>
            <p className="flex items-center">
              <GoMail className="xl:mr-[15px] mr-[8px]" />
              <span className="xl:text-[14px] text-[10px]"> enquire now</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" !py-[40px] bg-white custom-green flex flex-wrap justify-between items-center">
        <p
          className={`font-[300] xl:pb-0 pb-[2rem] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%] 
           border-r-[1px] border-dashed border-gray-400`}
        >
          <span className="block xl:text-[34px] text-[35px]">5.8</span>
          <span>acres</span>
        </p>
        <p
          className={`font-[300] xl:pb-0 pb-[2rem] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%] 
           xl:border-r-[1px] xl:border-dashed xl:border-gray-400`}
        >
          <span className="block xl:text-[34px] text-[35px]">3</span>
          <span>towers</span>
        </p>{" "}
        <p
          className={`font-[300] xl:pb-0 pb-[2rem] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%] 
           border-r-[1px] border-dashed border-gray-400`}
        >
          <span className="block xl:text-[34px] text-[35px] ">198</span>
          <span>apartments</span>
        </p>{" "}
        <p
          className={`font-[300] xl:pb-0 pb-[2rem] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%]`}
        >
          <span className="block xl:text-[34px] text-[35px] ">34</span>
          <span>floors</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
