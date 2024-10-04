import React, { useState, useEffect } from "react";
import Sheet from "react-modal-sheet";

export default function Navbar() {
  const [spanStyle, setSpanStyle] = useState({ left: "0px", width: "95px" });
  const [widthMapping, setWidthMapping] = useState([95, 94, 110, 115, 110]);

  // Handle screen resize and adjust widthMapping based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // For smaller screens (mobile)
        setWidthMapping([70, 68, 80, 85, 80]); // Adjust these values as per design
      } else {
        // For larger screens (desktop)
        setWidthMapping([95, 94, 110, 115, 110]);
      }
    };

    // Call the function initially
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = (index) => {
    const leftPosition =
      index === 0 ? 0 : widthMapping.slice(0, index).reduce((a, b) => a + b, 0);
    setSpanStyle({
      left: `${leftPosition}px`,
      width: `${widthMapping[index]}px`,
    });
  };
  return (
    <div className="relative z-50">
  <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[524px] h-[50px] bg-[#4F46E5] rounded-lg flex justify-around sm:justify-center items-center">
    <a
      href="#"
      className="relative inline-block text-white text-sm sm:text-base font-medium px-2 sm:px-6 z-10"
      onMouseEnter={() => handleHover(0)}
    >
      Home
    </a>
    <a
      href="#event"
      className="relative inline-block text-white text-sm sm:text-base font-medium px-2 sm:px-6 z-10"
      onMouseEnter={() => handleHover(1)}
    >
      Events
    </a>
    <a
      href="#"
      className="relative inline-block text-white text-sm sm:text-base font-medium px-2 sm:px-6 z-10"
      onMouseEnter={() => handleHover(2)}
    >
      Resources
    </a>
    <a
      href="#team"
      className="relative inline-block text-white text-sm sm:text-base font-medium px-2 sm:px-6 z-10"
      onMouseEnter={() => handleHover(3)}
    >
      Team
    </a>
    <a
      href="#join-us"
      className="relative inline-block text-white text-sm sm:text-base font-medium px-2 sm:px-6 z-10"
      onMouseEnter={() => handleHover(4)}
    >
      Join Us
    </a>
    <span
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#222] to-[#BC3482] rounded-lg transition-all duration-500"
      style={{ left: spanStyle.left, width: spanStyle.width }}
    />
  </nav>
</div>

  );
}
