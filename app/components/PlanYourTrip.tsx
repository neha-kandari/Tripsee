'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '🔄',
    title: 'Exclusive Trip',
    description: 'Experience unique and personalized travel packages tailored just for you.'
  },
  {
    icon: '👨‍💼',
    title: 'Professional Guide',
    description: 'Travel with experienced guides who know every destination inside out.'
  }
];

const PlanYourTrip = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          
          {/* Left Section - Image Collage */}
          <div className="lg:col-span-1">
            <div className="relative">
              <Image
                src="/Container.png"
                alt="Travel collage"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Middle Section - Content */}
          <div className="lg:col-span-1">
            <div className="space-y-4 md:space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  Plan Your Trip
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                  With us
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 md:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="pt-2 md:pt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Person Image */}
          <div className="lg:col-span-1">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Circular background */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/Person.png"
                    alt="Traveler"
                    width={300}
                    height={400}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip; 
