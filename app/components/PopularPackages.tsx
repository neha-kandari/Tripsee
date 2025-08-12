'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Package {
  id: string;
  image: string;
  days: string;
  title: string;
  location: string;
  price: string;
  type: string;
  hotelRating: number;
  features: string[];
  highlights: string;
  createdAt: string;
  updatedAt: string;
}

const PopularPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Fetch packages from all destinations
        const response = await fetch('/api/admin/destinations');
        if (response.ok) {
          const destinations = await response.json();
          // Get all packages from all destinations
          const allPackages = Object.values(destinations).flatMap((dest: any) => dest.packages || []);
          setPackages(allPackages);
        } else {
          // Fallback to default packages if API fails
          setPackages([
            {
              id: 'fallback-1',
              image: '/mystical_coastline/Bali.jpg',
              days: '5 Nights 6 Days',
              title: 'Bali Bliss Getaway - Premium Package',
              location: 'Ubud & Seminyak',
              price: '₹42,999/-',
              type: 'Premium',
              hotelRating: 4,
              features: ['Ubud Tour', 'Beach Hopping', 'Spa Treatment'],
              highlights: 'Ubud Temple Tour • Beach Hopping • Traditional Dance Show • Spa Treatment',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            },
            {
              id: 'fallback-2',
              image: '/mystical_coastline/Maldives.jpg',
              days: '4 Nights 5 Days',
              title: 'Lagoon Escape - Luxury Package',
              location: 'Male & Resort Islands',
              price: '₹55,000/-',
              type: 'Premium',
              hotelRating: 5,
              features: ['Water Villa (1N)', 'Beach Resort', 'All Meals'],
              highlights: 'Water Villa Stay • Beach Resort • All Meals Included • Water Sports',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            }
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch packages:', error);
        // Set fallback packages on error
        setPackages([
          {
            id: 'error-fallback-1',
            image: '/mystical_coastline/Bali.jpg',
            days: '5 Nights 6 Days',
            title: 'Bali Bliss Getaway - Premium Package',
            location: 'Ubud & Seminyak',
              price: '₹42,999/-',
              type: 'Premium',
              hotelRating: 4,
              features: ['Ubud Tour', 'Beach Hopping', 'Spa Treatment'],
              highlights: 'Ubud Temple Tour • Beach Hopping • Traditional Dance Show • Spa Treatment',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Popular Packages
            </h2>
          </div>
          <div className="text-center py-12">
            <div className="text-gray-500">Loading packages...</div>
          </div>
        </div>
      </section>
    );
  }

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
              key={pkg.id || `package-${pkg.title}-${Math.random()}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
                              <div className="flex h-48">
                  {/* Image Section - Left Side */}
                  <div className="relative w-2/5 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title || 'Travel Package'}
                      fill
                      className="object-cover rounded-l-2xl"
                    />
                  </div>

                  {/* Details Section - Right Side */}
                  <div className="w-3/5 p-3 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-800 mb-1 font-libre-franklin">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-1 font-libre-franklin">
                        {pkg.days}
                      </p>
                      <p className="text-xs text-gray-500 mb-2 font-libre-franklin">
                        {pkg.location}
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
