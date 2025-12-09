import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      icon: '🌟',
      title: 'Free Explorer',
      price: 'Free',
      description: 'Perfect for trying out the platform',
      features: [
        'Access to beginner lessons',
        'Basic quizzes and challenges',
        'Virtual solar system tour',
        'Community access (read-only)'
      ],
      ctaText: 'Start Free',
      ctaVariant: 'secondary',
      featured: false
    },
    {
      icon: '🔭',
      title: 'Star Gazer',
      price: '$19.99/month',
      description: 'Full access to all learning content',
      features: [
        'All learning paths (Beginner to Advanced)',
        'DIY telescope building kit',
        'Video tutorials from Timur',
        'Interactive challenges',
        'Achievement badges',
        'Community posting',
        'Progress tracking',
        'Priority support'
      ],
      ctaText: 'Get Started',
      ctaVariant: 'primary',
      featured: true
    },
    {
      icon: '🏫',
      title: 'Classroom Edition',
      price: 'Contact Us',
      description: 'Perfect for teachers and schools',
      features: [
        'Everything in Star Gazer',
        'Multi-student dashboard',
        'Classroom management tools',
        'Progress reports',
        'Bulk telescope kits',
        'Teacher resources',
        'Custom lesson plans',
        'Dedicated support'
      ],
      ctaText: 'Contact Sales',
      ctaVariant: 'tertiary',
      featured: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">Start your journey to the stars today</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={plan.featured ? 'pricing-wrapper-featured' : ''}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}>
                {plan.featured && <div className="pricing-badge">Most Popular</div>}
                <h3 className="pricing-title">
                  {plan.icon} {plan.title}
                </h3>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <Button variant={plan.ctaVariant} fullWidth>
                  {plan.ctaText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
