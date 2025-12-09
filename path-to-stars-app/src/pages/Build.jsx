import React from 'react';
import './Page.css';

const Build = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1>🔭 Build Your Telescope</h1>
          <p className="page-subtitle">
            Step-by-step guide to building your own telescope
          </p>
        </div>

        <div className="coming-soon">
          <div className="coming-soon-icon">🔧</div>
          <h2>Telescope Building Guide Coming Soon!</h2>
          <p>
            We're preparing detailed video tutorials and instructions to help you
            build your very own telescope. Exciting times ahead!
          </p>
          <ul className="feature-preview">
            <li>🎥 Video tutorials from Timur</li>
            <li>📋 Parts checklist</li>
            <li>🔨 Step-by-step assembly guide</li>
            <li>❓ Troubleshooting help</li>
            <li>📸 Share your telescope photos</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Build;
