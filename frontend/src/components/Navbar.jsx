import React, { useState } from "react";
import "./style/Navbar.css";

export default function Navbar() {
  const [spanStyle, setSpanStyle] = useState({ left: "0px", width: "95px" });
  const widthMapping = [95, 94, 110, 115, 110];

  const handleHover = (index) => {
    const leftPosition =
      index === 0 ? 0 : widthMapping.slice(0, index).reduce((a, b) => a + b, 0);
    setSpanStyle({
      left: `${leftPosition}px`,
      width: `${widthMapping[index]}px`,
    });
  };

  return (
    <div className="block md:relative z-50">
      <nav className="fixed bottom-5 transform -translate-x-1/2 bg-[#4F46E5] rounded-lg flex justify-center items-center navbar">
        {["Home", "Events", "Resources", "Team", "Join"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="block md:relative md:inline-block text-white text-base font-sm font-semibold md:font-medium px-2 md:px-6 z-50 navbar-item"
              onMouseEnter={() => handleHover(index)}
            >
              {item}
            </a>
          )
        )}
        <span
          className="absolute top-0 left-0 rounded-lg transition-all duration-500"
          style={{ left: spanStyle.left, width: spanStyle.width }}
        />
      </nav>
    </div>
  );
}
