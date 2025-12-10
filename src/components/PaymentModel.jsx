
import React, { useState, useEffect } from 'react';
import './PaymentModel.css';

const slabs = [
    { min:0, max:25000, epr:50, subYou:1, subInsta:1, views:[50000,100000,300000], viewVals:[100,300,500], milestone:{threshold:25000, bonus:12000} },
    { min:25000, max:75000, epr:75, subYou:0.85, subInsta:0.85, views:[100000,250000,500000], viewVals:[100,300,500], milestone:{threshold:75000, bonus:25000} },
    { min:75000, max:125000, epr:100, subYou:0.75, subInsta:0.75, views:[125000,250000,500000], viewVals:[100,300,500], milestone:{threshold:125000, bonus:25000} },
    { min:125000, max:250000, epr:150, subYou:0.6, subInsta:0.6, views:[150000,300000,600000], viewVals:[100,300,500], milestone:{threshold:250000, bonus:50000} },
    { min:250000, max:500000, epr:250, subYou:0.5, subInsta:0.5, views:[250000,500000,750000], viewVals:[100,300,500], milestone:{threshold:500000, bonus:85000} },
    { min:500000, max:Infinity, epr:400, subYou:0.5, subInsta:0.5, views:[250000,500000,750000], viewVals:[100,300,500], milestone:{threshold:750000, bonus:85000} }
];

const formatNum = (n) => {
    if (n === Infinity) return '∞';
    return Number(n).toLocaleString('en-IN');
};

const PaymentModel = () => {
    const [subs, setSubs] = useState(12000);
    const [platform, setPlatform] = useState('youtube');
    const [activeSlab, setActiveSlab] = useState(slabs[0]);

    useEffect(() => {
        const currentSlab = slabs.slice().reverse().find(s => subs >= s.min) || slabs[0];
        setActiveSlab(currentSlab);
    }, [subs, platform]);

    const handleSubsChange = (e) => {
        setSubs(Math.max(0, Number(e.target.value || 0)));
    };

    const handlePlatformChange = (e) => {
        setPlatform(e.target.value);
    };

    const subRate = platform === 'youtube' ? activeSlab.subYou : activeSlab.subInsta;
    const rangeText = activeSlab.max === Infinity ? `${formatNum(activeSlab.min)}+` : `${formatNum(activeSlab.min)} − ${formatNum(activeSlab.max)}`;


    return (
        <div className="pm-wrap">
            <header className="pm-hero">
                <h1>Payment model lookup</h1>
                <p className="muted">Enter your subscriber count to see the correct payment slab and view incentives.</p>
            </header>

            <div className="pm-inputs card">
                <label>Subscriber count
                    <input id="subsInput" type="number" min="0" value={subs} onChange={handleSubsChange} />
                </label>

                <label className="small">Platform
                    <select id="platform" value={platform} onChange={handlePlatformChange}>
                        <option value="youtube">YouTube</option>
                        <option value="instagram">Instagram</option>
                    </select>
                </label>
                <div className="hint muted">Tip: try values like 12000, 40000, 90000, 200000, 400000, 600000</div>
            </div>

            <div id="resultCard" className="card result-card" aria-live="polite">
                {subs > 0 ? (
                    <>
                        <div className="range">Tier: {rangeText}</div>
                        <div className="row">
                            <div className="label">Earning per published reel (EPR)</div>
                            <div className="value">{`₹${activeSlab.epr} / video`}</div>
                        </div>
                        <div className="row">
                            <div className="label">Per new subscriber</div>
                            <div className="value">{`₹${subRate}`}</div>
                        </div>
                        <div className="label">View incentives (per video)</div>
                        <div className="view-list">
                            {activeSlab.views.map((th, i) => (
                                <div className="view-item" key={i}>
                                    <div>{formatNum(th)} views</div>
                                    <div className="value">{`₹${activeSlab.viewVals[i] || '-'}`}</div>
                                </div>
                            ))}
                        </div>
                        <div className="milestone">
                            {`Milestone: After ${formatNum(activeSlab.milestone.threshold)} subscribers — Bonus ₹${formatNum(activeSlab.milestone.bonus)}`}
                        </div>
                        <div className="muted small" style={{ marginTop: '10px' }}>
                            {`You are currently at ${formatNum(subs)} subscribers. This display shows amounts per video and milestone bonuses.`}
                        </div>
                    </>
                ) : (
                    <div className="loader-text">Enter subscribers to see payment details</div>
                )}
            </div>

            <footer className="muted small">This is a simplified display of view/subscriber/milestone incentives — for exact payouts check creator agreement.</footer>
        </div>
    );
};

export default PaymentModel;
