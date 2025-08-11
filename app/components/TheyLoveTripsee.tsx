'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Sara Mohamed',
    location: 'Jakarta',
    title: 'The best booking system',
    content: 'I\'ve been using the hotel booking system for several years now, and it\'s become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.',
    rating: 5,
    image: '/testimonials/sara.jpg'
  },
  {
    name: 'Atend John',
    location: 'California',
    title: 'The best booking system',
    content: 'I\'ve been using the hotel booking system for several years now, and it\'s become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.',
    rating: 5,
    image: '/testimonials/atend.jpg'
  },
  {
    name: 'Sara Mohamed',
    location: 'Jakarta',
    title: 'The best booking system',
    content: 'I\'ve been using the hotel booking system for several years now, and it\'s become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.',
    rating: 5,
    image: '/testimonials/sara.jpg'
  },
  {
    name: 'Atend John',
    location: 'California',
    title: 'The best booking system',
    content: 'I\'ve been using the hotel booking system for several years now, and it\'s become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.',
    rating: 5,
    image: '/testimonials/atend.jpg'
  }
];

const TheyLoveTripsee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Header and Illustration */}
          <div className="space-y-8">
            {/* Header Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                They Love Tripseee
              </h2>
              <p className="text-gray-600">
                What our clients are saying about us?
              </p>
            </div>
            
            {/* Travel Illustration */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <img
                src="/assets/illustration.jpg"
                alt="Travel illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Testimonials with Navigation */}
          <div className="space-y-6">
            {/* Navigation Dots */}
            <div className="flex justify-end space-x-2 mb-4">
              {Array.from({ length: testimonials.length }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Cards */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-3 transition-transform duration-300" style={{
                transform: `translateX(-${currentIndex * 25}%)`
              }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-64 bg-white rounded-xl p-4 shadow-lg border border-gray-200 ${
                      index === currentIndex || 
                      index === (currentIndex + 1) % testimonials.length || 
                      index === (currentIndex + 2) % testimonials.length || 
                      index === (currentIndex + 3) % testimonials.length ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Title */}
                      <h3 className="font-semibold text-gray-900 text-base">
                        {testimonial.title}
                      </h3>
                      
                      {/* Content */}
                      <p className="text-gray-700 leading-relaxed text-xs">
                        {testimonial.content}
                      </p>
                      
                      {/* Customer Info */}
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-semibold text-xs">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xs">{testimonial.name}</h4>
                          <p className="text-xs text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={prevSlide}
                className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <span className="text-white text-sm">←</span>
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <span className="text-white text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheyLoveTripsee; 