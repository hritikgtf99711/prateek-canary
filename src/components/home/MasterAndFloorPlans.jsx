import { useState, useRef ,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// const data = [
//   {
//     heading: "3 bhk - Elite",
//     img: "/assets/home/floor-plan/3bhk/elite.webp",
//     isActive: false,
//   },
//   {
//     heading: "3 bhk - Deluxe",
//     img: "/assets/home/floor-plan/3bhk/deluxe.webp",
//     isActive: false,
//   },
//   {
//     heading: "3 bhk - Deluxe Cluster Plan",
//     img: "/assets/home/floor-plan/3bhk/deluxe-cluster-plan.webp",
//     isActive: true,
//   },
//   {
//     heading: "4 BHK - Luxury Cluster Plan",
//     img: "/assets/home/floor-plan/4bhk/1.jpg",
//     isActive: false,
//   },
//   {
//     heading: "4 BHK - Lower Duplex Cluster Plan",
//     img: "/assets/home/floor-plan/4bhk/2.jpg",
//     isActive: false,
//   },
//   {
//     heading: "4 BHK - Upper Duplex Cluster Plan",
//     img: "/assets/home/floor-plan/4bhk/3.jpg",
//     isActive: false,
//   },
// ];

// const MasterAndFloorPlans = () => {
//   const [initialData, setInitialData] = useState(data);
//   const swiperRef = useRef(null);

//   const handleSlideClick = (clickedIndex) => {
//     const newData = initialData.map((item, index) => ({
//       ...item,
//       isActive: index === clickedIndex,
//     }));
//     setInitialData(newData);

//     if (swiperRef.current) {
//       swiperRef.current.slideTo(clickedIndex);
//     }
//   };

//   const handleSlideChange = (swiper) => {
//     const activeIndex = swiper.activeIndex;
//     const newData = initialData.map((item, index) => ({
//       ...item,
//       isActive: index === activeIndex,
//     }));
//     setInitialData(newData);
//   };

//   return (
//     <section
//       id="plans"
//       style={{
//         background: "#FBFAF9",
//       }}
//       className="relative py-[50px]"
//     >
//       <h2
//         style={{
//           color: "rgba(0, 0, 0, 0.5)",
//         }}
//         className="z-[2] font-[500] xl:text-[35px] text-[18px] xl:mt-0 custom-sub-heading-color xl:origin-top-left xl:translate-y-[-50%] xl:absolute xl:left-[55px] xl:top-[95%] text-center poppins-regular leading-[41px] tracking-[5px] uppercase xl:rotate-[-90deg]"
//       >
//         Master & Floor Plans
//       </h2>
//       <h3 className="custom-green text-[13px] my-[30px] leading-[23px] px-[10px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] xl:mb-[50px] uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400">
//         Experience Elevated Comfort In Every Detail
//       </h3>
//       <div className="flex justify-center">
//         <div className="w-[80%] max-w-[1200px] text-center">
//           {initialData.map((info, i) => (
//             <div className="flex justify-center" key={i}>
//               {info.isActive && (
//                 <img
//                   src={`${import.meta.env.VITE_BASE_URL}` + info.img}
//                   className="h-[340px] transition-opacity duration-300"
//                   alt={info.heading}
//                 />
//               )}
//             </div>
//           ))}
//           <Swiper
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             modules={[Navigation]}
//             spaceBetween={10}
//             centeredSlides={true}
//             navigation
//             initialSlide={initialData.findIndex(item => item.isActive)}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 3 },
//               1024: { slidesPerView: 3 },
//             }}
//             onSlideChange={handleSlideChange}
//             className="!py-[15px] px-[10px] mt-[2rem] swiper_container_master_plan border-y-[1px] border-black"
//           >
//             {initialData.map((info, i) => (
//               <SwiperSlide key={i}>
//                 <p
//                   onClick={() => handleSlideClick(i)}
//                   className={`${
//                     info.isActive 
//                       ? "font-[600] text-black" 
//                       : "font-[400] text-gray-600 hover:text-black"
//                   } cursor-pointer uppercase text-[14px] transition-all duration-200`}
//                 >
//                   {info.heading}
//                 </p>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };


const data = [
  {
    heading: "3 bhk - Elite",
    img: "/assets/home/floor-plan/3bhk/elite.webp",
    isActive: false,
  },
  {
    heading: "3 bhk - Deluxe",
    img: "/assets/home/floor-plan/3bhk/deluxe.webp",
    isActive: false,
  },
  {
    heading: "3 bhk - Deluxe Cluster Plan",
    img: "/assets/home/floor-plan/3bhk/deluxe-cluster-plan.webp",
    isActive: true,
  },
  {
    heading: "4 BHK - Luxury Cluster Plan",
    img: "/assets/home/floor-plan/4bhk/1.jpg",
    isActive: false,
  },
  {
    heading: "4 BHK - Lower Duplex Cluster Plan",
    img: "/assets/home/floor-plan/4bhk/2.jpg",
    isActive: false,
  },
  {
    heading: "4 BHK - Upper Duplex Cluster Plan",
    img: "/assets/home/floor-plan/4bhk/3.jpg",
    isActive: false,
  },
];

const MasterAndFloorPlans = () => {
  const [initialData, setInitialData] = useState(data);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const swiperRef = useRef(null);

  const handleSlideClick = (clickedIndex) => {
    const newData = initialData.map((item, index) => ({
      ...item,
      isActive: index === clickedIndex,
    }));
    setInitialData(newData);

    if (swiperRef.current) {
      swiperRef.current.slideTo(clickedIndex);
    }
  };

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    const newData = initialData.map((item, index) => ({
      ...item,
      isActive: index === activeIndex,
    }));
    setInitialData(newData);
  };

  const handleImageClick = (img, heading) => {
    setPopupImage(img);
    setPopupTitle(heading);
    setIsPopupOpen(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage('');
    setPopupTitle('');
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close popup on escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isPopupOpen) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isPopupOpen]);

  return (
    <>
      <section
        id="plans"
        style={{
          background: "#FBFAF9",
        }}
        className="relative py-[50px]"
      >
        <h2
          style={{
            color: "rgba(0, 0, 0, 0.5)",
          }}
          className="z-[2] font-[500] xl:text-[35px] text-[18px] xl:mt-0 custom-sub-heading-color xl:origin-top-left xl:translate-y-[-50%] xl:absolute xl:left-[55px] xl:top-[95%] text-center poppins-regular leading-[41px] tracking-[5px] uppercase xl:rotate-[-90deg]"
        >
          Master & Floor Plans
        </h2>
        <h3 className="custom-green text-[13px] my-[30px] leading-[23px] px-[10px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] xl:mb-[50px] uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400">
          Experience Elevated Comfort In Every Detail
        </h3>
        <div className="flex justify-center">
          <div className="w-[80%] max-w-[1200px] text-center">
            {initialData.map((info, i) => (
              <div className="flex justify-center" key={i}>
                {info.isActive && (
                  <img  loading="lazy" 
  decoding="async"
                    src={`${import.meta.env.VITE_BASE_URL}` + info.img}
                    className="h-[340px] transition-opacity duration-300 cursor-pointer hover:opacity-80"
                    alt={info.heading}
                    onClick={() => handleImageClick(info.img, info.heading)}
                  />
                )}
              </div>
            ))}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              spaceBetween={10}
              centeredSlides={true}
              navigation
              initialSlide={initialData.findIndex(item => item.isActive)}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              onSlideChange={handleSlideChange}
              className="!py-[15px] px-[10px] mt-[2rem] swiper_container_master_plan border-y-[1px] border-black"
            >
              {initialData.map((info, i) => (
                <SwiperSlide key={i}>
                  <p
                    onClick={() => handleSlideClick(i)}
                    className={`${
                      info.isActive 
                        ? "font-[600] text-black" 
                        : "font-[400] text-gray-600 hover:text-black"
                    } cursor-pointer uppercase text-[14px] transition-all duration-200`}
                  >
                    {info.heading}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 bg-black     z-[9999999999] bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full h-6 w-6 xl:w-10 xl:h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
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
            
            {/* Image */}
            <img  loading="lazy" 
  decoding="async"
              src={`${import.meta.env.VITE_BASE_URL}` + popupImage}
              alt={popupTitle}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Title */}
            <div className="p-4 bg-white">
              <h4 className="text-[13px] xl:text-lg font-semibold text-center text-gray-800 uppercase">
                {popupTitle}
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasterAndFloorPlans;