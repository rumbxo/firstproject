import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
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
  );
};

export default LandingPage;
