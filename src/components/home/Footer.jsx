import { RiArrowUpSLine } from "react-icons/ri";

import { Link } from "react-router-dom";
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
            <RiArrowUpSLine className="cursor-pointer absolute xl:bottom-[14%] bottom-[8%] right-[41px] xl:right-[74px] font-[300] text-[50px]" />
          </button>
          <p className="px-[80px] playfair-display-500 tracking-[1px] uppercase">
             PRATEEK GROUP
          </p>
          <p className=" xl:px-[80px] px-[20px] text-center poppins-regular my-[30px] text-[12px] tracking-[1px] leading-[23px]">
            Founded in 2005 by visionary civil engineer Mr. Prashan Tiwari,
            Prateek Group has become a trusted name in North India's real estate
            landscape. Known for its commitment to quality, on-time delivery,
            and transparency, the group has delivered numerous landmark projects
            over 19+ years. Woth a customer-first approach and a legacy built on
            trust and innovation, Prateek Group continues to turn dream homes
            into lasting realities.
          </p>
          <p
            className=" px-[80px] text-center text-[10px] tracking-[1px] mb-[50px]"
            style={{ color: "rgba(255, 255, 255, 0.50)" }}
          >
            © Copyright 2025, all rights reserved with Prateek Group
          </p>
          <div className="h-[0.6px] bg-[white] w-full opacity-[0.5] lg:top-[53%] top-[calc(55%+5px)] absolute "></div>
          <p className="xl:px-[80px] px-[20px] text-[10px] tracking-[1px] text-center poppins-regular  mb-[25px]">
            <Link to={import.meta.env.VITE_BASE_URL+"desclaimer"}>Disclaimer & Privacy Policy</Link> | <a target="_blank" href="https://www.gtftechnologies.com/">Managed by GTF Technologies</a>
          </p>
          <p className="xl:px-[80px] px-[20px]  text-center poppins-regular   text-[10px] tracking-[1px] leading-[23px]">
            Disclaimer : The information depicted herein, for e.g. master plans,
            floor plans, furniture layout, fittings, illustrations,
            specifications, designs, dimensions, rendered views, colours,
            amenities and facilities etc. are subject to change without
            notifications as may be required by the relevant authorities or the
            Developer’s architect. Read More
          </p>
        </footer>
  );
};

export default Footer;
