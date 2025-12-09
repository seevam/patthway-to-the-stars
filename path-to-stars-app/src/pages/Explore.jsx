import React from 'react';
import './Page.css';

const Explore = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1>🌌 Explore the Universe</h1>
          <p className="page-subtitle">
            Interactive space exploration and real-time sky guide
          </p>
        </div>

        <div className="coming-soon">
          <div className="coming-soon-icon">🛸</div>
          <h2>Space Explorer Coming Soon!</h2>
          <p>
            Get ready for an immersive experience with virtual tours, constellation
            finders, and tonight's sky predictions!
          </p>
          <ul className="feature-preview">
            <li>🪐 Virtual solar system tour</li>
            <li>⭐ Interactive constellation finder</li>
            <li>🌙 Tonight's sky predictions</li>
            <li>🎯 Space challenges</li>
            <li>📅 Celestial events calendar</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Explore;
