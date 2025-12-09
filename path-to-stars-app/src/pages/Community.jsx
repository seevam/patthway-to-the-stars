import React from 'react';
import './Page.css';

const Community = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1>👥 Community</h1>
          <p className="page-subtitle">
            Connect with other young astronomers and share your discoveries
          </p>
        </div>

        <div className="coming-soon">
          <div className="coming-soon-icon">🌟</div>
          <h2>Community Features Coming Soon!</h2>
          <p>
            We're building a safe, moderated community where young astronomers can
            share their discoveries and learn from each other.
          </p>
          <ul className="feature-preview">
            <li>📸 Student showcase gallery</li>
            <li>💬 Safe, moderated discussions</li>
            <li>👨‍👩‍👧‍👦 Parent resources</li>
            <li>👨‍🏫 Teacher hub</li>
            <li>🎉 Community challenges</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Community;
