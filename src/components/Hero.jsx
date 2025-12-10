import React, { useEffect } from 'react';
import './Hero.css';
import { animateHero } from '../animations';

const Hero = () => {

  useEffect(() => {
    animateHero();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/homepagepic.jpg" alt="News Reporter" />
        </div>
        <div className="hero-text">
          <h1>Earn 15000 to 40000+ per month</h1>
          <p>Create news reels for Way2News and become a reporter from anywhere.</p>
          <button className="hero-button">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
