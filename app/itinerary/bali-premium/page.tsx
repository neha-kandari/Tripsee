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

const BaliPremiumItinerary = () => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero images from Bali
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

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const packageDetails = {
    title: "Bali Premium Romantic Getaway",
    duration: "5 Nights 6 Days",
    location: "Bali, Indonesia",
    price: "₹1,85,000/-",
    rating: 5
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Gallery Hero Section - Same as Bali Page */}
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
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>



          {/* Hero Content */}
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

          {/* Thumbnail Navigation */}
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
                    alt={image.title}
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

      {/* Trip Overview & Booking Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Side - Package Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 max-h-screen overflow-y-auto">
                
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">PREMIUM PACKAGE</h3>
                  <p className="text-sm text-gray-600 mb-4">Please find below Bali 5 nights tentative package:</p>
                  <div className="text-2xl font-bold text-orange-600 mb-1">₹91,500/-</div>
                  <div className="text-sm text-gray-600 mb-4">For a Couple</div>
                </div>

                {/* Hotel Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Hotel Details</h4>
                  
                  {/* Hotel 1 */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">3 nights @ Swiss-Belvillas Umalas</h5>
                    <p className="text-sm text-gray-600 mb-2">Room type: One Bedroom pvt pool villa</p>
                    <a href="https://dsawahvillaumalas.com/one-bedroom-villa-with-private-pool/" 
                       className="text-xs text-blue-600 hover:underline break-all" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      dsawahvillaumalas.com/one-bedroom-villa-with-private-pool/
                    </a>
                    
                    <div className="mt-3">
                      <h6 className="font-medium text-gray-900 mb-2 flex items-center">
                        <span className="mr-2">👉😍</span>COMPLIMENTARY BENEFITS
                      </h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Welcome drink</li>
                        <li>• 1 x floating breakfast</li>
                        <li>• 1x honeymoon cake</li>
                        <li>• 30 mins massage (shoulder/head)</li>
                        <li>• 1 x Bed decoration</li>
                        <li>• 1 x mini bar (loaded with snacks and non-alcoholic beverages)</li>
                        <li>• 10% off on spa</li>
                        <li>• 10% off on f&b</li>
                      </ul>
                    </div>
                  </div>

                  {/* Hotel 2 */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">2 nights @ Swan Paradise A Pramana Experience</h5>
                    <p className="text-sm text-gray-600 mb-2">Room type: Superior</p>
                    <a href="https://swanparadisebali.com/" 
                       className="text-xs text-blue-600 hover:underline" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      swanparadisebali.com/
                    </a>
                  </div>
                </div>

                {/* Day Wise Itinerary */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Day Wise Itinerary</h4>
                  
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-500 pl-3">
                      <h5 className="font-medium text-gray-900">Day 1: Arrival</h5>
                      <p className="text-sm text-gray-600">Romantic Candle Light Dinner</p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <h5 className="font-medium text-gray-900">Day 2: Water Adventures</h5>
                      <p className="text-sm text-gray-600">Watersports (x1 banana boat, x1 jet ski, x1 parasailing) and 1 Hour Balinese massage + Uluwatu Temple – Kecak Dance</p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <h5 className="font-medium text-gray-900">Day 3: Nusa Penida Island</h5>
                      <p className="text-sm text-gray-600">West Nusa Penida Island Day Tour (Broken beach, Angel Billabong, Kelingking beach, Bubu beach) with local lunch and snorkelling</p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <h5 className="font-medium text-gray-900">Day 4: Temple Tour</h5>
                      <p className="text-sm text-gray-600">Ulun Danu Temple – Handara Gate – Tanah Lot Temple</p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <h5 className="font-medium text-gray-900">Day 5: Kintamani & Ubud</h5>
                      <p className="text-sm text-gray-600">Kintamani volcano view, Ubud market, Tegenungan waterfall, Tegallalang rice terrace, and Ubud Jungle swing. Inter hotel transfer</p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <h5 className="font-medium text-gray-900">Day 6: Departure</h5>
                      <p className="text-sm text-gray-600">Check-out and departure transfer</p>
                    </div>
                  </div>
                </div>

                {/* Package Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Package Highlights</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>5 Nights Stay</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Private Pool Villa</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Water Sports</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Island Tours</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Temple Visits</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Spa & Massage</span>
                    </div>
                  </div>
                </div>



              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
                
                {/* Package Info */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">PREMIUM PACKAGE</h3>
                  <p className="text-sm text-gray-600 mb-2">Bali 5 nights tentative package</p>
                  <div className="text-2xl font-bold text-orange-600 mb-1">₹91,500/-</div>
                  <div className="text-sm text-gray-600 mb-4">For a Couple</div>
                </div>

                {/* Booking Form */}
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                        <option>2</option>
                        <option>1</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                    <textarea 
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Any special requests or requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-2">Need Help?</div>
                    <div className="text-sm text-gray-600 mb-2">Call us: +91 98765 43210</div>
                    <div className="text-sm text-gray-600">Email: info@tripsee.com</div>
                  </div>
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

export default BaliPremiumItinerary; 