import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopDestinations from './components/TopDestinations';
import BaliExploration from './components/BaliExploration';
import MysticCoastline from './components/MysticCoastline';
import PopularPackages from './components/PopularPackages';
import TravelVibes from './components/TravelVibes';
import ServiceStats from './components/ServiceStats';
import PlanYourTrip from './components/PlanYourTrip';
import Gallery from './components/Gallery';
import TravelPostcard from './components/TravelPostcard';
import TheyLoveTripsee from './components/TheyLoveTripsee';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TopDestinations />
      <BaliExploration />
      <MysticCoastline />
      <PopularPackages />
      <TravelVibes />
      <ServiceStats />
      <PlanYourTrip />
      <Gallery />
      <TravelPostcard />
      <TheyLoveTripsee />
      <Footer />
    </div>
  );
}
