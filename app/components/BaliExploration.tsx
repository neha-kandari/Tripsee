'use client';

import React from 'react';
import Image from 'next/image';

const BaliExploration = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Explore Bali
          </h2>
          <p className="text-orange-600 text-xl md:text-2xl font-medium">
            Island Bliss
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-6">
          {/* Left Side - Large top image + 2 small side-by-side below */}
          <div className="col-span-1 row-span-2 flex flex-col gap-4">
            {/* Top - Kecak Dance (Large horizontal) */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/bali/download.jpeg"
                alt="Kecak Dance Performance"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                Kecak Dance
              </div>
            </div>

            {/* Bottom - 2 small images side by side */}
            <div className="flex gap-4">
              {/* Luxury Resort */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/BaliResort.jpeg"
                  alt="Luxury Resort"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Luxury Resort
                </div>
              </div>

              {/* Lempuyang Temple */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/download (1).jpeg"
                  alt="Lempuyang Temple"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Lempuyang Temple
                </div>
              </div>
            </div>
          </div>

          {/* Center Large - Ulun Danu Beratan */}
          <div className="col-span-1 row-span-2">
            <div className="relative h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/bali/Pura Balinese Temples – Bali (Indonesia).jpeg"
                alt="Ulun Danu Beratan Temple"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Ulun Danu Beratan</h3>
                <p className="text-sm opacity-90">Iconic temple on Lake Bratan</p>
              </div>
            </div>
          </div>

          {/* Right Side - Large top image + 2 small side-by-side below */}
          <div className="col-span-1 row-span-2 flex flex-col gap-4">
            {/* Top - Temple Entrance (Large horizontal) */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <Image
                src="/Destination/bali/download.jpeg"
                alt="Temple Entrance"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                Temple Entrance
              </div>
            </div>

            {/* Bottom - 2 small images side by side */}
            <div className="flex gap-4">
              {/* Tanah Lot Sunset */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/Tanah Lot Temple - Bali Indonesia.jpeg"
                  alt="Tanah Lot Sunset"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Tanah Lot Sunset
                </div>
              </div>

              {/* Broken Beach */}
              <div className="relative flex-1 h-24 md:h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Image
                  src="/Destination/bali/diamond beach bali.jpeg"
                  alt="Broken Beach"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold group-hover:scale-105 transition-transform duration-300">
                  Broken Beach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaliExploration;
