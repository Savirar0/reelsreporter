
import React from 'react';
import './FourSteps.css';

const FourSteps = () => {
  return (
    <section className="steps-wrapper">
      <h2 className="steps-title">4 Steps to Become a Reel Reporter</h2>
      <p className="steps-subtitle">
        Anyone can join Way2News — India’s Reel-Based Citizen Journalism Network.
      </p>
      <div className="steps-grid">
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-badge">1</div>
          <h3>Submit Your Sample Reels</h3>
          <p>Shoot 2 sample reels (60 seconds each)</p>
          <ul>
            <li>Face must be clearly visible</li>
            <li>Use your real voice</li>
          </ul>
          <button className="primary-btn">Upload Sample Reels</button>
        </div>
        {/* Step 2 */}
        <div className="step-card">
          <div className="step-badge">2</div>
          <h3>Evaluation Process</h3>
          <p>Our team reviews your content based on:</p>
          <ul>
            <li>Camera presence & confidence</li>
            <li>Speaking clarity</li>
            <li>Topic delivery</li>
            <li>Accuracy</li>
            <li>Audio / visual quality</li>
            <li>Originality</li>
          </ul>
        </div>
        {/* Step 3 */}
        <div className="step-card">
          <div className="step-badge">3</div>
          <h3>Category Assignment & Onboarding</h3>
          <p>After approval:</p>
          <ul>
            <li>We assign your content category</li>
            <li>Creator Studio login access</li>
            <li>Training videos</li>
            <li>Rules & examples</li>
            <li>Account manager support</li>
          </ul>
        </div>
        {/* Step 4 */}
        <div className="step-card">
          <div className="step-badge">4</div>
          <h3>Creator Studio</h3>
          <p>Upload news reels via WhatsApp or Studio login.</p>
          <ul>
            <li>Approvals</li>
            <li>Rejection reasons</li>
            <li>EPR earnings</li>
            <li>Bonuses</li>
            <li>Subscriber growth</li>
            <li>Weekly + monthly payouts</li>
            <li>Total earnings</li>
            <li>Withdrawals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FourSteps;
