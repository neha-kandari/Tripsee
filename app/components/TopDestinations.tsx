'use client';

import React from 'react';
import Image from 'next/image';

const destinations = [
  { name: 'Bali', description: 'Island Paradise', image: '/Destination/Bali.jpeg' },
  { name: 'Veitnam', description: 'Timeless Charm', image: '/Destination/Vietnam.jpeg' },
  { name: 'Singapore', description: 'Modern Marvel', image: '/Destination/Singapore.jpeg' },
  { name: 'Thailand', description: 'Land of Smiles', image: '/Destination/Thailand.jpeg' },
  { name: 'Malaysia', description: 'Cultural Fusion', image: '/Destination/Malasia.jpeg' },
  { name: 'Dubai', description: 'Desert Dreams', image: '/Destination/Dubai.jpeg' },
  { name: 'Maldives', description: 'Ocean Serenity', image: '/Destination/Maldives.jpeg' },
  { name: 'Andaman', description: 'Tropical Bliss', image: '/Destination/andaman.jpeg' }
];

const TopDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <div className="text-orange-500 text-3xl md:text-4xl font-arizonia mb-1">top</div>
            <div className="text-gray-800 -mt-2">Destinations</div>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            It&apos;s hard enough deciding to move, you don&apos;t have to worry about where to move to. 
            These are some of the most popular and best locations to move to based on a number of factors.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Base Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Orange Translucent Overlay - Visible on Hover */}
                  <div className="absolute inset-0 bg-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Destination Name and Description - Always Visible */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h3 className="text-white text-2xl font-bold font-limelight mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium italic">
                      {destination.description}
                    </p>
                  </div>
                  
                  {/* View Package Button - Visible on Hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
                      View Package
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations; 