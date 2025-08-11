'use client';

import React from 'react';
import Image from 'next/image';

const stats = [
  {
    icon: '📅',
    value: '15+',
    label: 'Years of Experience'
  },
  {
    icon: '📊',
    value: '15k+',
    label: 'Happy Customers'
  },
  {
    icon: '📍',
    value: '650+',
    label: 'Destinations'
  },
  {
    icon: '🔄',
    value: '2k+',
    label: 'Successful Trips'
  }
];

const ServiceStats = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Beach background"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brown-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We always try to give you the best service
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStats; 