import { BsQrCode } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import EnquiryForm from "../common/enquiryForm";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();
  const [showBar, setShowBar] = useState(false);
  const triggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPopupOpen, setPopup] = useState(false);

  const handleClickOnImage = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  useEffect(() => {
    const bgImage = new Image();
    const logoImage = new Image();

    bgImage.src = isMobile
      ? `${import.meta.env.VITE_BASE_URL}assets/home/main-bg-mb.webp`
      : `${import.meta.env.VITE_BASE_URL}assets/home/main-bg-4-new.webp`;

    logoImage.src = `${
      import.meta.env.VITE_BASE_URL
    }assets/home/logo-canary-new.png`;

    let loadedCount = 0;
    const onLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setIsLoaded(true);
      }
    };

    [bgImage, logoImage].forEach((img) => {
      if (img.complete) {
        onLoad();
      } else {
        img.onload = onLoad;
        img.onerror = onLoad;
      }
    });
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Show bar when the trigger element is NOT in view (user has scrolled past it)
        setShowBar(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px", // Trigger when element is 100px out of view
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);
  return (
    <section
      className={`relative ${isLoaded ? "opacity-100" : "opacity-0"}`}
      id="home"
    >
      {/* Image Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black z-[9999999999] bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          {" "}
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute cursor-pointer top-[32%] left-[57.5%]  z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full h-6 w-6 xl:w-10 xl:h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
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
              className="w-[200px]  h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
      {!isLoaded && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
          <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <LazyLoadImage
        src={
          isMobile
            ? `${import.meta.env.VITE_BASE_URL}assets/home/main-bg-mb.webp`
            : `${import.meta.env.VITE_BASE_URL}assets/home/main-bg-4-new.webp`
        }
        className="object-cover w-[100%]"
        alt="bg.png"
      />
      <div className="flex justify-center">
        {" "}
        <div
          id="content_banner"
          className="absolute xl:top-[82px] lgmac:top-[120px]  top-[90px] w-[100%] lg:min-w-[1300px] flex flex-col items-center flex-wrap"
        >
          <LazyLoadImage
            src={`${
              import.meta.env.VITE_BASE_URL
            }assets/home/logo-canary-new.png`}
            className="2xl:w-[265px] xl:w-[240px] w-[180px] object-contain"
            alt="logo"
          />
          <div className="flex lg:mt-[40px] mt-[35px] w-[100%] items-center flex-wrap lg:justify-center ">
            <p className="lg:flex hidden lg:basis-[20%] basis-[100%] font-[450] tracking-[2px] text-[10px] leading-[normal] lg:text-[12px] leading-[21px] uppercase flex flex-col items-center">
              <span className="text-[30px] mb-[4px]">40:60</span>
              <span className="tracking-[1.6] text-[12px] font-[500]">
                LIMITED PERIOD OFFER
              </span>
            </p>
            <LazyLoadImage
              src={`${import.meta.env.VITE_BASE_URL}assets/home/line.svg`}
              alt="line"
              className="lg:h-[100px] lg:block hidden lg:w-[2px] w-[100%] h-[2px]"
            />
            <p className="lg:basis-[38%] basis-[100%]   tracking-[2px] lg:text-[15px] text-[14px] leading-[24px]  uppercase  flex flex-col items-center">
              <span className="lg:text-[20px] md:p-0 px-[12px] text-[18px] text-center mb-[10px] leading-[1.6] font-[400]">
                3/4 BHK Luxury Apartments & Duplex{" "}
                <span className="lg:block"></span> Penthouses
              </span>
              <span className="tracking-[1.6] text-[12px] font-[500]">
                Spacious Residencies At Sector 150 Noida
              </span>
            </p>
            <LazyLoadImage
              src={`${import.meta.env.VITE_BASE_URL}assets/home/line.svg`}
              alt="line"
              className="lg:h-[100px] lg:w-[2px]  lg:block hidden w-[100%] h-[2px]"
            />
            <p className="lg:flex hidden lg:basis-[22%] basis-[100%] font-[450] tracking-[2px] text-[10px] leading-[normal] lg:text-[12px] leading-[21px] flex flex-col items-center uppercase ">
              <span className="text-[30px] mb-[4px]">2027</span>
              <span className="tracking-[1.6] text-[12px] font-[500]">
                READY FOR POSSESSION
              </span>
            </p>
          </div>
          <div className="2xl:mt-[40px] my-[35px]">
            <LazyLoadImage
              src={`${import.meta.env.VITE_BASE_URL}assets/home/line-price.svg`}
              alt="line"
              className="h-[0.7px]   w-[100%]"
            />
            <p className="h-[50px] leading-[50px] text-[20px] tracking-[2.5px] uppercase text-center">
              ₹2.92 Cr* onwards
            </p>
            <LazyLoadImage
              src={`${import.meta.env.VITE_BASE_URL}assets/home/line-price.svg`}
              alt="line"
              className="h-[0.7px]   w-[100%]"
            />
          </div>

          <div className="lg:hidden w-[100%] flex mt-[15px]">
            <p className="lg:basis-[20%] basis-[100%] font-[450] tracking-[2px] text-[10px] leading-[normal] lg:text-[12px] leading-[21px] uppercase flex flex-col items-center">
              <span className="text-[30px] mb-[4px]">40:60</span>
              <span className="font-[500]">LIMITED PERIOD</span>
              <span className="font-[500]"> OFFER</span>
            </p>
            <p className="lg:basis-[22%] border-l-[1px] border-solid border-[#000000] basis-[100%] font-[450] tracking-[2px] text-[10px] leading-[normal] lg:text-[12px] leading-[21px] flex flex-col items-center uppercase ">
              <span className="text-[30px] mb-[4px]">2027</span>
              <span className="font-[500]">READY FOR </span>
              <span className="font-[500]"> POSSESSION</span>
            </p>
          </div>

          <div className="text-center">
            {" "}
            <button
              onClick={openForm}
              className="xl:mt-[10px] mt-[30px] cursor-pointer uppercase text-[white] text-[12px] xl:text-[13px] tracking-[1px]  custom-bg-green px-[20px] py-[9px] xl:py-[14px] xl:px-[30px]  "
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Trigger element - invisible div that determines when to show/hide the bar */}
      <div
        ref={triggerRef}
        className="absolute top-[400px] w-full h-[1px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className={`py-[10px] z-[999999] !bg-[#feca04] w-screen fixed left-0  bottom-0 transform transition-all duration-500 ease-in-out ${
          showBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex px-[15px]  xl:px-[40px] flex-wrap poppins-medium  uppercase text-[14px] justify-between items-center">
          <p className="xl:flex hidden items-center">
            <span className="lg:block hidden"> PROJECT RERA No. </span>
            <span className="inline-block mx-[7px]"> :</span>
            <span className="lg:text-[normal] lg:text-[14px] text-[10px]">
              UPRERAPRJ591510
            </span>
            <LazyLoadImage
              loading="lazy"
              decoding="async"
              onClick={handleClickOnImage}
              src={`${import.meta.env.VITE_BASE_URL}assets/home/rera-new.png`}
              className="ml-[20px] cursor-pointer w-[25px] lg:block hidden h-[25px]"
            />
          </p>
          <div className="2xl:basis-[38%] justify-center basis-[100%] xl:basis-[42%]  flex xl:justify-end items-center">
            <a
              href="tel:+919654886622"
              className="flex items-center lg:mr-[35px] mr-[50px]"
            >
              <IoCallOutline className="xl:mr-[15px] xl:text-[20px] text-[16px] mr-[8px]" />
              <span className="xl:text-[14px] text-[13px]">+91 9654886622</span>
            </a>
            {/* <p className="flex items-center lg:mr-[35px] mr-[50px]">
              <IoCallOutline className="xl:mr-[15px] xl:text-[20px] text-[16px] mr-[8px]" />
              <span className="xl:text-[14px] text-[10px]">+91 9654886622</span>
            </p> */}
            <p className="flex items-center cursor-pointer" onClick={openForm}>
              <GoMail className="xl:mr-[15px] xl:text-[20px] text-[16px] mr-[8px]" />
              <span className="xl:text-[14px] text-[13px]"> enquire now</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" !py-[40px] bg-white custom-green flex flex-wrap justify-between items-center">
        <p
          className={`font-[400] xl:pb-0 xl:text-[13px] text-[11px] lg:order-[0] order-[1] xl:leading-[normal] leading-[1.5] lg:px-[0] px-[15px] lg:py-[0] py-[20px] tracking-[1px] leading-[24px]  mb-[15px] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%] 
        lg:border-r-[1px] border-l-[1px] border-dashed border-gray-400`}
        >
          <span className="lg:block ">ONE OF A KIND</span>
          <span> SUPER LUXURY PROJECT</span>
        </p>
        <p
          className={`font-[400] xl:pb-0 xl:text-[13px] text-[11px] xl:leading-[normal] leading-[1.5] lg:px-[0] px-[15px] lg:py-[0] py-[20px] tracking-[1px] leading-[24px]  mb-[15px] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%] 
           xl:border-r-[1px] xl:border-dashed xl:border-gray-400`}
        >
          <span className="lg:block ">Spacious 3/4BHK residencies</span>
          <span> & Duplex Penthouses</span>
        </p>
        <p
          className={`font-[400] xl:pb-0 xl:text-[13px] text-[11px] xl:leading-[normal] leading-[1.5] lg:px-[0] px-[15px] lg:py-[0] py-[20px] tracking-[1px] leading-[24px]  mb-[15px] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%] 
           lg:border-r-[1px] border-l-[1px] border-dashed border-gray-400`}
        >
          <span className="lg:block ">A low Density project with</span>
          <span> only 664 units in 12.55 acres.</span>
        </p>
        <p
          className={`font-[400] xl:pb-0 xl:text-[13px] text-[11px] xl:leading-[normal] leading-[1.5] lg:px-[0] px-[15px] lg:py-[0] py-[20px] tracking-[1px] leading-[24px]  mb-[15px] xl:mb-0 uppercase text-center basis-[50%] xl:basis-[25%]`}
        >
          <span className="lg:block  ">PANORAMIC GREEN</span>
          <span> VIEW APARTMENTS</span>
        </p>
      </div>

      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};

export default HeroSection;
