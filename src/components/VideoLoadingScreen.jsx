import React, { useState, useEffect } from 'react';
import './VideoLoadingScreen.css';

const VideoLoadingScreen = ({ onVideoEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = document.getElementById('loading-video');
    video.onended = () => {
      setFadeOut(true);
      setTimeout(onVideoEnd, 1000); // Wait for fade out animation
    };
  }, [onVideoEnd]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <video id="loading-video" src="/intro.mp4" autoPlay muted playsInline />
    </div>
  );
};

export default VideoLoadingScreen;
