import CommonHeading from "../common/CommonHeading";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

// const initialData = [
//   {
//     img: "assets/home/amenties/soccer-ball-variant.png",
//     name: "Football",
//     bg: "./assets/home/amenties/badminton-court.webp",
//   },
//   {
//     img: "assets/home/amenties/park.png",
//     name: "Forest Trail",
//     bg: "./assets/home/amenties/forest_trail.webp",
//   },
//   {
//     img: "assets/home/amenties/dumbbell.png",
//     name: "Gym",
//     bg: "./assets/home/amenties/gym.webp",
//   },
//   {
//     img: "assets/home/amenties/yoga.png",
//     name: "Yoga",
//     bg: "./assets/home/amenties/yoga.webp",
//   },
//   {
//     img: "assets/home/amenties/runner.png",
//     name: "Jogging Track",
//     bg: "./assets/home/amenties/jogging-img.webp",
//   },
//   {
//     img: "assets/home/amenties/tennis.png",
//     name: "Tennis Court",
//     bg: "./assets/home/amenties/tennis-court.webp",
//   },
//   {
//     img: "assets/home/amenties/table-tennis.png",
//     name: "Table Tennis",
//     bg: "./assets/home/amenties/table_tennis.webp",
//   },
//   {
//     img: "assets/home/amenties/theater.png",
//     name: "Mini Theatre",
//     bg: "./assets/home/amenties/mini_theatre.webp",
//   },
//   {
//     img: "assets/home/amenties/pool-table.png",
//     name: "Billiards",
//     bg: "./assets/home/amenties/billiards.webp",
//   },
//   {
//     img: "assets/home/amenties/massage.png",
//     name: "Spa",
//     bg: "./assets/home/amenties/spa.webp",
//   },
//   {
//     img: "assets/home/amenties/badminton.png",
//     name: "Badminton Court",
//     bg: "./assets/home/amenties/badminton-court-1.webp",
//   },
//   {
//     img: "assets/home/amenties/ice-skate.png",
//     name: "Skating Rink",
//     bg: "./assets/home/amenties/skating_shoe.webp",
//   }
// ];

// const Amenties = () => {
//   const [data, setData] = useState(initialData);
//   const [currentBg, setCurrentBg] = useState(initialData[0].bg);
//   const itemsRef = useRef([]);
//   const containerRef = useRef(null);
//   const sectionRef = useRef(null);
  
//   // Add ref for Swiper instance
//   const swiperRef = useRef(null);

//   // Handle background image transition
//   const updateBackground = (newBg) => {
//     gsap.to(sectionRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       ease: "power1.in",
//       onComplete: () => {
//         setCurrentBg(newBg);
//         gsap.to(sectionRef.current, {
//           opacity: 1,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       },
//     });
//   };

//   // Desktop carousel navigation
//   const goNext = () => {
//     gsap.to(itemsRef.current, {
//       opacity: 0,
//       y: 20,
//       duration: 0.3,
//       stagger: 0.05,
//       ease: "power1.in",
//       onComplete: () => {
//         const newData = [...data];
//         const first = newData.shift();
//         newData.push(first);
//         setData(newData);
//         setCurrentBg("")
//         updateBackground(newData[0].bg);
//         gsap.fromTo(
//           itemsRef.current,
//           { opacity: 0, y: -20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.4,
//             stagger: 0.05,
//             ease: "power2.out",
//           }
//         );
//       },
//     });
//   };

//   const goPrev = () => {
//     gsap.to(itemsRef.current, {
//       opacity: 0,
//       y: -20,
//       duration: 0.3,
//       stagger: 0.05,
//       ease: "power1.in",
//       onComplete: () => {
//         const newData = [...data];
//         const last = newData.pop();
//         newData.unshift(last);
//         setData(newData);
//         updateBackground(newData[0].bg);
//         gsap.fromTo(
//           itemsRef.current,
//           { opacity: 0, y: 20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.4,
//             stagger: 0.05,
//             ease: "power2.out",
//           }
//         );
//       },
//     });
//   };

//   // Handle click on desktop carousel items
//   const handleDesktopItemClick = (clickedIndex) => {
//     if (clickedIndex === 0) return; // Already active
    
