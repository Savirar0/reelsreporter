
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src="/waytonewslogo.png" alt="way2news logo" className="loading-logo" />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="header">
        <img src="/waytonewslogo.png" alt="way2news logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">How to Earn</a></li>
            <li><a href="#">What we need</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>way2news</h1>
            <h2>Reel Reporter Program</h2>
            <p className="earnings-p">Earn ₹15,000 to ₹40,000+ per month by creating 60 seconder News Reels as a Way2News Reel Reporter.</p>
            <div className="getting-started-container">
                <div className="getting-started">
                    <h3>GETTING STARTED IS SIMPLE, HOW?</h3>
                    <ol>
                        <li>Shoot 2 sample news reels (60 secs each) on any current affair/informative topic</li>
                        <li>Your face must be on camera</li>
                        <li>Use your natural voice</li>
                        <li>Register and upload your videos</li>
                    </ol>
                    <p className="note">NOTE: DO NOT SHARE YOUR PERSONAL REELS ETC. THIS WILL BE A STRAIGHT REJECTION</p>
                </div>
                <div className="arrow">→</div>
                <div className="what-happens-next">
                    <h3>WHAT HAPPENS NEXT?</h3>
                    <p>Our team will evaluate your reels and, if selected, you will be:</p>
                    <ol>
                        <li>Assigned Content Category</li>
                        <li>Given Basic Training</li>
                        <li>Access to Creator Studio's Login</li>
                        <li>Able to start earning</li>
                    </ol>
                </div>
            </div>
            <p className="connect-create-earn">Connect . Create . Earn</p>
            <button className="share-reels-btn">
                <span className="creators-network">way2news Creators network</span>
                <span className="share-reels-text">Share TWO clear 60 seconder reels</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
