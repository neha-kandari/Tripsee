'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Limelight, Lalezar } from 'next/font/google';

const limelight = Limelight({ 
  weight: '400',
  subsets: ['latin'] 
});

const lalezar = Lalezar({ 
  weight: '400',
  subsets: ['latin'] 
});

const MaldivesPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [selectedPackageTypes, setSelectedPackageTypes] = useState<string[]>([]);
  const [selectedHotelRatings, setSelectedHotelRatings] = useState<number[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 120000, max: 300000 });
  const [sortBy, setSortBy] = useState('price-low');

  const sliderImages = [
    {
      src: "/destination/MaldivesHero/image1.jpg",
      title: "Overwater Villas",
      subtitle: "Luxury accommodations suspended over crystal-clear turquoise lagoons"
    },
    {
      src: "/destination/MaldivesHero/image2.jpg", 
      title: "Private Islands",
      subtitle: "Exclusive resort islands with pristine beaches and coral reefs"
    },
    {
      src: "/destination/MaldivesHero/image3.jpg",
      title: "Underwater World", 
      subtitle: "Dive into vibrant coral gardens and encounter tropical marine life"
    },
    {
      src: "/destination/MaldivesHero/image4.jpg",
      title: "Sunset Paradise",
      subtitle: "Breathtaking sunsets painting the sky in magnificent colors"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Filter functions
  const togglePackageType = (type: string) => {
    setSelectedPackageTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
    setCurrentPackageIndex(0);
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

  // Package data
  const allPackages = [
    {
      image: "/destination/MaldivesHero/image1.jpg",
      days: "4 Nights 5 Days",
      title: "LUXURY MALDIVES - Overwater Villa Paradise",
      location: "Male & Resort Island",
      price: "₹1,50,000/-",
      type: "Luxury",
      hotelRating: 5,
      features: ["Overwater Villa", "All Inclusive", "Seaplane Transfer", "Spa"],
      highlights: "Private villa • Infinity pool • Snorkeling • Dolphin watching"
    },
    {
      image: "/destination/MaldivesHero/image2.jpg",
      days: "5 Nights 6 Days",
      title: "HONEYMOON MALDIVES - Romantic Escape",
      location: "Private Resort Island",
      price: "₹2,20,000/-",
      type: "Honeymoon",
      hotelRating: 5,
      features: ["Honeymoon Suite", "Private Dining", "Couple Spa", "Sunset Cruise"],
      highlights: "Romantic villa • Champagne breakfast • Couple massage • Private beach"
    },
    {
      image: "/destination/MaldivesHero/image3.jpg",
      days: "6 Nights 7 Days",
      title: "ADVENTURE MALDIVES - Dive & Explore",
      location: "Multiple Atolls",
      price: "₹1,80,000/-",
      type: "Adventure",
      hotelRating: 4,
      features: ["Diving Package", "Island Hopping", "Water Sports", "Marine Safari"],
      highlights: "Diving expeditions • Manta ray encounters • Fishing trips • Coral gardens"
    },
    {
      image: "/destination/MaldivesHero/image4.jpg",
      days: "3 Nights 4 Days",
      title: "QUICK GETAWAY - Maldives Highlights",
      location: "Resort Island",
      price: "₹1,20,000/-",
      type: "Quick",
      hotelRating: 4,
      features: ["Beach Villa", "Half Board", "Airport Transfer", "Water Sports"],
      highlights: "Beach access • Snorkeling gear • Local island visit • Sunset viewing"
    },
    {
      image: "/destination/MaldivesHero/image1.jpg",
      days: "7 Nights 8 Days",
      title: "ULTIMATE MALDIVES - Multi-Resort Experience",
      location: "3 Different Resorts",
      price: "₹3,00,000/-",
      type: "Ultimate",
      hotelRating: 5,
      features: ["Multi-Resort", "Overwater & Beach", "All Transfers", "Full Board"],
      highlights: "3 resort experiences • Yacht transfers • Fine dining • Spa treatments"
    }
  ];

  // Filter packages based on selected filters
  const filteredPackages = allPackages.filter(pkg => {
    if (selectedPackageTypes.length > 0 && !selectedPackageTypes.includes(pkg.type)) {
      return false;
    }
    if (selectedHotelRatings.length > 0 && !selectedHotelRatings.includes(pkg.hotelRating)) {
      return false;
    }
    if (selectedDurations.length > 0) {
      const pkgNights = pkg.days.split(' ')[0];
      const matchesDuration = selectedDurations.some(duration => {
        const filterNights = duration.split(' ')[0];
        return pkgNights === filterNights;
      });
      if (!matchesDuration) return false;
    }
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
        const typeOrder: { [key: string]: number } = { 'Luxury': 1, 'Honeymoon': 2, 'Ultimate': 3, 'Adventure': 4, 'Quick': 5 };
        return (typeOrder[a.type] || 6) - (typeOrder[b.type] || 6);
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

  const nextPackages = () => {
    setCurrentPackageIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => {
      const packagesSection = document.getElementById('packages-section');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const prevPackages = () => {
    setCurrentPackageIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => {
      const packagesSection = document.getElementById('packages-section');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={sliderImages[currentImageIndex].src}
            alt={sliderImages[currentImageIndex].title}
            fill
            className="object-cover opacity-60 transition-opacity duration-1000"
            priority={currentImageIndex === 0}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
              <span className={`text-orange-400 ${lalezar.className}`}>WELCOME TO</span>
              <br />
              <span className={limelight.className}>MALDIVES</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light mb-6 drop-shadow-lg italic">
              {sliderImages[currentImageIndex].subtitle}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Discover Maldives
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {sliderImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'border-orange-400 scale-110' 
                  : 'border-white/50 hover:border-white/80'
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-orange-400 scale-125'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏝️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Private Islands</h3>
              <p className="text-gray-600">Experience ultimate privacy on exclusive resort islands with pristine beaches and crystal-clear lagoons.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overwater Villas</h3>
              <p className="text-gray-600">Stay in luxurious overwater villas with direct access to the ocean and stunning panoramic views.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marine Life</h3>
              <p className="text-gray-600">Discover vibrant coral reefs, swim with manta rays, and explore the underwater paradise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Your Perfect Maldives Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From luxury overwater villas to adventure diving experiences, find your dream Maldives escape
            </p>
          </div>

          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-1/4 bg-white rounded-lg p-6 h-fit shadow-lg">
              {/* Clear Filters Button */}
              {(selectedPackageTypes.length > 0 || selectedHotelRatings.length > 0 || selectedDurations.length > 0 || priceRange.max < 300000) && (
                <div className="mb-6">
                  <button
                    onClick={() => {
                      setSelectedPackageTypes([]);
                      setSelectedHotelRatings([]);
                      setSelectedDurations([]);
                      setPriceRange({ min: 120000, max: 300000 });
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
                    { name: 'Luxury', count: 1 },
                    { name: 'Honeymoon', count: 1 },
                    { name: 'Adventure', count: 1 },
                    { name: 'Quick', count: 1 },
                    { name: 'Ultimate', count: 1 }
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
                    { stars: 4, count: 2 },
                    { stars: 5, count: 3 }
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
                    <span>Min: ₹1,20,000</span>
                    <span>Max: ₹{priceRange.max.toLocaleString()}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="120000"
                      max="300000"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-orange-500"
                      style={{
                        background: `linear-gradient(to right, #fb923c 0%, #fb923c ${((priceRange.max - 120000) / (300000 - 120000)) * 100}%, #e5e7eb ${((priceRange.max - 120000) / (300000 - 120000)) * 100}%, #e5e7eb 100%)`
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
                  {['3 Nights', '4 Nights', '5 Nights', '6 Nights', '7 Nights'].map((duration) => (
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
                <span className="text-gray-600">Premium Packages Only</span>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Sorting</span>
                  <select 
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPackageIndex(0);
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
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
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
                            pkg.type === 'Luxury' ? 'bg-purple-100 text-purple-700' :
                            pkg.type === 'Honeymoon' ? 'bg-pink-100 text-pink-700' :
                            pkg.type === 'Adventure' ? 'bg-green-100 text-green-700' :
                            pkg.type === 'Ultimate' ? 'bg-indigo-100 text-indigo-700' :
                            'bg-blue-100 text-blue-700'
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
                            Including Transfers
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900 mb-3">{pkg.price}</div>
                          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Contact Us
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

export default MaldivesPage; 