//     gsap.to(itemsRef.current, {
//       opacity: 0,
//       y: 20,
//       duration: 0.3,
//       stagger: 0.05,
//       ease: "power1.in",
//       onComplete: () => {
//         const newData = [...data];
//         // Move clicked item to front
//         const clickedItem = newData.splice(clickedIndex, 1)[0];
//         newData.unshift(clickedItem);
//         setData(newData);
//         updateBackground(newData[0].bg);
//         gsap.fromTo(
//           itemsRef.current,
//           { opacity: 0, y: -20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.4,
//             stagger: 0.05,
//             ease: "power2.out",
//           }
//         );
//       },
//     });
//   };

//   // Handle click on mobile swiper slides
//   const handleMobileSlideClick = (clickedIndex) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideToLoop(clickedIndex);
//     }
//   };

//   return (
//     <section
//       id="amenities"
//       ref={sectionRef}
//       className="w-screen relative bg-top overflow-hidden bg-cover xl:h-[87vh] h-[60vh] bg-center bg-no-repeat"
//     >
//       <img src={currentBg} alt="" className="absolute top-0 left-0 lg:h-[auto] h-[100%] object-cover  w-[100%]" />
//      <h2
//   className="text-white lg:text-white text-center poppins-regular lg:font-[200] z-[1] xl:text-[25px] text-[18px] pt-[35px] pb-[10px] lg:py-[35px] xl:py-[20px] xl:hidden leading-[41px] tracking-[5px] uppercase relative"
// >
//   AMENITIES
// </h2>

// <div className="absolute top-[0] left-[0] w-[100%] h-[100%] " style={{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0) 30.58%), linear-gradient(rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0) 50%)"}}></div>

//       <CommonHeading text={"AMENTIES"} textColor={"rgba(255, 255, 255, 0.5)"} />
//       <h2 className="text-[white] z-[999] relative text-[19px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] xl:pt-[40px] uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400 leading-[30px]">
//         <span className="xl:block hidden">
//           Elevate Your Lifestyle with Exquisite Amenities Designed for
//         </span>{" "}
//         <span className="xl:block hidden">Comfort, Leisure, and Luxury.</span>
//         <span className="xl:hidden block text-[13px] leading-[23px] px-[10px]">
//           Elevate Your Lifestyle with Exquisite Amenities Designed for Comfort,
//           Leisure, and Luxury.
//         </span>
//       </h2>

//       <div className="absolute xl:flex hidden left-0 w-full bottom-[65px] justify-center">
//         <div
//           ref={containerRef}
//           className="bg-[white] amenities_box w-[70%] px-[30px] 2xl:w-[70%] relative flex justify-center py-[1.5rem]"
//         >
//           <button
//             onClick={goPrev}
//             className="px-4 py-2 absolute cursor-pointer z-[999] left-[0] text-black rounded"
//           >
//             <GrFormPrevious className="text-[26px]" />
//           </button>
//           <button
//             onClick={goNext}
//             className="px-4 py-2 absolute cursor-pointer right-[0] z-[999] text-black rounded"
//           >
//             <GrFormNext className="text-[26px]" />
//           </button>
//           <div className="flex items-center justify-center gap-4 overflow-hidden">
//             {data.map((item, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (itemsRef.current[i] = el)}
//                 onClick={() => handleDesktopItemClick(i)}
//                 className={`transition-all duration-500 flex items-center bg-white rounded-xl ${
//                   i === 0
//                     ? "w-[50%] justify-start px-4 opacity-[1]"
//                     : "w-[50px] justify-end opacity-[0.6] cursor-pointer mr-[15px] hover:opacity-[0.6]"
//                 } overflow-hidden`}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className={`h-[43px] object-contain transition-opacity duration-300 ${
//                     i > 0 && "opacity-[0.8]"
//                   }`}
//                 />
//                 {i === 0 && (
//                   <span className="ml-[40px] text-[18px] font-playfair font-[500] tracking-[1px] uppercase text-black animate-fade-in">
//                     {item.name}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Swiper */}
//       <div className="absolute xl:hidden w-[100%] bottom-[40px] flex justify-center overflow-hidden">
//         <div className="w-[85%] bg-[white]">
//           <Swiper
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             modules={[Navigation]}
//             navigation={true}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//             className="w-full custom-swiper"
//             onSlideChange={(swiper) => {
//               const activeIndex = swiper.realIndex;
//               updateBackground(initialData[activeIndex].bg);
//             }}
//           >
//             {initialData.map((item, idx) => (
//               <SwiperSlide
//                 key={idx}
//                 onClick={() => handleMobileSlideClick(idx)}
//                 className="!flex !items-center !justify-center cursor-pointer"
//               >
//                 <div className="flex items-center justify-center gap-4 p-4 bg-white">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="h-[43px] object-contain"
//                   />
//                   <p className="text-sm uppercase font-medium ml-[2.5rem] !text-[18px] text-gray-700">
//                     {item.name}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };


