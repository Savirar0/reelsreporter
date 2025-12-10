import React from 'react';
import './Payments.css';

const Payments = () => {
  return (
    <div className="payments-container">
      <div className="payments-content">
        <div className="payments-text">
          <h2>Payments & Withdrawals</h2>
          <div className="payment-details">
            <div className="payment-column">
              <h3>Weekly Pay</h3>
              <p>Only for approved reels (EPR earnings).</p>
              <h3>Monthly Pay</h3>
              <p>Subscriber incentive + View incentive + Milestone bonus.</p>
              <p>View incentive is calculated at month-end.</p>
            </div>
            <div className="payment-column">
              <h3>Withdrawals</h3>
              <p>Withdraw anytime after 1st of every month.</p>
              <p>Payments are sent through UPI.</p>
              <p>Earning period: 1st to 31st of each month.</p>
              <p>Weekly payment covers approved reels only.</p>
              <p>Withdrawal is processed within 24 hours.</p>
            </div>
          </div>
        </div>
        <div className="payments-image">
          <img src="/upi.jpg" alt="UPI Payments" />
        </div>
      </div>
    </div>
  );
};

export default Payments;
