import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { RiArrowUpSLine } from "react-icons/ri";
import "./index.css";
import React, { useRef, useEffect, useState } from "react";
export default function App() {
  const scrollRef = useRef(null);
  const scrollbarTrackRef = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);

  function getCustomScrollbarHeight() {
    if (window.innerWidth <= 991) {
      return 0.6499 * window.innerHeight;
    } else {
      return 0.769 * window.innerHeight; // or whatever default you want for larger screens
    }
  }

  const SCROLLBAR_HEIGHT = getCustomScrollbarHeight();

  useEffect(() => {
    const container = scrollRef.current;
    const handleResize = () => {
      if (!container) return;

      const visibleRatio = container.clientHeight / container.scrollHeight;
      const newThumbHeight = SCROLLBAR_HEIGHT * visibleRatio;
      setThumbHeight(newThumbHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [SCROLLBAR_HEIGHT]);

  const handleScrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollRatio =
      container.scrollTop / (container.scrollHeight - container.clientHeight);
    const maxThumbTop = SCROLLBAR_HEIGHT - thumbHeight;
    setThumbTop(maxThumbTop * scrollRatio);
  };

  const handleTrackClick = (e) => {
    const container = scrollRef.current;
    const track = scrollbarTrackRef.current;
    if (!container || !track) return;

    const trackRect = track.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;

    const thumbOffset = thumbHeight / 2;
    const newThumbTop = clickY - thumbOffset;
    const maxThumbTop = SCROLLBAR_HEIGHT - thumbHeight;

    const clampedThumbTop = Math.max(0, Math.min(newThumbTop, maxThumbTop));
    const scrollRatio = clampedThumbTop / maxThumbTop;
    const newScrollTop =
      scrollRatio * (container.scrollHeight - container.clientHeight);

    container.scrollTo({ top: newScrollTop, behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full bg-gray-100 overflow-hidden flex justify-center">
      <div
        className="scroll-container relative overflow-y-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <Router>
          <Routes>
            <Route path={import.meta.env.VITE_BASE_URL} element={<Home />} />
          </Routes>
        </Router>
        <footer className="custom-bg-green relative pt-[40px] xl:px-[100px] pb-[100px] flex justify-center items-center flex-col text-[white]">
          <button onClick={handleScrollToTop}>
            <RiArrowUpSLine className="cursor-pointer absolute xl:bottom-[14%] bottom-[8%] right-[41px] xl:right-[74px] font-[300] text-[50px]" />
          </button>

          <img
            src={`${import.meta.env.VITE_BASE_URL}/assets/home/logo_white.png`}
            className="h-[65px] mb-[8px]"
            alt="logo"
          />
          <p className="px-[80px] playfair-display-500 tracking-[1px] uppercase">
            Haven Realty
          </p>
          <p className=" xl:px-[80px] px-[20px] text-center poppins-regular my-[30px] text-[12px] tracking-[1px] leading-[23px]">
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
            floor plans, furniture layout, fittings, illustrations,
            specifications, designs, dimensions, rendered views, colours,
            amenities and facilities etc. are subject to change without
            notifications as may be required by the relevant authorities or the
            Developer’s architect. Read More
          </p>
        </footer>
      </div>

      <div
        ref={scrollbarTrackRef}
        onClick={handleTrackClick}
        className="fixed xl:top-[70px] top-[100px] rounded-full right-[15px] xl:right-[30px] z-[3] w-1 bg-white  xl:h-[76vh] h-[65vh] cursor-pointer"
      >
        <div
          className="bg-green-800 rounded-full transition-all duration-100"
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
