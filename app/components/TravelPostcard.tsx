'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Subhodip',
    destination: 'Turkey',
    video: '/feedback/WhatsApp Video 2024-02-21 at 16.23.19_fd0537da.mp4'
  },
  {
    name: 'Soumee',
    destination: 'Mauritius',
    video: '/feedback/WhatsApp Video 2024-12-23 at 6.27.27 PM.mp4'
  },
  {
    name: 'Abhishek',
    destination: 'Singapore',
    video: '/feedback/WhatsApp Video 2024-01-11 at 17.30.52.mp4'
  },
  {
    name: 'Poushali',
    destination: 'Vietnam',
    video: '/feedback/WhatsApp Video 2025-07-21 at 4.08.19 PM.mp4'
  }
];

const TravelPostcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleMute = (index: number) => {
    setMutedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="relative">
      <div className="h-50"></div> {/* Spacer div */}
      <section className="py-12 bg-yellow-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-pink-500 text-2xl">❤️</span>
              <h2 className="text-4xl md:text-5xl font-bold text-pink-600 font-cursive">
                Tripsee
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              A message from the heart ❤️
            </p>
            
            <div className="space-y-4">
              <p className="text-xl font-semibold text-pink-600">
                Dream honeymoons crafted perfectly
              </p>
              <p className="text-lg text-gray-600">
                Let your journeys inspire the world ✨
              </p>
            </div>
          </div>

                      {/* Right Side - Video Testimonials */}
            <div className="relative w-full">
              <div className="flex space-x-4 overflow-hidden pb-4 w-full justify-center min-w-[800px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-64 h-96 bg-white rounded-xl shadow-lg border-2 relative transition-transform duration-300 ${
                      index === currentIndex 
                        ? 'border-red-500 scale-105 z-10 order-first' 
                        : (index === (currentIndex + 1) % testimonials.length || index === (currentIndex + 2) % testimonials.length) 
                          ? 'border-gray-300 scale-95 opacity-70' 
                          : 'hidden'
                    }`}
                  >
                  {/* Video */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <video
                      src={testimonial.video}
                      className="w-full h-full object-cover"
                      muted={mutedStates[index] !== false}
                      loop
                      playsInline
                      autoPlay
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600/80 to-transparent p-4">
                      {/* Reaction Icons */}
                      <div className="flex space-x-2 mb-2">
                        <span className="text-pink-400 text-lg">❤️</span>
                        <span className="text-orange-400 text-lg">👍</span>
                        <span className="text-orange-400 text-lg">👍</span>
                        <span className="text-orange-400 text-lg">👍</span>
                        <span className="text-yellow-400 text-lg">😍</span>
                      </div>
                      
                      {/* Customer Info */}
                      <div className="text-white">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <div className="flex items-center space-x-1">
                          <span className="text-white">📍</span>
                          <span>{testimonial.destination}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Travelxploria Logo */}
                    <div className="absolute top-4 left-4 bg-white/80 rounded-full p-2">
                      <span className="text-red-500 font-bold text-sm">Tripsee</span>
                    </div>
                    
                    {/* Speaker Icon */}
                    <button 
                      onClick={() => toggleMute(index)}
                      className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
                    >
                      <span className="text-gray-600">
                        {mutedStates[index] !== false ? '🔇' : '🔊'}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                ←
              </button>
              
                              {/* Pagination Dots */}
                <div className="flex space-x-2">
                  {Array.from({ length: testimonials.length }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === currentIndex ? 'bg-red-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TravelPostcard; 