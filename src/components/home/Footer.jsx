import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

import { Link } from "react-router-dom";
const Footer = () => {
  const [isPopupOpen, setPopup] = useState(false);

  const handleClickOnImage = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  const handleScrollToTop = () => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <footer className="custom-bg-green relative pt-[40px] xl:px-[100px] pb-[100px] flex justify-center items-center flex-col text-[white]">
      {/* Rera Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black z-[9999999999] bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          {" "}
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-[37%] left-[72.5%] right-4 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full h-6 w-6 xl:w-10 xl:h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <svg
              className="w-4 h-4 xl:w-6 xl:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              loading="lazy"
              decoding="async"
              src={`${import.meta.env.VITE_BASE_URL}assets/home/rera-new.png`}
              alt={"rera number"}
              className="w-[200px] h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      <button onClick={handleScrollToTop}>
        <RiArrowUpSLine className="cursor-pointer absolute xl:bottom-[14%] bottom-[8%] right-[41px] xl:right-[74px] font-[300] text-[50px]" />
      </button>
      <p className="px-[80px] playfair-display-500 tracking-[1px] uppercase">
         PRATEEK GROUP
      </p>
      <p className=" xl:px-[80px] px-[20px] text-center poppins-regular my-[30px] text-[12px] tracking-[1px] leading-[23px]">
        Founded in 2005 by visionary civil engineer Mr. Prashant Tiwari, Prateek
        Group has become a trusted name in North India's real estate landscape.
        Known for its commitment to quality, on-time delivery, and transparency,
        the group has delivered numerous landmark projects over 19+ years. With
        a customer-first approach and a legacy built on trust and innovation,
        Prateek Group continues to turn dream homes into lasting realities.
      </p>
      <p className="flex xl:hidden items-center mb-3">
        <span className="text-[13px]"> PROJECT RERA No. </span>
        <span className="inline-block mx-[7px]"> : </span>
        <span className="lg:text-[normal] lg:text-[14px] text-[13px]">
          UPRERAPRJ591510
        </span>
        <img
          loading="lazy"
          decoding="async"
          onClick={handleClickOnImage}
          src={`${import.meta.env.VITE_BASE_URL}assets/home/rera-new.png`}
          className="ml-[8px] w-[25px] h-[25px]"
        />
      </p>
      <p
        className="px-[80px] text-center text-[10px] tracking-[1px] mb-[50px]"
        style={{ color: "rgba(255, 255, 255, 0.50)" }}
      >
        © Copyright 2025, All rights reserved with Prateek Group
      </p>
      <div className="h-[0.6px] bg-[white] w-full opacity-[0.5] lg:top-[53%] top-[calc(57.5%+5px)] absolute "></div>
      <p className="xl:px-[80px] px-[20px] text-[10px] tracking-[1px] text-center poppins-regular  mb-[25px]">
        <Link
          click={handleScrollToTop}
          to={import.meta.env.VITE_BASE_URL + "disclaimer"}
        >
          Disclaimer & Privacy Policy
        </Link>
        |
        <a target="_blank" href="https://www.gtftechnologies.com/">
          Managed by GTF Technologies
        </a>
      </p>
      <p className="xl:px-[80px] px-[20px]  text-center poppins-regular text-[10px] tracking-[1px] leading-[23px]">
        Disclaimer : The information depicted herein, for e.g. master plans,
        floor plans, furniture layout, fittings, illustrations, specifications,
        designs, dimensions, rendered views, colours, amenities and facilities
        etc. are subject to change without notifications as may be required by
        the relevant authorities or the Developer’s architect.
      </p>
    </footer>
  );
};

export default Footer;
