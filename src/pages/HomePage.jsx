import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import ReelReportersProgram from '../components/ReelReportersProgram';
import BecomeReelReporter from '../components/BecomeReelReporter';
import PaymentModel from '../components/PaymentModel';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <PaymentModel />
      <ReelReportersProgram />
      <BecomeReelReporter />
    </>
  );
};

export default HomePage;
