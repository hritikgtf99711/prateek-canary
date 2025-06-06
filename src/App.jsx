import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYouPage from "./pages/Thankyou";
import { RiArrowUpSLine } from "react-icons/ri";
import "./index.css";
import React, { useRef, useEffect, useState } from "react";
import Desclaimer from "./pages/Desclaimer";

export default function App() {
  const scrollRef = useRef(null);
  const scrollbarTrackRef = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);

  function getCustomScrollbarHeight() {
    if (window.innerWidth <= 991) {
      return 0.6499 * window.innerHeight;
    } else {
      return 0.769 * window.innerHeight;
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
            <Route
              path={import.meta.env.VITE_BASE_URL + "remarketing"}
              element={<Home />}
            />

            <Route
              path={import.meta.env.VITE_BASE_URL + "demand-gen"}
              element={<Home />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "branding"}
              element={<Home />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "thank-you"}
              element={<ThankYouPage />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "demand-gen/thank-you"}
              element={<ThankYouPage />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "remarketing/thank-you"}
              element={<ThankYouPage />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "branding/thank-you"}
              element={<ThankYouPage />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "demand-gen/disclaimer"}
              element={<Desclaimer />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "remarketing/disclaimer"}
              element={<Desclaimer />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "branding/disclaimer"}
              element={<Desclaimer />}
            />
            <Route
              path={import.meta.env.VITE_BASE_URL + "disclaimer"}
              element={<Desclaimer />}
            />
          </Routes>
        </Router>
      </div>

      <div
        ref={scrollbarTrackRef}
        onClick={handleTrackClick}
        className="fixed  top-[52%] z-[99999] translate-y-[-50%] rounded-full right-[15px] xl:right-[30px] z-[3] w-[0.12rem] xl:w-1 bg-white  xl:h-[76vh] h-[65vh] cursor-pointer"
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
