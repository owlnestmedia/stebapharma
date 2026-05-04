import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ProductSpotlight from './components/ProductSpotlight';
import MenWashSpotlight from './components/MenWashSpotlight';
import HairCareSpotlight from './components/HairCareSpotlight';
import SupplementsSpotlight from './components/SupplementsSpotlight';
import WomenCareSpotlight from './components/WomenCareSpotlight';
import DiabeticCareSpotlight from './components/DiabeticCareSpotlight';
import Products from './components/Products';
import Research from './components/Research';
import Presence from './components/Presence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ProductSpotlight />
        <MenWashSpotlight />
        <HairCareSpotlight />
        <SupplementsSpotlight />
        <WomenCareSpotlight />
        <DiabeticCareSpotlight />
        <Products />
        <Presence />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
