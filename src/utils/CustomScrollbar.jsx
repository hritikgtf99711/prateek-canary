import React, { useRef, useEffect, useState } from "react";

export default function ScrollWithCustomBar() {
  const scrollRef = useRef(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);

  // Calculate the thumb height
  useEffect(() => {
    const container = scrollRef.current;
    const handleResize = () => {
      const visibleRatio = container.clientHeight / container.scrollHeight;
      setThumbHeight(container.clientHeight * visibleRatio);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update thumb position on scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollRatio = container.scrollTop / container.scrollHeight;
    const maxThumbTop = container.clientHeight - thumbHeight;
    setThumbTop(maxThumbTop * scrollRatio);
  };

  return (
    <div className="relative h-screen">
      <div
        className="scroll-container overflow-y-scroll h-full pr-2"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {/* Your scrollable content */}
        <App />
      </div>

      {/* Custom scrollbar */}
      <div className="absolute top-0 right-1 w-1 h-full bg-transparent pointer-events-none">
        <div
          className="bg-green-900 rounded-full transition-all duration-100"
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
