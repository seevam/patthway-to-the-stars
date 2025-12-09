import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What age group is this platform designed for?',
      answer: 'Path to the Stars is designed for children ages 8-14, with three distinct learning paths tailored to different age groups and skill levels.'
    },
    {
      question: 'Do I need any prior astronomy knowledge?',
      answer: 'No prior knowledge needed! Our beginner path starts with the basics and gradually introduces more complex concepts as you progress.'
    },
    {
      question: 'What comes in the DIY telescope kit?',
      answer: 'The kit includes all necessary parts to build a functioning telescope, along with detailed instructions and video tutorials. You\'ll need basic tools like scissors and tape.'
    },
    {
      question: 'Is the community feature safe for kids?',
      answer: 'Yes! All community features are moderated, and we follow COPPA guidelines. Parents can control their child\'s community access through parental settings.'
    },
    {
      question: 'Can teachers use this in their classroom?',
      answer: 'Absolutely! Our Classroom Edition includes tools for managing multiple students, tracking progress, and accessing additional teaching resources.'
    },
    {
      question: 'What if my child needs help?',
      answer: 'We offer support through email and our help center. Star Gazer members get priority support, and Classroom Edition includes dedicated support.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about Path to the Stars</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
