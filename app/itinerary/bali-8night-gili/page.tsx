'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

const Bali8NightGili = () => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      title: "Natural Beauty",
      subtitle: "Timeless Traditions in Modern Harmony",
      description: "Discover pristine landscapes, lush rice terraces, and untouched natural wonders."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const packageDetails = {
    title: "8 NIGHTS BALI WITH GILI T",
    duration: "8N / 9D",
    location: "Umalas, Nusa Penida, Gili T & Ubud",
    rating: "4-5",
    price: "₹1,36,500/- For a Couple",
    excludes: "Excluding Flights"
  };

  const hotels = [
    {
      name: "D'Swaha Villas",
      nights: "3 Nights",
      roomType: "One bedroom villa with private pool",
      location: "Umalas, Bali",
      link: "https://dsawahvillaumalas.com/one-bedroom-villa-with-private-pool/",
      benefits: [
        "Welcome drink",
        "1 x floating breakfast",
        "1x honeymoon cake",
        "30 mins massage (shoulder/head)",
        "1 x Bed decoration",
        "1 x mini bar (loaded with snacks and non-alcoholic beverages)",
        "10% off on spa",
        "10% off on f&b"
      ]
    },
    {
      name: "Pramana Natura Nusa Penida",
      nights: "1 Night",
      roomType: "Premiere Ocean View",
      location: "Nusa Penida",
      link: "https://pramanapenida.com/"
    },
    {
      name: "Aston Sunset Beach Resort",
      nights: "2 Nights",
      roomType: "Deluxe",
      location: "Gilli Trawangan",
      link: "https://www.astonhotelsinternational.com/en/hotel/view/37/aston-sunset-beach-resort---gili-trawangan"
    },
    {
      name: "Swan Paradise A Pramana Experience",
      nights: "2 Nights",
      roomType: "Superior",
      location: "Ubud, Bali",
      link: "https://swanparadisebali.com/"
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Romance",
      activities: ["Arrival in Bali", "Romantic candle light dinner"],
      highlight: "Welcome to Paradise"
    },
    {
      day: 2,
      title: "Water Adventures & Relaxation", 
      activities: [
        "Watersports (Banana Boat, Jet Ski, Parasailing)",
        "01 Hour Balinese Massage"
      ],
      highlight: "Adventure & Wellness"
    },
    {
      day: 3,
      title: "ATV & White Water Adventure",
      activities: [
        "ATV RIDE",
        "WHITE WATER RAFTING"
      ],
      highlight: "Extreme Adventure"
    },
    {
      day: 4,
      title: "West Nusa Penida Island Tour",
      activities: [
        "Broken Beach",
        "Angel Billabong", 
        "Kelingking Beach",
        "Bubu Beach",
        "Local Lunch",
        "Snorkelling",
        "Over Night Stay in Nusa Penida"
      ],
      highlight: "Island Paradise"
    },
    {
      day: 5,
      title: "Boat to Gili T",
      activities: [
        "Boat to Gili Trawangan",
        "Transfer to Hotel by own arrangement"
      ],
      highlight: "Island Hopping"
    },
    {
      day: 6,
      title: "Leisure Day at Gili T",
      activities: [
        "Leisure day at Gilli T",
        "Explore by own"
      ],
      highlight: "Island Freedom"
    },
    {
      day: 7,
      title: "Gili T to Ubud",
      activities: [
        "Transfer from Gilli T to Ubud"
      ],
      highlight: "Back to Nature"
    },
    {
      day: 8,
      title: "Ubud Nature & Culture",
      activities: [
        "Kintamani Volcano View",
        "Banjar Hot Spring",
        "Ubud Market",
        "Tegenungan Waterfall",
        "Tegallalang Rice Terrace",
        "Ubud Jungle Swing"
      ],
      highlight: "Nature & Culture"
    },
    {
      day: 9,
      title: "Departure",
      activities: ["Check-out", "Departure Transfer"],
      highlight: "Farewell Paradise"
    }
  ];

  const packageHighlights = [
    "Private Pool Villa with Benefits",
    "Gili Trawangan Island Experience",
    "ATV & White Water Rafting", 
    "Nusa Penida Overnight Stay",
    "Multiple Island Experiences",
    "Complete Adventure Package"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-screen">
        <div className="relative h-full">
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
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
            <div className="text-white max-w-4xl mx-auto px-4">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className={`text-orange-500 ${lalezar.className}`}>WELCOME TO</span>
                <br />
                <span className={limelight.className}>BALI</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {sliderImages[currentImageIndex].title} - {packageDetails.title}
              </h2>
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                {sliderImages[currentImageIndex].subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 opacity-80">
                {sliderImages[currentImageIndex].description}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                  {packageDetails.duration}
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">
                  {packageDetails.location}
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                  ⭐ {packageDetails.rating} Star Hotels
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium text-lg">
                  {packageDetails.price}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-3">
              {sliderImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-orange-500 scale-110' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => router.push('/destination/bali')}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Bali Packages</span>
          </button>
        </div>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-lg max-h-screen overflow-y-auto">
              
              <div className="mb-6 pb-6 border-b">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">🏝️ {packageDetails.title}</h2>
                <p className="text-xl text-gray-600 mb-2">Bali 8 nights with Gili Trawangan island experience</p>
                <p className="text-2xl font-bold text-green-600">{packageDetails.price}</p>
                <p className="text-sm text-gray-500">{packageDetails.excludes}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">🏨 Hotel Details</h3>
                <div className="space-y-6">
                  {hotels.map((hotel, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-800">{hotel.nights} @ {hotel.name}</h4>
                      <p className="text-gray-600">Room Type: {hotel.roomType}</p>
                      <p className="text-gray-600">Location: {hotel.location}</p>
                      <a 
                        href={hotel.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-sm"
                      >
                        View Hotel Details →
                      </a>
                      
                      {hotel.benefits && (
                        <div className="mt-4">
                          <h5 className="font-semibold text-green-600 mb-2">COMPLIMENTARY BENEFITS:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {hotel.benefits.map((benefit, bIndex) => (
                              <li key={bIndex} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">📅 Day Wise Itinerary</h3>
                <div className="space-y-3">
                  {itinerary.map((day, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-lg">Day {day.day}: {day.title}</h4>
                        <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">
                          {day.highlight}
                        </span>
                      </div>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">✨ Package Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {packageHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg sticky top-4">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Book This Package</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>2 Adults</option>
                        <option>1 Adult</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>0 Children</option>
                        <option>1 Child</option>
                        <option>2 Children</option>
                        <option>3 Children</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                    <textarea 
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Any special requests or requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Contact Info</h4>
                  <p className="text-sm text-gray-600">📧 info@tripsee.com</p>
                  <p className="text-sm text-gray-600">📞 +91 9876543210</p>
                  <p className="text-sm text-gray-600">💬 WhatsApp Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bali8NightGili;