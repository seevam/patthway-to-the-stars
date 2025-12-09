import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pathways from '../components/home/Pathways';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pathways />
      <Pricing />
      <FAQ />
    </main>
  );
};

export default Home;
