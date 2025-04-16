import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="custom-bg-green relative pt-[40px] xl:px-[100px] pb-[100px] flex justify-center items-center flex-col text-[white]">
      <button onClick={handleScrollToTop}>
        {" "}
        <RiArrowUpSLine className="cursor-pointer absolute bottom-[14%] right-[74px] font-[300] text-[50px]" />
      </button>

      <img
        src="/assets/home/logo_white.png"
        className="h-[65px] mb-[8px]"
        alt="logo"
      />
      <p className="px-[80px] playfair-display-500 tracking-[1px] uppercase">
        Haven Realty
      </p>
      <p className=" xl:px-[80px] px-[20px] text-center poppins-regular my-[30px] text-[12px] tracking-[1px] leading-[23px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages. Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      </p>
      <p
        className=" px-[80px] text-center text-[10px] tracking-[1px] mb-[30px]"
        style={{ color: "rgba(255, 255, 255, 0.50)" }}
      >
        Copyright @ Haven Realty | 2025
      </p>
      <div className="h-[0.6px] bg-[white] w-full opacity-[0.5] top-[59%] absolute"></div>
      <p className="xl:px-[80px] px-[20px] text-[10px] tracking-[1px] text-center poppins-regular my-[30px] eading-[23px]">
        Disclaimer & Privacy Policy | Managed by GTF Technologies
      </p>
      <p className="xl:px-[80px] px-[20px]  text-center poppins-regular   text-[10px] tracking-[1px] leading-[23px]">
        Disclaimer : The information depicted herein, for e.g. master plans,
        floor plans, furniture layout, fittings, illustrations, specifications,
        designs, dimensions, rendered views, colours, amenities and facilities
        etc. are subject to change without notifications as may be required by
        the relevant authorities or the Developer’s architect. Read More
      </p>
    </footer>
  );
};

export default Footer;
