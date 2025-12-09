import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Interactive Learning',
      description: 'Age-appropriate astronomy lessons with three skill levels',
      features: ['Beginner (Ages 8-9)', 'Intermediate (Ages 10-11)', 'Advanced (Ages 12-14)']
    },
    {
      icon: '🎮',
      title: 'Gamified Experience',
      description: 'Learn through fun quizzes, challenges, and achievements',
      features: ['Interactive Quizzes', 'Space Challenges', 'Achievement Badges']
    },
    {
      icon: '🔭',
      title: 'Build Your Telescope',
      description: 'Step-by-step guides to build your own telescope',
      features: ['Video Tutorials', 'Parts Checklist', 'Troubleshooting Help']
    },
    {
      icon: '👥',
      title: 'Safe Community',
      description: 'Share discoveries with other young astronomers',
      features: ['Student Showcase', 'Moderated Sharing', 'Parent Resources']
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Path to the Stars?</h2>
          <p className="section-subtitle">Everything you need to explore the universe</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="feature-card">
                <div className="feature-card-accent"></div>
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-list">
                  {feature.features.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
