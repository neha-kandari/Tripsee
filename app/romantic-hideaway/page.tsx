'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Limelight, Lalezar } from 'next/font/google';

const limelight = Limelight({ 
  weight: '400',
  subsets: ['latin'] 
});

const lalezar = Lalezar({ 
  weight: '400',
  subsets: ['latin'] 
});

const RomanticHideawayPage = () => {
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [selectedPackageTypes, setSelectedPackageTypes] = useState<string[]>([]);
  const [selectedHotelRatings, setSelectedHotelRatings] = useState<number[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 75000, max: 350000 });
  const [sortBy, setSortBy] = useState('price-low');

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

  const toggleDestination = (destination: string) => {
    setSelectedDestinations(prev =>
      prev.includes(destination)
        ? prev.filter(d => d !== destination)
        : [...prev, destination]
    );
    setCurrentPackageIndex(0);
  };

  const handlePriceChange = (value: number) => {
    setPriceRange(prev => ({ ...prev, max: value }));
    setCurrentPackageIndex(0);
  };

  // Romantic packages data
  const allPackages = [
    {
      image: "/Destination/MaldivesHero/image1.jpg",
      days: "4 Nights 5 Days",
      title: "MALDIVES HONEYMOON - Overwater Villa Paradise",
      location: "Maldives Private Resort",
      destination: "Maldives",
      price: "₹2,50,000/-",
      type: "Honeymoon",
      hotelRating: 5,
      features: ["Overwater Villa", "Private Pool", "Honeymoon Suite", "Candle Night Dinner"],
      highlights: "Private villa • Romantic dinners • Couple massage • Snorkeling together"
    },
    {
      image: "/Destination/BaliHero/image4.jpg",
      days: "6 Nights 7 Days",
      title: "BALI ROMANTIC ESCAPE - Private Pool Villas",
      location: "Ubud & Seminyak",
      destination: "Bali",
      price: "₹1,25,000/-",
      type: "Candle Night",
      hotelRating: 5,
      features: ["Private Pool Villa", "Floating Breakfast", "Candle Night Dinner", "Proposal Setup"],
      highlights: "Jungle villas • Rice terrace walks • Temple visits • Romantic dinners"
    },
    {
      image: "/Destination/ThailandHero/image2.jpg",
      days: "5 Nights 6 Days",
      title: "THAILAND BEACH ROMANCE - Phi Phi & Phuket",
      location: "Phuket & Phi Phi Islands",
      destination: "Thailand",
      price: "₹95,000/-",
      type: "Beach Romance",
      hotelRating: 4,
      features: ["Beach Resort", "Island Hopping", "Sunset Cruise", "Candle Night Dinner"],
      highlights: "Maya Bay • James Bond Island • Beach dinners • Couple activities"
    },
    {
      image: "/Destination/DubaiHero/image4.jpg",
      days: "4 Nights 5 Days",
      title: "DUBAI LUXURY ROMANCE - Desert & City",
      location: "Dubai & Desert Camp",
      destination: "Dubai",
      price: "₹1,85,000/-",
      type: "Candle Night",
      hotelRating: 5,
      features: ["Luxury Hotels", "Desert Safari", "Proposal Setup", "Fine Dining"],
      highlights: "Atlantis stay • Desert camping • Helicopter proposal • Yacht cruise"
    },
    {
      image: "/Destination/singaporeHero/image1.jpg",
      days: "3 Nights 4 Days",
      title: "SINGAPORE CITY ROMANCE - Marina Bay Experience",
      location: "Marina Bay & Sentosa",
      destination: "Singapore",
      price: "₹85,000/-",
      type: "Candle Night",
      hotelRating: 5,
      features: ["Marina Bay Sands", "Infinity Pool", "Candle Night Dinner", "City Views"],
      highlights: "Infinity pool • Gardens by Bay • Sentosa beaches • Romantic skyline"
    },
    {
      image: "/Destination/veitnamHero/image2.jpg",
      days: "7 Nights 8 Days",
      title: "VIETNAM HERITAGE ROMANCE - Ha Long & Hoi An",
      location: "Hanoi, Ha Long & Hoi An",
      destination: "Vietnam",
      price: "₹1,15,000/-",
      type: "Candle Night",
      hotelRating: 4,
      features: ["Heritage Hotels", "Ha Long Cruise", "Lantern Festival", "Candle Night Dinner"],
      highlights: "Luxury cruise • Ancient towns • Lantern walks • Romantic dining"
    },
    {
      image: "/Destination/MalaysiaHero/image2.jpg",
      days: "6 Nights 7 Days",
      title: "LANGKAWI ISLAND ROMANCE - Tropical Paradise",
      location: "Langkawi & Kuala Lumpur",
      destination: "Malaysia",
      price: "₹1,05,000/-",
      type: "Candle Night",
      hotelRating: 4,
      features: ["Beach Resort", "Island Tours", "Cable Car", "Candle Night Dinner"],
      highlights: "Eagle Square • Underwater World • Beach walks • Sunset views"
    },
    {
      image: "/Destination/AndamanHero/image1.jpg",
      days: "5 Nights 6 Days",
      title: "ANDAMAN PRISTINE ROMANCE - Havelock Paradise",
      location: "Port Blair & Havelock",
      destination: "Andaman",
      price: "₹75,000/-",
      type: "Beach Romance",
      hotelRating: 4,
      features: ["Beach Resort", "Snorkeling", "Elephant Beach", "Candle Night Dinner"],
      highlights: "Radhanagar Beach • Crystal waters • Beach activities • Romantic dinners"
    },
    {
      image: "/Destination/MaldivesHero/image4.jpg",
      days: "7 Nights 8 Days",
      title: "ULTIMATE MALDIVES ROMANCE - Multi-Resort Experience",
      location: "3 Luxury Maldives Resorts",
      destination: "Maldives",
      price: "₹3,50,000/-",
      type: "Candle Night",
      hotelRating: 5,
      features: ["Multi-Resort", "Overwater & Beach", "Proposal Setup", "Honeymoon Suite"],
      highlights: "3 resort experiences • Private transfers • Michelin dining • Romantic spa"
    },
    {
      image: "/Destination/BaliHero/image1.jpg",
      days: "5 Nights 6 Days",
      title: "BALI PROPOSAL PARADISE - Perfect Engagement Setting",
      location: "Uluwatu & Nusa Dua",
      destination: "Bali",
      price: "₹1,45,000/-",
      type: "Proposal",
      hotelRating: 5,
      features: ["Proposal Setup", "Private Villa", "Photography", "Candle Night Dinner"],
      highlights: "Cliff-top proposal • Sunset ceremony • Professional photos • Celebration dinner"
    },
    {
      image: "/Destination/ThailandHero/image4.jpg",
      days: "6 Nights 7 Days",
      title: "THAILAND HONEYMOON BLISS - Island & Culture",
      location: "Bangkok, Phuket & Krabi",
      destination: "Thailand",
      price: "₹1,35,000/-",
      type: "Honeymoon",
      hotelRating: 5,
      features: ["Honeymoon Suite", "Island Hopping", "Cultural Tours", "Candle Night Dinner"],
      highlights: "Temple visits • Island paradise • Couple spa • Romantic dinners"
    },
    {
      image: "/Destination/DubaiHero/image2.jpg",
      days: "5 Nights 6 Days",
      title: "DUBAI PROPOSAL LUXURY - Sky-High Romance",
      location: "Dubai Marina & Palm Jumeirah",
      destination: "Dubai",
      price: "₹2,25,000/-",
      type: "Proposal",
      hotelRating: 5,
      features: ["Proposal Setup", "Burj Khalifa", "Luxury Suite", "Private Yacht"],
      highlights: "Sky-high proposal • Luxury yacht • Professional setup • Celebration party"
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
    if (selectedDestinations.length > 0 && !selectedDestinations.includes(pkg.destination)) {
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
        const typeOrder: { [key: string]: number } = { 
          'Honeymoon': 1, 'Proposal': 2, 'Candle Night': 3, 'Beach Romance': 4
        };
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
            src="/romanticBg.png"
            alt="Romantic Hideaway Background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <p className="text-lg md:text-xl text-orange-300 mb-4 font-light italic">
              From winding roads to wide skies —
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
              Your romantic getaway begins here.
            </p>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl">
              <span className={limelight.className}>ROMANTIC</span>
              <br />
              <span className={`text-orange-400 ${lalezar.className}`}>HIDEAWAY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
              Escape to intimate destinations designed for love, where every moment becomes a cherished memory
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Find Your Perfect Escape
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-orange-500">Romantic Escapes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating unforgettable romantic experiences that bring couples closer together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🕯️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Candle Night Dinners</h3>
              <p className="text-gray-600 leading-relaxed">
                Romantic candlelit dining experiences under the stars, on the beach, or in private settings designed to create magical moments together.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect Proposals</h3>
              <p className="text-gray-600 leading-relaxed">
                Professionally planned proposal setups with stunning backdrops, photography, and all the details to make your engagement unforgettable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Honeymoon Bliss</h3>
              <p className="text-gray-600 leading-relaxed">
                Luxury honeymoon packages with private suites, couple activities, and romantic experiences to celebrate your new beginning together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Romantic Tropical Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-16">
            {/* Left Side - Images */}
            <div className="lg:w-1/2 relative">
              {/* Main image with floating circular overlays */}
              <div className="relative">
                <div className="w-80 h-96 rounded-3xl overflow-hidden relative">
                  <Image
                    src="/tripPics.png"
                    alt="Romantic tropical destinations"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating circular images */}
                {/* <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/destination/BaliHero/image4.jpg"
                    alt="Romantic sunset"
                    fill
                    className="object-cover"
                  />
                </div> */}
                
                {/* <div className="absolute top-20 -right-6 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/destination/ThailandHero/image2.jpg"
                    alt="Beach romance"
                    fill
                    className="object-cover"
                  />
                </div> */}
                
                {/* <div className="absolute -bottom-6 -left-12 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/destination/AndamanHero/image1.jpg"
                    alt="Tropical paradise"
                    fill
                    className="object-cover"
                  />
                </div> */}

                {/* Decorative heart element */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform -rotate-12">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Background decorative text */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-gray-100 text-8xl font-bold opacity-30">
                  HONEYMOON
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                  HONEYMOON SPECIALS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Romantic <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                    Tropical
                  </span> <br />
                  Destinations
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Discover handpicked romantic destinations to celebrate your honeymoon in style. 
                  Let us help you make memories that last forever in breathtaking tropical paradises.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                  View Packages
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Floating destination cards */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { name: 'Maldives', image: '/Destination/MaldivesHero/image2.jpg', packages: '2 Packages' },
              { name: 'Bali', image: '/Destination/BaliHero/image1.jpg', packages: '2 Packages' },
              { name: 'Thailand', image: '/Destination/ThailandHero/image3.jpg', packages: '2 Packages' },
              { name: 'Dubai', image: '/Destination/DubaiHero/image3.jpg', packages: '2 Packages' }
            ].map((destination) => (
              <div key={destination.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="h-48 relative">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm text-white/80">{destination.packages}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Your Perfect <span className="text-orange-500">Romantic Package</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate hideaways to luxury escapes, find the perfect romantic experience tailored for you and your loved one
            </p>
          </div>

          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-1/4 bg-white rounded-lg p-6 h-fit shadow-lg">
              {/* Clear Filters Button */}
              {(selectedPackageTypes.length > 0 || selectedHotelRatings.length > 0 || selectedDurations.length > 0 || selectedDestinations.length > 0 || priceRange.max < 350000) && (
                <div className="mb-6">
                  <button
                    onClick={() => {
                      setSelectedPackageTypes([]);
                      setSelectedHotelRatings([]);
                      setSelectedDurations([]);
                      setSelectedDestinations([]);
                      setPriceRange({ min: 75000, max: 350000 });
                      setSortBy('price-low');
                      setCurrentPackageIndex(0);
                    }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-pink-100 to-orange-100 hover:from-pink-200 hover:to-orange-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Destination Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Destination</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Maldives', count: 2 },
                    { name: 'Bali', count: 2 },
                    { name: 'Thailand', count: 2 },
                    { name: 'Dubai', count: 2 },
                    { name: 'Singapore', count: 1 },
                    { name: 'Vietnam', count: 1 },
                    { name: 'Malaysia', count: 1 },
                    { name: 'Andaman', count: 1 }
                  ].map((destination) => (
                    <label key={destination.name} className="flex items-center justify-between cursor-pointer hover:bg-rose-50 p-2 rounded">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded text-pink-500 focus:ring-pink-500"
                          checked={selectedDestinations.includes(destination.name)}
                          onChange={() => toggleDestination(destination.name)}
                        />
                        <span className="text-gray-700">{destination.name}</span>
                      </div>
                      <span className="text-gray-500">({destination.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Package Type Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Romance Type</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Honeymoon', count: 2, icon: '💍' },
                    { name: 'Proposal', count: 2, icon: '💎' },
                    { name: 'Candle Night', count: 8, icon: '🕯️' },
                    { name: 'Beach Romance', count: 4, icon: '🏖️' }
                  ].map((type) => (
                    <label key={type.name} className="flex items-center justify-between cursor-pointer hover:bg-rose-50 p-2 rounded">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded text-pink-500 focus:ring-pink-500"
                          checked={selectedPackageTypes.includes(type.name)}
                          onChange={() => togglePackageType(type.name)}
                        />
                        <span className="text-gray-700 flex items-center">
                          <span className="mr-2">{type.icon}</span>
                          {type.name}
                        </span>
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
                    { stars: 4, count: 4 },
                    { stars: 5, count: 5 }
                  ].map(({ stars, count }) => (
                    <button
                      key={stars}
                      onClick={() => toggleHotelRating(stars)}
                      className={`px-3 py-2 border rounded-lg transition-colors relative ${
                        selectedHotelRatings.includes(stars)
                          ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent'
                          : 'border-gray-300 hover:border-pink-300 hover:bg-rose-50'
                      }`}
                    >
                      <span>{stars} Star</span>
                      <span className={`ml-1 text-xs ${
                        selectedHotelRatings.includes(stars) ? 'text-pink-100' : 'text-gray-500'
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
                    <span>Min: ₹75,000</span>
                    <span>Max: ₹{priceRange.max.toLocaleString()}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="75000"
                      max="350000"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-pink-500"
                      style={{
                        background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${((priceRange.max - 75000) / (350000 - 75000)) * 100}%, #e5e7eb ${((priceRange.max - 75000) / (350000 - 75000)) * 100}%, #e5e7eb 100%)`
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
                          ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent'
                          : 'border-gray-300 hover:border-pink-300 hover:bg-rose-50'
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
                <span className="text-gray-600">Romantic Packages Only</span>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Sorting</span>
                  <select 
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex hover:shadow-xl transition-shadow duration-300">
                    {/* Package Image */}
                    <div className="w-1/3 relative">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        💕 Romantic
                      </div>
                    </div>

                    {/* Package Content */}
                    <div className="w-2/3 p-6 flex justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-gray-500">{pkg.days}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            pkg.type === 'Honeymoon' ? 'bg-pink-100 text-pink-700' :
                            pkg.type === 'Proposal' ? 'bg-purple-100 text-purple-700' :
                            pkg.type === 'Candle Night' ? 'bg-orange-100 text-orange-700' :
                            pkg.type === 'Beach Romance' ? 'bg-cyan-100 text-cyan-700' :
                            'bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700'
                          }`}>
                            {pkg.type}
                          </span>
                          <span className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            <span className="text-yellow-500 mr-1">⭐</span>
                            {pkg.hotelRating} Star
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{pkg.title}</h3>
                        <div className="text-sm text-gray-600 mb-3 flex items-center">
                          <span className="mr-1">📍</span>
                          {pkg.location}
                        </div>

                        {/* Highlights */}
                        <div className="text-xs text-gray-500 mb-3 line-clamp-2">
                          {pkg.highlights}
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {pkg.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 rounded-full text-xs"
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
                          <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                            Book Romance
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
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                          ? 'bg-gradient-to-r from-pink-500 to-orange-500 scale-125'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPackages}
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Package counter */}
              <div className="text-center mt-4 text-gray-600 text-sm">
                {sortedPackages.length > 0 ? (
                  <>Showing {currentPackageIndex * packagesPerPage + 1}-{Math.min((currentPackageIndex + 1) * packagesPerPage, sortedPackages.length)} of {sortedPackages.length} romantic packages</>
                ) : (
                  <span className="text-pink-600 font-medium">No romantic packages match your selected filters. Try adjusting your criteria.</span>
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

export default RomanticHideawayPage; 
