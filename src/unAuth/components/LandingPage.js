import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Bumpups from './Bumpups';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <main className="landing-page">
        <div className="landing-page__card">
          <h1 className="landing-page__title">rumbxo's AI YouTube Timestamps</h1>
          <p className="landing-page__subtitle">
            Welcome to your go-to tool for generating AI-powered timestamps for YouTube videos. Whether you're a content creator looking to enhance your videos or a viewer wanting to navigate through long videos more efficiently, our AI YouTube Timestamps feature has got you covered. Simply paste a YouTube link or video ID, and let our AI do the rest. Get started now and experience the future of video navigation!
          </p>
          <Link className="landing-page__button" to="/features">
            Get Started
          </Link>
        </div>
      </main>
      <Bumpups />
      <Footer />
    </>
  );
};

export default LandingPage;
