import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Build from './pages/Build';
import Explore from './pages/Explore';
import Community from './pages/Community';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/build" element={<Build />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
