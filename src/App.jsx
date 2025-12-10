import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import HowToEarnPage from './pages/HowToEarnPage';
import VideoLoadingScreen from './components/VideoLoadingScreen';

function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <Router>
      <div className="App">
        {!videoEnded ? (
          <VideoLoadingScreen onVideoEnd={handleVideoEnd} />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/how-to-earn" element={<HowToEarnPage />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
