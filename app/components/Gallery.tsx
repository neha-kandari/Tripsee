'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/mystical_coastline/Bali.jpg',
    alt: 'Kelingking Beach - Nusa Penida'
  },
  {
    src: '/Destination/bali/diamond beach bali.jpeg',
    alt: 'Diamond Beach - Nusa Penida'
  },
  {
    src: '/Destination/bali/Tanah Lot Temple - Bali Indonesia.jpeg',
    alt: 'Tanah Lot Temple - Bali'
  },
  {
    src: '/mystical_coastline/Maldives.jpg',
    alt: 'Tropical Beach'
  },
  {
    src: '/Destination/bali/Vietnam_beach.jpeg',
    alt: 'Traditional Boat - Vietnam'
  },
  {
    src: '/Destination/bali/BaliResort.jpeg',
    alt: 'Multi-tiered Resort'
  },
  {
    src: '/Destination/bali/Pura Balinese Temples – Bali (Indonesia).jpeg',
    alt: 'Pura Lempuyang Temple - Bali'
  },
  {
    src: '/mystical_coastline/thailand.jpg',
    alt: 'Coastal Scene'
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8">
          <div className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full mb-2 shadow-md">
            <span className="text-lg font-semibold italic">Gallery</span>
          </div>
          <p className="text-gray-700">Visit our customers tour gallery</p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative overflow-hidden h-96 mb-8">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-96 relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {galleryImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* See More Link */}
        <div className="text-center">
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
 