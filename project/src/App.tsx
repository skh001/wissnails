import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Booking />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;