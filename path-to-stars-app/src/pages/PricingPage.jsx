import React from 'react';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import './Page.css';

const PricingPage = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1>🚀 Get Started</h1>
          <p className="page-subtitle">
            Choose the perfect plan for your space adventure
          </p>
        </div>
      </div>
      <Pricing />
      <FAQ />
    </main>
  );
};

export default PricingPage;