const initialData = [
  {
    img: "assets/home/amenties/soccer-ball-variant.png",
    name: "Football",
    bg: "./assets/home/amenties/badminton-court.webp",
  },
  {
    img: "assets/home/amenties/park.png",
    name: "Forest Trail",
    bg: "./assets/home/amenties/forest_trail.webp",
  },
  {
    img: "assets/home/amenties/dumbbell.png",
    name: "Gym",
    bg: "./assets/home/amenties/gym.webp",
  },
  {
    img: "assets/home/amenties/yoga.png",
    name: "Yoga",
    bg: "./assets/home/amenties/yoga.webp",
  },
  {
    img: "assets/home/amenties/runner.png",
    name: "Jogging Track",
    bg: "./assets/home/amenties/jogging-img.webp",
  },
  {
    img: "assets/home/amenties/tennis.png",
    name: "Tennis Court",
    bg: "./assets/home/amenties/tennis-court.webp",
  },
  {
    img: "assets/home/amenties/table-tennis.png",
    name: "Table Tennis",
    bg: "./assets/home/amenties/table_tennis.webp",
  },
  {
    img: "assets/home/amenties/theater.png",
    name: "Mini Theatre",
    bg: "./assets/home/amenties/mini_theatre.webp",
  },
  {
    img: "assets/home/amenties/pool-table.png",
    name: "Billiards",
    bg: "./assets/home/amenties/billiards.webp",
  },
  {
    img: "assets/home/amenties/massage.png",
    name: "Spa",
    bg: "./assets/home/amenties/spa.webp",
  },
  {
    img: "assets/home/amenties/badminton.png",
    name: "Badminton Court",
    bg: "./assets/home/amenties/badminton-court-1.webp",
  },
  {
    img: "assets/home/amenties/ice-skate.png",
    name: "Skating Rink",
    bg: "./assets/home/amenties/skating_shoe.webp",
  }
];

