import React from 'react';
import './BecomeReelReporter.css';

const BecomeReelReporter = () => {
  return (
    <section className="become-reel-reporter">
      <div className="reporter-content">
        <h2>Become a Reel Reporter</h2>
        <p>Follow these simple steps to join our network of citizen journalists.</p>
        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">Step 1</span>
            <h3>Submit Your Application</h3>
            <p>Fill out our online application form and tell us why you want to be a Reel Reporter.</p>
          </div>
          <div className="step-card">
            <span className="step-number">Step 2</span>
            <h3>Complete the Training</h3>
            <p>Participate in our online training program to learn the fundamentals of video journalism.</p>
          </div>
          <div className="step-card">
            <span className-="step-number">Step 3</span>
            <h3>Start Creating</h3>
            <p>Once you're approved, you can start creating and submitting your news reels.</p>
          </div>
        </div>
        <button className="submit-button">Apply Now</button>
      </div>
    </section>
  );
};

export default BecomeReelReporter;
