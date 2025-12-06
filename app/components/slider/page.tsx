'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

const slides = [
  { src: '/images/slider1.jpg', alt: 'Majestic mountains' },
  { src: '/images/slider2.jpg', alt: 'Serene lake house' },
  { src: '/images/slider3.jpg', alt: 'Enchanting forest path' },
];

export default function SliderPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [goToNext]);

  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button onClick={goToPrevious} aria-label="Previous slide" className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={goToNext} aria-label="Next slide" className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