const Amenties = () => {
  const [data, setData] = useState(initialData);
  const [currentBg, setCurrentBg] = useState(initialData[0].bg);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const itemsRef = useRef([]);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  
  // Store preloaded images
  const preloadedImages = useRef(new Map());

  // Preload all background images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = initialData.map((item) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            preloadedImages.current.set(item.bg, img);
            resolve(img);
          };
          img.onerror = reject;
          img.src = item.bg;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
        console.log('All background images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still allow component to function
      }
    };

    preloadImages();
  }, []);

  // Enhanced background update with crossfade effect
  const updateBackground = (newBg) => {
    // Only proceed if images are preloaded
    if (!imagesLoaded) return;

    // Create a temporary image element for crossfade
    const tempImg = document.createElement('img');
    tempImg.src = newBg;
    tempImg.className = 'absolute top-0 left-0 lg:h-[auto] h-[100%] object-cover w-[100%] opacity-0 transition-opacity duration-300';
    tempImg.style.zIndex = '1';
    
    // Add temp image to section
    sectionRef?.current?.appendChild(tempImg);
    
    // Crossfade animation
    gsap.timeline()
      .to(tempImg, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .call(() => {
        setCurrentBg(newBg);
        // Remove temp image after state update
        setTimeout(() => {
          if (sectionRef.current && sectionRef.current.contains(tempImg)) {
            sectionRef.current.removeChild(tempImg);
          }
        }, 50);
      });
  };

  // Alternative method: Use multiple img elements with opacity transitions
  const updateBackgroundAlternative = (newBg) => {
    gsap.to(sectionRef.current.querySelector('img'), {
      opacity: 0,
      duration: 0.2,
      ease: "power1.in",
      onComplete: () => {
        setCurrentBg(newBg);
        gsap.to(sectionRef.current.querySelector('img'), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  };

  // Desktop carousel navigation
  const goNext = () => {
    gsap.to(itemsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.in",
      onComplete: () => {
        const newData = [...data];
        const first = newData.shift();
        newData.push(first);
        setData(newData);
        updateBackground(newData[0].bg);
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
        updateBackground(newData[0].bg);
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

  // Handle click on desktop carousel items
  const handleDesktopItemClick = (clickedIndex) => {
    if (clickedIndex === 0) return;
    
    gsap.to(itemsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.in",
      onComplete: () => {
        const newData = [...data];
        const clickedItem = newData.splice(clickedIndex, 1)[0];
        newData.unshift(clickedItem);
        setData(newData);
        updateBackground(newData[0].bg);
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

  // Handle click on mobile swiper slides
  const handleMobileSlideClick = (clickedIndex) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(clickedIndex);
    }
  };

  return (
    <>
      {/* Hidden preload images for better browser caching */}
      <div style={{ display: 'none' }}>
        {initialData.map((item, idx) => (
          <img  loading="lazy" 
  decoding="async" key={idx} src={item.bg} alt="" />
        ))}
      </div>

      <section
        id="amenities"
        ref={sectionRef}
        className="w-screen relative bg-top overflow-hidden bg-cover xl:h-[87vh] h-[60vh] bg-center bg-no-repeat"
      >
        {!imagesLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}
        
        <img  loading="lazy" 
  decoding="async" 
          src={currentBg} 
          alt="" 
          className="absolute top-0 left-0 lg:h-[auto] h-[100%] object-cover w-[100%]" 
          style={{ opacity: imagesLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        />
        
        <h2 className="text-white lg:text-white text-center poppins-regular lg:font-[200] z-[1] xl:text-[25px] text-[18px] pt-[35px] pb-[10px] lg:py-[35px] xl:py-[20px] xl:hidden leading-[41px] tracking-[5px] uppercase relative">
          AMENITIES
        </h2>

        <div className="absolute top-[0] left-[0] w-[100%] h-[100%]" style={{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0) 30.58%), linear-gradient(rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0) 50%)"}}></div>

        <CommonHeading text={"AMENTIES"} textColor={"white"} />
        <h2 className="text-[white] z-[999] relative text-[19px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] xl:pt-[40px] uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400 leading-[30px]">
          <span className="xl:block hidden">
            Elevate Your Lifestyle with Exquisite Amenities Designed for
          </span>{" "}
          <span className="xl:block hidden">Comfort, Leisure, and Luxury.</span>
          <span className="xl:hidden block text-[13px] leading-[23px] px-[10px]">
            Elevate Your Lifestyle with Exquisite Amenities Designed for Comfort,
            Leisure, and Luxury.
          </span>
        </h2>

        {/* Desktop carousel */}
        <div className="absolute xl:flex hidden left-0 w-full bottom-[65px] justify-center">
          <div
            ref={containerRef}
            className="bg-[white] amenities_box w-[70%] px-[30px] 2xl:w-[70%] relative flex justify-center py-[1.5rem]"
          >
            <button
              onClick={goPrev}
              className="px-4 py-2 absolute cursor-pointer z-[999] left-[0] text-black rounded"
            >
              <GrFormPrevious className="text-[26px]" />
            </button>
            <button
              onClick={goNext}
              className="px-4 py-2 absolute cursor-pointer right-[0] z-[999] text-black rounded"
            >
              <GrFormNext className="text-[26px]" />
            </button>
            <div className="flex items-center justify-center gap-4 overflow-hidden">
              {data.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  onClick={() => handleDesktopItemClick(i)}
                  className={`transition-all duration-500 flex items-center bg-white rounded-xl ${
                    i === 0
                      ? "w-[50%] justify-start px-4 opacity-[1]"
                      : "w-[50px] justify-end opacity-[0.6] cursor-pointer mr-[15px] hover:opacity-[0.6]"
                  } overflow-hidden`}
                >
                  <img  loading="lazy" 
  decoding="async"
                    src={item.img}
                    alt={item.name}
                    className={`h-[43px] object-contain transition-opacity duration-300 ${
                      i > 0 && "opacity-[0.8]"
                    }`}
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

        {/* Mobile Swiper */}
        <div className="absolute xl:hidden w-[100%] bottom-[40px] flex justify-center overflow-hidden">
          <div className="w-[85%] bg-[white]">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              className="w-full custom-swiper"
              onSlideChange={(swiper) => {
                const activeIndex = swiper.realIndex;
                updateBackground(initialData[activeIndex].bg);
              }}
            >
              {initialData.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  onClick={() => handleMobileSlideClick(idx)}
                  className="!flex !items-center !justify-center cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-4 p-4 bg-white">
                    <img  loading="lazy" 
  decoding="async"
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
    </>
  );
};

export default Amenties;