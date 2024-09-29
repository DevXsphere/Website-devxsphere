import React, { useState, useEffect, useRef } from 'react';
import './style/carousel.css';

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([
    { id: 1, image: '../image/img1.jpg', author: 'Author 1', title: 'Title 1', topic: 'Topic 1' },
    { id: 2, image: '../image/img2.jpg', author: 'Author 2', title: 'Title 2', topic: 'Topic 2' },
    { id: 3, image: '../image/img3.jpg', author: 'Author 3', title: 'Title 3', topic: 'Topic 3' },
    { id: 3, image: '../image/img4.jpg', author: 'Author 4', title: 'Title 4', topic: 'Topic 4' }
  ]);

  const [thumbnails, setThumbnails] = useState([
    { id: 1, image: '../image/img1.jpg' },
    { id: 2, image: '../image/img2.jpg' },
    { id: 3, image: '../image/img3.jpg' },
    { id: 3, image: '../image/img4.jpg' }
  ]);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const carouselRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [carouselItems]);

  const showSlider = (type) => {
    if (type === 'next') {
      setCarouselItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnails((prevThumbnails) => [...prevThumbnails.slice(1), prevThumbnails[0]]);
      carouselRef.current.classList.add('next');
    } else {
      setCarouselItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
      setThumbnails((prevThumbnails) => [prevThumbnails[prevThumbnails.length - 1], ...prevThumbnails.slice(0, -1)]);
      carouselRef.current.classList.add('prev');
    }

    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, timeRunning);
  };

  return (
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
      <div className="thumbnail">
        {thumbnails.map((thumb, index) => (
          <div className="item" key={index}>
            <img src={thumb.image} alt={`Thumbnail ${thumb.id}`} />
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>
          Prev
        </button>
        <button id="next" onClick={() => showSlider('next')}>
          Next
        </button>
      </div>
      <div className="time">        
      </div>
    </div>
    
  );
};

export default Carousel;

