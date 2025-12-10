import React from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import './HowToEarn.css';

const HowToEarn = () => {
  const earningsData = [
    {
      range: '0 - 25,000',
      payment: '₹50',
      paymentNote: 'Starts at 2 unique video reels/day; higher limits unlock with consistent performance.',
      perSub: { yt: '₹1', ig: '₹1' },
      perSubNote: 'You earn ₹1 per new subscriber on YouTube and Instagram.',
      incentive: '50K views: ₹100<br />100K views: ₹300<br />300K views: ₹500',
      bonus: 'After 25K Subscribers<br />₹12,000'
    },
    {
      range: '25K - 75K',
      payment: '₹75',
      paymentNote: 'Unlock +1 channel in this slab',
      perSub: { yt: '₹0.85', ig: '₹0.85' },
      perSubNote: 'You earn ₹0.85 per new subscriber on YouTube and Instagram.',
      incentive: '100K views : ₹100<br />250K views : ₹300<br />500K views : ₹500',
      bonus: 'After 75K Subscribers<br />₹25,000'
    },
    {
      range: '75K - 125K',
      payment: '₹100',
      paymentNote: 'Unlock +2 channel in this slab',
      perSub: { yt: '₹0.75', ig: '₹0.75' },
      perSubNote: 'You earn ₹0.75 per new subscriber on YouTube and Instagram.',
      incentive: '125K views : ₹100<br />250K views : ₹300<br />500K views : ₹500',
      bonus: 'After 125K Subscribers<br />₹25,000'
    },
    {
      range: '125K - 250K',
      payment: '₹150',
      paymentNote: 'Unlock +3 channel in this slab',
      perSub: { yt: '₹0.60', ig: '₹0.60' },
      perSubNote: 'You earn ₹0.60 per new subscriber on YouTube and Instagram.',
      incentive: '150K views : ₹100<br />300K views : ₹300<br />600K views : ₹500',
      bonus: 'After 250K Subscribers<br />₹50,000'
    },
    {
      range: '250K - 500K',
      payment: '₹250',
      paymentNote: 'Unlock +3 channel in this slab',
      perSub: { yt: '₹0.50', ig: '₹0.50' },
      perSubNote: 'You earn ₹0.50 per new subscriber on YouTube and Instagram.',
      incentive: '250K views : ₹100<br />500K views : ₹300<br />750K views : ₹500',
      bonus: 'After 500K Subscribers<br />₹85,000'
    },
    {
      range: '500K+',
      payment: '₹400',
      paymentNote: 'Unlock +4 channel in this slab',
      perSub: { yt: '₹0.50', ig: '₹0.50' },
      perSubNote: 'You earn ₹0.50 per new subscriber on YouTube and Instagram.',
      incentive: '250K views : ₹100<br />500K views : ₹300<br />750K views : ₹500',
      bonus: 'After 750K Subscribers<br />₹85,000'
    }
  ];

  return (
    <section className="how-to-earn">
      <div className="earn-intro">
        <h2 className="main-title">How Much Can You Earn?</h2>
        <div className="earn-intro-content">
          <div className="earn-intro-text">
            <p className="earning-range">Reel Reporters can earn between <span>₹15,000 - ₹40,000</span> per month</p>
            <p className="top-performers">Top performers can earn even more!</p>
            <ul>
              <li>Payment is based on number of reels published.</li>
              <li>Earnings grow as you produce more engaging content. More subscribers and more views</li>
            </ul>
          </div>
        </div>
        <div className="payment-model">
          <p><span>Payment Model:</span> Earning per Published Reel (EPR) + Subscriber Incentive + View Incentive + Subscribers Milestone Bonus</p>
        </div>
      </div>

      <div className="earnings-breakdown">
        <h3>Your earnings grow as your subscriber base grows. Here's the complete breakdown:</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Subscriber Range (any channel)</th>
                <th>Payment Per short video<br /><span>(Max 2 Videos Upload)</span></th>
                <th>Per New Sub/Follower</th>
                <th>View Incentive/Video</th>
                <th>Milestone Bonus<br /><span>(one-time per platform)</span></th>
              </tr>
            </thead>
            <tbody>
              {earningsData.map((data, index) => (
                <tr key={index}>
                  <td>{data.range}</td>
                  <td>
                    <p className="payment">{data.payment}</p>
                    <p className="payment-note">{data.paymentNote}</p>
                  </td>
                  <td>
                    <div className="per-sub">
                      <span><FaYoutube className="yt-icon" /> {data.perSub.yt}</span>
                      <span><FaInstagram className="ig-icon" /> {data.perSub.ig}</span>
                    </div>
                    <p className="per-sub-note">{data.perSubNote}</p>
                  </td>
                  <td dangerouslySetInnerHTML={{ __html: data.incentive }}></td>
                  <td dangerouslySetInnerHTML={{ __html: data.bonus }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note">Note : Maximizing Your Earnings - The more subscribers/followers you build, and the more views your videos get, the more you Earn Per Reel.</p>
        <p className="example-link">Example: Your Earnings for One Month <a href="#">Click here</a></p>
      </div>
    </section>
  );
};

export default HowToEarn;
