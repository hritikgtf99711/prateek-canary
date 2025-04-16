import React from "react";
import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const images = [
  {
    id: 1,
    url: "/assets/home/gallery/1.jpg",
  },
  {
    id: 2,
    url: "/assets/home/gallery/2.jpg",
  },
  {
    id: 3,
    url: "/assets/home/gallery/3.jpg",
  },
  {
    id: 4,
    url: "/assets/home/gallery/4.png",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <section className="relative w-screen h-[75vh] xl:h-screen">
      {/* Title */}
      <h2 className="z-[2] text-[18px] xl:text-white text-black py-6 text-center xl:absolute xl:left-[55px] xl:top-[70%] xl:rotate-[-90deg] xl:translate-y-[-50%] xl:origin-top-left xl:text-[35px] tracking-[4px] uppercase font-light poppins-regular">
        GALLERY
      </h2>

      {/* Image Slides */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 30.58%),
linear-gradient(to bottom, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.00) 20.58%),
            url(${img.url})
          `,
            }}
          >
            <h2 className="text-white text-[13px] leading-[23px] px-[10px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px]  sm:text-[18px] uppercase font-light text-center pt-10  sm:leading-[30px] tracking-[1px] max-w-[90%] mx-auto z-[2] playfair-display-400">
              See the Spaces Where Memories Begin – A Visual Journey Through
              Your Future Home.
            </h2>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute xl:bottom-[30px] bottom-[108px] w-full px-4 flex justify-center items-center gap-2 xl:gap-5 z-[3]">
          {/* Left Arrow */}
          <button onClick={prevSlide} className=" block">
            <RiArrowLeftSLine className="text-white text-3xl sm:text-4xl" />
          </button>

          {/* Dots/Thumbnails */}
          <div className="flex items-center gap-3 sm:gap-5 overflow-x-scroll max-w-full scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(index)}
                className={`bg-cover bg-center transition-all duration-300 border-[1px] border-solid  border-white
                  bg-[linear-gradient(180deg,rgba(0,0,0,0)_60.58%,rgba(0,0,0,0.71)_100%)]
                  ${
                    index === currentIndex
                      ? "border-black xl:w-[120px] xl:h-[120px]  w-[70px] h-[70px]"
                      : "border-transparent xl:w-[100px] xl:h-[100px] h-[60px] w-[60px]"
                  }
                  `}
                style={{
                  // width: index === currentIndex ? "120px" : "100px",
                  // height: index === currentIndex ? "120px" : "100px",
                  backgroundImage: `url(${img.url})`,
                }}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="block">
            <RiArrowRightSLine className="text-white text-3xl sm:text-4xl" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
