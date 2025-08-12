'use client';

import React from 'react';
import Image from 'next/image';

const travelVibes = [
  {
    name: 'Family Vacation',
    image: '/TravelVibes/Family.jpeg',
    textColor: 'text-red-700',
    position: 'top-left'
  },
  {
    name: 'Honey Moon',
    image: '/TravelVibes/honeyMoon.jpeg',
    textColor: 'text-white',
    position: 'bottom-right'
  },
  {
    name: 'Hill Station',
    image: '/TravelVibes/HillStation.jpeg',
    textColor: 'text-white',
    position: 'bottom-center'
  },
  {
    name: 'BEACH HOLIDAY',
    image: '/TravelVibes/BeachHoliday.jpeg',
    textColor: 'text-blue-300',
    position: 'top-center'
  },
  {
    name: 'ADVENTURE',
    image: '/TravelVibes/Adventure.jpeg',
    textColor: 'text-white',
    position: 'bottom-left'
  },
  {
    name: 'Tour By LARGE TEAM',
    image: '/TravelVibes/GroupTravel.jpeg',
    textColor: 'text-white',
    position: 'center'
  }
];

const TravelVibes = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Rounded Container */}
        <div className="bg-gradient-to-r from-orange-300 via-yellow-200 to-blue-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 xl:p-16 shadow-xl">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 mb-3 md:mb-4">
              Pick Your Travel Vibes
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              From sun-kissed beaches to adrenaline-packed adventures, discover curated getaways crafted to match your travel vibe. It&apos;s not just a trip, it&apos;s your story waiting to unfold.
            </p>
          </div>

          {/* Travel Vibes Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {travelVibes.map((vibe) => (
              <div
                key={vibe.name}
                className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src={vibe.image}
                    alt={vibe.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Text Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center p-2 ${vibe.textColor}`}>
                    <div className="text-center">
                      {vibe.name.includes('LARGE TEAM') ? (
                        <div>
                          <div className="text-xs font-light mb-1">Tour By</div>
                          <div className="text-sm font-bold">LARGE TEAM</div>
                        </div>
                      ) : (
                        <div className={`text-sm font-semibold ${
                          vibe.name === 'BEACH HOLIDAY' || vibe.name === 'ADVENTURE' 
                            ? 'font-bold' 
                            : 'font-medium'
                        }`}>
                          {vibe.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelVibes; 
