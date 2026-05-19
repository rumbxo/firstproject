import React from 'react';
import './LandingPage.css';
import NavBar from './NavBar';
import Bumpups from './Bumpups';
import Timestamp from './Timestamp';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <main className="landing-page">
        <div className="landing-page__card">
          <h1 className="landing-page__title">Hello Landing Page</h1>
          <p className="landing-page__subtitle">
            Welcome to your React app. This is a basic landing page component.
          </p>
          <button className="landing-page__button" type="button">
            Get Started
          </button>
        </div>
      </main>
      <Bumpups />
      <Timestamp />
      <Footer />
    </>
  );
};

export default LandingPage;
