'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    '/videos/Thailand.mp4',
    '/videos/veitnam.mp4',
    '/videos/bali.mp4'
  ];

  const destinations = [
    { name: 'Bali', icon: '/icons/Bali.png' },
    { name: 'Vietnam', icon: '/icons/Veitnam.png' },
    { name: 'Singapore', icon: '/icons/Singapore.png' },
    { name: 'Thailand', icon: '/icons/Thailand.png' },
    { name: 'Malaysia', icon: '/icons/malaysia.png' },
    { name: 'Dubai', icon: '/icons/Dubai.png' },
    { name: 'Maldives', icon: '/icons/Maldives.png' },
    { name: 'Andamans', icon: '/icons/Andaman.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Main Content Area with Animated Heading */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">
            {/* Animated Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="block animate-slide-in-left">Welcome to</span>
              <span className="block animate-slide-in-right bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Tripsee
              </span>
            </h1>
            
            {/* Animated Subtext */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up-delay max-w-2xl mx-auto leading-relaxed">
              Discover amazing destinations and create unforgettable memories with our curated travel experiences
            </p>
            
            {/* Animated Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                Explore Destinations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
                View Packages
              </button>
            </div>
          </div>
        </div>

        {/* Destination Icons at Bottom */}
        <div className="relative z-20 pb-4 md:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile: Grid layout for better mobile experience */}
            <div className="grid grid-cols-4 gap-4 md:hidden">
              {destinations.map((destination) => (
                <div
                  key={destination.name}
                  className="group cursor-pointer transform hover:scale-110 transition-all duration-300 flex flex-col items-center"
                >
                  <div className="relative">
                    <Image
                      src={destination.icon}
                      alt={destination.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 filter drop-shadow-lg"
                    />
                    {/* Gradient overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-white text-xs font-medium leading-tight">
                      {destination.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet and Desktop: Horizontal layout with responsive spacing */}
            <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12 xl:space-x-16">
              {destinations.map((destination) => (
                <div
                  key={destination.name}
                  className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={destination.icon}
                      alt={destination.name}
                      width={48}
                      height={48}
                      className="w-14 h-14 lg:w-16 lg:h-16 filter drop-shadow-lg"
                    />
                    {/* Gradient overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-white text-sm lg:text-base font-medium">
                      {destination.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
