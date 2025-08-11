'use client';

import React from 'react';
import Image from 'next/image';

const packages = [
  {
    name: 'Bali Bliss Getaway',
    duration: '5D/4N',
    inclusions: 'Ubud Tour, Beach Hopping',
    price: 'INR42,999/-',
    image: '/mystical_coastline/Bali.jpg'
  },
  {
    name: 'Lagoon Escape',
    duration: '4D/3N',
    inclusions: 'Water Villa (1N), Beach Resort, Meals',
    price: 'INR55,000/-',
    image: '/mystical_coastline/Maldives.jpg'
  },
  {
    name: 'Thai Explorer',
    duration: '6D/5N',
    inclusions: 'Island Tour, Thai Dinner',
    price: 'INR42,999/-',
    image: '/mystical_coastline/thailand.jpg'
  },
  {
    name: 'Dubai',
    duration: '5D/4N',
    inclusions: 'City Tour, Desert Safari',
    price: 'INR42,999/-',
    image: '/mystical_coastline/dubai.jpg'
  },
  {
    name: 'Magical Malaysia',
    duration: '5D/4N',
    inclusions: 'Theme Park, Cable Car',
    price: 'INR42,999/-',
    image: '/mystical_coastline/malaysia.jpg'
  },
  {
    name: 'Island Discovery',
    duration: '6D/5N',
    inclusions: 'Havelock Stay, Snorkeling, Cruise Ride',
    price: 'INR42,999/-',
    image: '/mystical_coastline/andaman.jpg'
  }
];

const PopularPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Popular Packages
          </h2>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="flex h-48">
                {/* Image Section - Left Side */}
                <div className="relative w-2/5 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover rounded-l-2xl"
                  />
                </div>

                {/* Details Section - Right Side */}
                <div className="w-3/5 p-3 bg-gray-50 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1 font-libre-franklin">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1 font-libre-franklin">
                      {pkg.duration}
                    </p>
                    <p className="text-xs text-gray-500 mb-2 font-libre-franklin">
                      {pkg.inclusions}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-base font-bold text-gray-800 font-libre-franklin">
                      {pkg.price}
                    </div>
                    <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-2 py-1 rounded text-xs font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 font-libre-franklin whitespace-nowrap">
                      View Package
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

export default PopularPackages; 