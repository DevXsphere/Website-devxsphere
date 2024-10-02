// import React, { useState, useEffect, useRef } from 'react';
// import './style/carousel.css';

// const Carousel = () => {
//   const [carouselItems, setCarouselItems] = useState([
//     { id: 1, image: '../image/event.JPG', author: '', title: 'devXsphere gaianet', topic: 'meetup' },
//     { id: 2, image: '../image/event 2.JPG', author: 'Author 2', title: 'Title 2', topic: 'Topic 2' },
//     { id: 3, image: '../image/event 3.JPG', author: 'Author 3', title: 'Title 3', topic: 'Topic 3' },
//     { id: 4, image: '../image/event4.jpg', author: 'Author 4', title: 'Title 4', topic: 'Topic 4' }
//   ]);

//   const timeRunning = 1000;
//   const timeAutoNext = 1100;

//   const carouselRef = useRef(null);
//   const timeRef = useRef(null);

//   useEffect(() => {
//     const runNextAuto = setTimeout(() => {
//       showSlider('next');
//     }, timeAutoNext);

//     return () => clearTimeout(runNextAuto);
//   }, [carouselItems]);

//   const showSlider = (type) => {
//     if (type === 'next') {
//       setCarouselItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
//       carouselRef.current.classList.add('next');
//     } else {
//       setCarouselItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
//       carouselRef.current.classList.add('prev');
//     }

//     clearTimeout(timeRef.current);
//     timeRef.current = setTimeout(() => {
//       carouselRef.current.classList.remove('next');
//       carouselRef.current.classList.remove('prev');
//     }, timeRunning);
//   };

//   return (
//     <div className="carousel" ref={carouselRef}>
//       <div className="list">
//         {carouselItems.map((item, index) => (
//           <div className="item" key={index}>
//             <img src={item.image} alt={`Carousel item ${item.id}`} />
//             <div className="content">
//               <div className="author">{item.author}</div>
//               <div className="title">{item.title}</div>
//               <div className="topic">{item.topic}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="arrows">
//         <button id="prev" onClick={() => showSlider('prev')}>Prev</button>
//         <button id="next" onClick={() => showSlider('next')}>Next</button>
//       </div>
//       <div className="time"></div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect, useRef } from "react";
import "./style/carousel2.css";
import sunImg from "../public/image/sun-light.png";
import moonImg from "../public/image/moon-light.png";

const Carousel = () => {
  // toggle button
  const [theme, setTheme] = useState("light");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Set theme based on system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const [carouselItems, setCarouselItems] = useState([
    {
      id: 1,
      image: "../image/event.JPG",
      author: "",
      title: "devXsphere gaianet",
      topic: "meetup",
    },
    {
      id: 2,
      image: "../image/event 2.JPG",
      author: "Author 2",
      title: "Title 2",
      topic: "Topic 2",
    },
    {
      id: 3,
      image: "../image/event 3.JPG",
      author: "Author 3",
      title: "Title 3",
      topic: "Topic 3",
    },
    {
      id: 4,
      image: "../image/event4.jpg",
      author: "Author 4",
      title: "Title 4",
      topic: "Topic 4",
    },
  ]);

  const timeRunning = 1000;
  const timeAutoNext = 1100;

  const carouselRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [carouselItems]);

  const showSlider = (type) => {
    if (type === "next") {
      setCarouselItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      carouselRef.current.classList.add("next");
    } else {
      setCarouselItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);
  };

  return (
    <div className="carousel-body">
      <div className="carousel-container">
        <div className="toggle w-16 h-16">
          {theme === "light" ? (
            <img
              src={moonImg}
              alt="Switch to Dark Mode"
              onClick={() => toggleTheme("dark")}
              className="w-12 h-12 cursor-pointer bg-none"
            />
          ) : (
            <img
              src={sunImg}
              alt="Switch to Light Mode"
              onClick={() => toggleTheme("light")}
              className="w-12 h-12 cursor-pointer"
            />
          )}
        </div>
        {/* Title Section */}
        <div className="title-container">
          <h1 className="carousel-title dark:text-white">
            devXsphere
            <span className="infinite-logo"> ∞ </span>
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="carousel" ref={carouselRef}>
          <div className="list">
            {carouselItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.image} alt={`Carousel item ${item.id}`} />
                <div className="content">
                  <div className="author">{item.author}</div>
                  <div className="title">{item.title}</div>
                  <div className="topic">{item.topic}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="arrows">
            <button id="prev" onClick={() => showSlider("prev")}>
              Prev
            </button>
            <button id="next" onClick={() => showSlider("next")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
