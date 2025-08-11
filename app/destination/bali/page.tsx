'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Limelight, Lalezar } from 'next/font/google';

const limelight = Limelight({ 
  weight: '400',
  subsets: ['latin'],
});

const lalezar = Lalezar({ 
  weight: '400',
  subsets: ['latin'],
});

const BaliPage = () => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [selectedPackageTypes, setSelectedPackageTypes] = useState<string[]>([]);
  const [selectedHotelRatings, setSelectedHotelRatings] = useState<number[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 76396, max: 136500 });
  const [sortBy, setSortBy] = useState('price-low');

  const sliderImages = [
    {
      src: "/Destination/BaliHero/image1.jpg",
      alt: "Bali temple view",
      title: "Sacred Temples",
      subtitle: "Where Ancient Spirits Meet Divine Architecture",
      description: "Experience the spiritual beauty of ancient Balinese temples set against stunning natural backdrops."
    },
    {
      src: "/Destination/BaliHero/image2.jpg", 
      alt: "Bali resort view",
      title: "Luxury Resorts",
      subtitle: "Paradise Reimagined in Ultimate Comfort",
      description: "Indulge in world-class accommodations with breathtaking views and exceptional service."
    },
    {
      src: "/Destination/BaliHero/image3.jpg",
      alt: "Bali cultural scene",
      title: "Rich Culture",
      subtitle: "Where Emerald Landscapes Touch Azure Skies",
      description: "Immerse yourself in traditional Balinese culture, art, and time-honored customs."
    },
    {
      src: "/Destination/BaliHero/image4.jpg",
      alt: "Bali nature view",
      title: "NaturaWhere Emerald Landscapes Touch Azure Skiesl Beauty",
      subtitle: "Timeless Traditions in Modern Harmony",
      description: "Discover pristine landscapes, lush rice terraces, and untouched natural wonders."
    }
  ];

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Package data
  const allPackages = [
    {
      image: "/Destination/BaliHero/image1.jpg",
      days: "5 Nights 6 Days",
      title: "PREMIUM PACKAGE - Luxury Villas with Private Pool",
      location: "Umalas & Ubud",
      price: "₹91,500/-",
      type: "Premium",
      hotelRating: 5, // Swiss-Belvillas (Luxury Villa) + Swan Paradise
      features: ["Private Pool Villa", "Floating Breakfast", "Spa", "All Activities"],
      highlights: "Swiss-Belvillas Umalas • Swan Paradise • Watersports • Nusa Penida Tour"
    },
    {
      image: "/Destination/BaliHero/image2.jpg",
      days: "5 Nights 6 Days",
      title: "4 Star Properties Package - Golden Tulip & Desa Swan",
      location: "Jineng & Ubud",
      price: "₹88,220/-",
      type: "Premium",
      hotelRating: 4, // Golden Tulip Jineng Resort (4 Star) + Desa Swan Villa
      features: ["4 Star Hotels", "Private Pool Villa", "All Transfers", "Activities"],
      highlights: "Golden Tulip Jineng • Desa Swan Villa • Watersports • Temple Tours"
    },
    {
      image: "/Destination/BaliHero/image3.jpg",
      days: "6 Nights 7 Days",
      title: "PREMIUM OPTION - 5 Star Luxury with Nusa Penida",
      location: "Ubud, Nusa Penida & Seminyak",
      price: "₹1,03,500/-",
      type: "Premium",
      hotelRating: 5, // Desa Swan Villas + Semabu Hills + Monolocale Luxury Resort (5 Star)
      features: ["5 Star Resort", "Island Hopping", "ATV Ride", "Safari"],
      highlights: "Desa Swan Villas • Semabu Hills • Monolocale Luxury Resort • Bali Safari"
    },
    {
      image: "/destination/bali/BaliHoneymoon.jpg",
      days: "6 Nights 7 Days",
      title: "HONEYMOON BEST SELLER - Romantic Private Pool Villas",
      location: "Umalas & Ubud",
      price: "₹93,650/-",
      type: "Honeymoon",
      hotelRating: 4, // D'Swaha Villas + Swan Paradise
      features: ["Honeymoon Specials", "Private Pool", "Floating Breakfast", "Spa"],
      highlights: "D'Swaha Villas • Swan Paradise • Complimentary Benefits • Leisure Day"
    },
    {
      image: "/Destination/BaliHero/image1.jpg",
      days: "6 Nights 7 Days",
      title: "BASIC PACKAGE - Budget Friendly with Pool Villa",
      location: "Kuta & Ubud",
      price: "₹76,396/-",
      type: "Basic",
      hotelRating: 3, // Bedrock Hotel (Basic) + Kori Maharani Villa
      features: ["Budget Hotels", "Pool Villa", "All Activities", "Transfers"],
      highlights: "Bedrock Hotel Kuta • Kori Maharani Villa • Watersports • Temple Tours"
    },
    {
      image: "/Destination/BaliHero/image2.jpg",
      days: "7 Nights 8 Days",
      title: "Extended Bali Experience - 3 Locations with All Activities",
      location: "Seminyak, Benoa & Ubud",
      price: "₹1,06,500/-",
      type: "Premium",
      hotelRating: 4, // Puri Saron + Tijli Hotel + Desa Swan Villa
      features: ["Multiple Locations", "Pool Villa", "Adventure Sports", "All Meals"],
      highlights: "Puri Saron • Tijli Hotel • Desa Swan Villa • ATV & Rafting"
    },
    {
      image: "/Destination/BaliHero/image3.jpg",
      days: "7 Nights 8 Days",
      title: "Basic 4 Star Package - Extended Stay with Adventures",
      location: "Seminyak, Benoa & Ubud",
      price: "₹98,500/-",
      type: "Basic",
      hotelRating: 4, // Puri Saron + Tijli Hotel + Uma Linggah Resort (4 Star as mentioned)
      features: ["4 Star Hotels", "Pool Villa", "Adventure Activities", "Transfers"],
      highlights: "Puri Saron • Tijli Hotel • Uma Linggah Resort • ATV & Rafting"
    },
    {
      image: "/Destination/BaliHero/image4.jpg",
      days: "8 Nights 9 Days",
      title: "Bali with Gili T - Island Hopping Adventure",
      location: "Umalas, Nusa Penida, Gili T & Ubud",
      price: "₹1,36,500/-",
      type: "With Gili T",
      hotelRating: 4, // D'Swaha Villas + Pramana Natura + Aston Sunset
      features: ["Island Hopping", "Gili Trawangan", "Private Pool", "All Adventures"],
      highlights: "D'Swaha Villas • Pramana Natura • Aston Sunset Gili T • Island Tours"
    }
  ];

  // Filter functions
  const togglePackageType = (type: string) => {
    setSelectedPackageTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
    setCurrentPackageIndex(0); // Reset to first page when filter changes
  };

  const toggleHotelRating = (rating: number) => {
    setSelectedHotelRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
    setCurrentPackageIndex(0);
  };

  const toggleDuration = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration)
        : [...prev, duration]
    );
    setCurrentPackageIndex(0);
  };

  const handlePriceChange = (value: number) => {
    setPriceRange(prev => ({ ...prev, max: value }));
    setCurrentPackageIndex(0);
  };

  // Filter packages based on selected filters
  const filteredPackages = allPackages.filter(pkg => {
    // Package type filter
    if (selectedPackageTypes.length > 0 && !selectedPackageTypes.includes(pkg.type)) {
      return false;
    }

    // Hotel rating filter
    if (selectedHotelRatings.length > 0 && !selectedHotelRatings.includes(pkg.hotelRating)) {
      return false;
    }

    // Duration filter
    if (selectedDurations.length > 0) {
      const pkgNights = pkg.days.split(' ')[0]; // Extract "5" from "5 Nights 6 Days"
      const matchesDuration = selectedDurations.some(duration => {
        const filterNights = duration.split(' ')[0]; // Extract "5" from "5 Nights"
        return pkgNights === filterNights;
      });
      if (!matchesDuration) return false;
    }

    // Price filter
    const price = parseInt(pkg.price.replace(/[₹,/-]/g, ''));
    if (price > priceRange.max) {
      return false;
    }

    return true;
  });

  // Sort packages based on selected sorting option
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        const priceA = parseInt(a.price.replace(/[₹,/-]/g, ''));
        const priceB = parseInt(b.price.replace(/[₹,/-]/g, ''));
        return priceA - priceB;
      case 'price-high':
        const priceA2 = parseInt(a.price.replace(/[₹,/-]/g, ''));
        const priceB2 = parseInt(b.price.replace(/[₹,/-]/g, ''));
        return priceB2 - priceA2;
      case 'duration':
        const daysA = parseInt(a.days.split(' ')[0]);
        const daysB = parseInt(b.days.split(' ')[0]);
        return daysA - daysB;
      case 'rating':
        return b.hotelRating - a.hotelRating;
      case 'popularity':
        // Sort by type priority: Premium -> Honeymoon -> With Gili T -> Basic
        const typeOrder: { [key: string]: number } = { 'Premium': 1, 'Honeymoon': 2, 'With Gili T': 3, 'Basic': 4 };
        return (typeOrder[a.type] || 5) - (typeOrder[b.type] || 5);
      default:
        return 0;
    }
  });

  const packagesPerPage = 5;
  const totalPages = Math.ceil(sortedPackages.length / packagesPerPage);
  const currentPackages = sortedPackages.slice(
    currentPackageIndex * packagesPerPage,
    (currentPackageIndex + 1) * packagesPerPage
  );

  const handlePackageClick = (packageData: { title: string }) => {
    // Navigate to itinerary page based on package details
    console.log('Package clicked:', packageData); // Debug log
    
    // Map packages to their respective itinerary pages
    const packageRoutes: { [key: string]: string } = {
      // 5 Night packages
      "PREMIUM PACKAGE - Luxury Villas with Private Pool": "/itinerary/bali-premium",
      "4 Star Properties Package - Golden Tulip & Desa Swan": "/itinerary/bali-5night-4star",
      
      // 6 Night packages  
      "PREMIUM OPTION - 5 Star Luxury with Nusa Penida": "/itinerary/bali-6night-premium",
      "HONEYMOON BEST SELLER - Romantic Private Pool Villas": "/itinerary/bali-6night-honeymoon",
      "BASIC PACKAGE - Budget Friendly with Pool Villa": "/itinerary/bali-6night-basic",
      
      // 7 Night packages
      "Extended Bali Experience - 3 Locations with All Activities": "/itinerary/bali-7night",
      "Basic 4 Star Package - Extended Stay with Adventures": "/itinerary/bali-7night-basic",
      
      // 8 Night packages
      "Bali with Gili T - Island Hopping Adventure": "/itinerary/bali-8night-gili"
    };
    
    const route = packageRoutes[packageData.title];
    if (route) {
      router.push(route);
    } else {
      // Fallback for any unmapped packages
      console.warn('No route found for package:', packageData.title);
      alert(`Detailed itinerary for ${packageData.title} coming soon!`);
    }
  };

  const nextPackages = () => {
    setCurrentPackageIndex((prev) => (prev + 1) % totalPages);
    // Scroll to packages section
    setTimeout(() => {
      const packagesSection = document.getElementById('packages-section');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const prevPackages = () => {
    setCurrentPackageIndex((prev) => (prev - 1 + totalPages) % totalPages);
    // Scroll to packages section
    setTimeout(() => {
      const packagesSection = document.getElementById('packages-section');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Gallery Hero Section */}
      <section className="relative h-screen">
        {/* Gallery Container as Hero */}
        <div className="relative h-full">
          {/* Main Display */}
          <div className="relative h-full overflow-hidden">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
                  <div className="max-w-4xl px-4">
                                         {/* Main Hero Title */}
                     <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
                       <span className={`text-orange-400 ${lalezar.className}`}>WELCOME TO</span>
                       <br />
                       <span className={`text-white ${limelight.className}`}>BALI</span>
                     </h1>
                     
                     {/* Dynamic Subtitle */}
                     <p className="text-2xl md:text-3xl text-white/90 font-light mb-6 drop-shadow-lg italic">
                       {image.subtitle}
                     </p>
                    
                    {/* Current Image Info */}
                    {/* <div className="mb-8">
                      <div className="inline-block px-4 py-2 bg-orange-500 rounded-full text-sm mb-4 font-semibold">
                        Featured Destination
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{image.title}</h2>
                      <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        {image.description}
                      </p>
                    </div> */}

                    {/* Action Button */}
                    {/* <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105 shadow-xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Discover Bali
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Thumbnail Navigation - Bottom Center */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex justify-center gap-3 mb-4">
              {sliderImages.map((image, index) => (
                                 <button
                   key={index}
                   onClick={() => setCurrentImageIndex(index)}
                   className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                     index === currentImageIndex 
                       ? 'ring-2 ring-orange-400 scale-110 shadow-xl' 
                       : 'opacity-70 hover:opacity-100 hover:scale-105'
                   }`}
                 >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {/* Thumbnail overlay for active state */}
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-orange-400/20" />
                  )}
                </button>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2">
              {sliderImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8 bg-orange-400' 
                      : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover the Magic of Bali
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of culture, nature, and luxury in the heart of Indonesia. 
              From ancient temples to pristine beaches, Bali offers unforgettable adventures.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sacred Temples</h3>
              <p className="text-gray-600">Visit ancient temples like Tanah Lot and Uluwatu for spiritual experiences.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Resorts</h3>
              <p className="text-gray-600">Stay in world-class resorts with stunning views and exceptional service.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Experiences</h3>
              <p className="text-gray-600">Immerse yourself in traditional dances, ceremonies, and local customs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600">
              Use filters to explore the best options.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-1/4 bg-white rounded-lg p-6 h-fit shadow-lg">
              {/* Clear Filters Button */}
              {(selectedPackageTypes.length > 0 || selectedHotelRatings.length > 0 || selectedDurations.length > 0 || priceRange.max < 136500) && (
                <div className="mb-6">
                  <button
                    onClick={() => {
                      setSelectedPackageTypes([]);
                      setSelectedHotelRatings([]);
                      setSelectedDurations([]);
                      setPriceRange({ min: 76396, max: 136500 });
                      setSortBy('price-low');
                      setCurrentPackageIndex(0);
                    }}
                    className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
              {/* Package Type Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Package Type</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Premium', count: 4 },
                    { name: 'Honeymoon', count: 1 },
                    { name: 'Basic', count: 2 },
                    { name: 'With Gili T', count: 1 }
                  ].map((type) => (
                    <label key={type.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-3 rounded text-orange-500 focus:ring-orange-500" 
                          checked={selectedPackageTypes.includes(type.name)}
                          onChange={() => togglePackageType(type.name)}
                        />
                        <span className="text-gray-700">{type.name}</span>
                      </div>
                      <span className="text-gray-500">({type.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Hotel Rating Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hotel Rating</h3>
                <div className="flex gap-2">
                  {[
                    { stars: 3, count: 1 }, // Basic Package
                    { stars: 4, count: 5 }, // Golden Tulip, Honeymoon, Extended, Basic 4 Star, Gili T
                    { stars: 5, count: 2 }  // Premium Package, Premium Option
                  ].map(({ stars, count }) => (
                    <button
                      key={stars}
                      onClick={() => toggleHotelRating(stars)}
                      className={`px-3 py-2 border rounded-lg transition-colors relative ${
                        selectedHotelRatings.includes(stars)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 hover:bg-orange-100 hover:border-orange-300'
                      }`}
                    >
                      <span>{stars} Star</span>
                      <span className={`ml-1 text-xs ${
                        selectedHotelRatings.includes(stars) ? 'text-orange-200' : 'text-gray-500'
                      }`}>
                        ({count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Min: ₹76,396</span>
                    <span>Max: ₹{priceRange.max.toLocaleString()}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="76396"
                      max="136500"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-orange-500"
                      style={{
                        background: `linear-gradient(to right, #fb923c 0%, #fb923c ${((priceRange.max - 76396) / (136500 - 76396)) * 100}%, #e5e7eb ${((priceRange.max - 76396) / (136500 - 76396)) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Current Max: ₹{priceRange.max.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Duration (Nights)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['5 Nights', '6 Nights', '7 Nights', '8 Nights'].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => toggleDuration(duration)}
                      className={`px-3 py-2 border rounded-lg transition-colors text-sm ${
                        selectedDurations.includes(duration)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 hover:bg-orange-100 hover:border-orange-300'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Packages Grid */}
            <div className="lg:w-3/4">
              {/* Sorting */}
                              <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Trending Packages Only</span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Sorting</span>
                    <select 
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={sortBy}
                      onChange={(e) => {
                        setSortBy(e.target.value);
                        setCurrentPackageIndex(0); // Reset to first page when sorting changes
                      }}
                    >
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="duration">Duration: Short to Long</option>
                      <option value="rating">Rating: High to Low</option>
                      <option value="popularity">Popularity</option>
                    </select>
                  </div>
                </div>

              {/* Packages Grid */}
              <div className="space-y-6">
                {currentPackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => handlePackageClick(pkg)}
                  >
                    {/* Package Image */}
                    <div className="w-1/3 relative">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Package Content */}
                    <div className="w-2/3 p-6 flex justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-gray-500">{pkg.days}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            pkg.type === 'Premium' ? 'bg-purple-100 text-purple-700' :
                            pkg.type === 'Honeymoon' ? 'bg-pink-100 text-pink-700' :
                            pkg.type === 'Basic' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {pkg.type}
                          </span>
                          <span className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            <span className="text-yellow-500 mr-1">⭐</span>
                            {pkg.hotelRating} Star
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{pkg.title}</h3>
                        <div className="text-sm text-gray-600 mb-3">{pkg.location}</div>
                        
                        {/* Highlights */}
                        <div className="text-xs text-gray-500 mb-3 line-clamp-2">
                          {pkg.highlights}
                        </div>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {pkg.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Price and Button */}
                      <div className="flex flex-col justify-between items-end ml-6">
                        <div className="text-right mb-4">
                          <div className="text-xs text-gray-500 mb-2">
                            For 2 Adults
                          </div>
                          <div className="text-xs text-gray-400">
                            Excluding Flights
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900 mb-3">{pkg.price}</div>
                          <button 
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePackageClick(pkg);
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-8 gap-4">
                <button 
                  onClick={prevPackages}
                  className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Page indicators */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentPackageIndex 
                          ? 'bg-orange-500 scale-125' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextPackages}
                  className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Package counter */}
                              <div className="text-center mt-4 text-gray-600 text-sm">
                  {sortedPackages.length > 0 ? (
                    <>Showing {currentPackageIndex * packagesPerPage + 1}-{Math.min((currentPackageIndex + 1) * packagesPerPage, sortedPackages.length)} of {sortedPackages.length} packages</>
                  ) : (
                    <span className="text-orange-600 font-medium">No packages match your selected filters. Try adjusting your criteria.</span>
                  )}
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BaliPage; 