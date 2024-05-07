"use client";
import React, { useEffect, useState } from "react";

const SliderImage = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = () => {
      try {
        // Adjust this line for 5 images from slider7.jpg to slider11.jpg
        const data = Array.from(
          { length: 5 },
          (_, i) => `/slider/slider${i}.jpg`
        );
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container relative w-screen">
      {images.length > 0 && (
        <>
          <img
            src={images[currentIndex]}
            alt="Slider Image"
            className="w-screen h-[600px]"
          />
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
            onClick={goToPreviousSlide}
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
            onClick={goToNextSlide}
          >
            &gt;
          </button>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2 mb-4">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SliderImage;