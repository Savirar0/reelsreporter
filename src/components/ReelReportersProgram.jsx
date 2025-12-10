import React from 'react';
import { FaPencilAlt, FaVideo, FaBullhorn } from 'react-icons/fa';
import './ReelReportersProgram.css';

const ReelReportersProgram = () => {
  return (
    <section className="reel-reporters-program">
      <div className="program-content">
        <h2>The Reel Reporters Program</h2>
        <p>A unique opportunity to become a paid video journalist from your community.</p>
        <div className="program-details">
          <div className="program-card">
            <h3>What You'll Do</h3>
            <ul>
              <li>
                <FaPencilAlt className="icon" />
                <span>Find and research compelling stories in your area.</span>
              </li>
              <li>
                <FaVideo className="icon" />
                <span>Shoot and edit short-form news videos.</span>
              </li>
              <li>
                <FaBullhorn className="icon" />
                <span>Publish your work to a wide audience.</span>
              </li>
            </ul>
          </div>
          <div className="program-card">
            <h3>What You'll Get</h3>
            <ul>
              <li>
                <FaPencilAlt className="icon" />
                <span>Expert training from experienced journalists.</span>
              </li>
              <li>
                <FaVideo className="icon" />
                <span>Access to our creator studio and video editing tools.</span>
              </li>
              <li>
                <FaBullhorn className="icon" />
                <span>A platform to build your personal brand.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="paid-banner">
          <p>This is a paid program. You get paid, once your reel is approved and published on WNN</p>
        </div>
      </div>
    </section>
  );
};

export default ReelReportersProgram;
