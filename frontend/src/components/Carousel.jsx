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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
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
    <div className="carousel-container">
      {/* Title Section */}
      <div className="title-container">
        <h1 className="carousel-title">
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
          <button
            id="prev"
            onClick={() => showSlider("prev")}
            className="opacity-60"
          >
            <FaArrowLeft />
          </button>
          <button
            id="next"
            onClick={() => showSlider("next")}
            className="opacity-60"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
