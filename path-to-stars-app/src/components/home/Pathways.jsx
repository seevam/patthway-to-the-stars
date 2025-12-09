import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import './Pathways.css';

const Pathways = () => {
  const pathways = [
    {
      icon: '🚀',
      title: 'Beginner Explorer',
      ageRange: 'Ages 8-9',
      description: 'Perfect for space-curious kids just starting their journey',
      features: [
        'Our Solar System basics',
        'Meet the planets',
        'Moon phases explained',
        'Fun space facts'
      ]
    },
    {
      icon: '🔬',
      title: 'Space Detective',
      ageRange: 'Ages 10-11',
      description: 'Dive deeper into the mysteries of the universe',
      features: [
        'Star life cycles',
        'Galaxy exploration',
        'Space missions',
        'Telescope basics'
      ]
    },
    {
      icon: '🌌',
      title: 'Cosmic Scholar',
      ageRange: 'Ages 12-14',
      description: 'Advanced astronomy for future scientists',
      features: [
        'Astrophysics concepts',
        'Black holes & dark matter',
        'Exoplanet discovery',
        'Research projects'
      ]
    }
  ];

  return (
    <section className="pathways">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Choose Your Learning Path</h2>
          <p className="section-subtitle">Personalized learning journeys for every age group</p>
        </motion.div>

        <div className="pathways-grid">
          {pathways.map((pathway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card gradient className="pathway-card">
                <h3 className="pathway-title">
                  {pathway.icon} {pathway.title}
                </h3>
                <span className="age-badge">{pathway.ageRange}</span>
                <p className="pathway-description">{pathway.description}</p>
                <ul className="pathway-features">
                  {pathway.features.map((feature, idx) => (
                    <li key={idx}>⭐ {feature}</li>
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

export default Pathways;
