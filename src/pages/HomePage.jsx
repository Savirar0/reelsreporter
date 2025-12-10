import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import ReelReportersProgram from '../components/ReelReportersProgram';
import FourSteps from '../components/FourSteps';
import PaymentModel from '../components/PaymentModel';
import Payments from '../components/Payments';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <PaymentModel />
      <ReelReportersProgram />
      <FourSteps />
      <Payments />
      <Footer />
    </>
  );
};

export default HomePage;
