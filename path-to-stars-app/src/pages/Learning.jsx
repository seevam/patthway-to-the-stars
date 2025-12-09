import React from 'react';
import './Page.css';

const Learning = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1>🌟 Learning Hub</h1>
          <p className="page-subtitle">
            Choose your learning path and start exploring the universe
          </p>
        </div>

        <div className="coming-soon">
          <div className="coming-soon-icon">🚀</div>
          <h2>Interactive Learning Coming Soon!</h2>
          <p>
            We're building an amazing learning experience with interactive lessons,
            quizzes, and challenges. Stay tuned!
          </p>
          <ul className="feature-preview">
            <li>🪐 Three skill levels (Beginner, Intermediate, Advanced)</li>
            <li>📚 Interactive lessons with animations</li>
            <li>🎮 Fun quizzes and challenges</li>
            <li>🏆 Achievement badges</li>
            <li>📊 Progress tracking</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Learning;
