import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-content">
        <div className="info-text">
          <h2>What is Way2News Reel Reporters Program?</h2>
          <p>
            Way2News is launching India's largest reel-based citizen journalism network, and anyone can become a Reel Reporter.
          </p>
          <div className="steps-container">
            <div className="step">
              <h3>No Degree Required</h3>
              <p>You don't need a journalism degree to get started.</p>
            </div>
            <div className="step">
              <h3>No Professional Equipment Needed</h3>
              <p>All you need is your smartphone and a passion for news.</p>
            </div>
            <div className="step">
              <h3>No Investment Required</h3>
              <p>This program is completely free to join.</p>
            </div>
          </div>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="info-image">
          <img src="https://via.placeholder.com/400" alt="Reel Reporters Program" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
