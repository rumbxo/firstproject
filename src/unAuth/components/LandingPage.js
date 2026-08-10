import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Footer from './Footer';
import { featuredVideos, profiles } from '../../data/siteContent';

const LandingPage = () => {
  return (
    <>
      <main className="landing-page">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">TikTok first • Reels ready • Project files</p>
            <h1>RUMBXO</h1>
            <p className="hero__lead">
              A clean home for the videos, drops, edits, and downloadable project files behind @rumbxo.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/videos">Watch Videos</Link>
              <a className="button button--ghost" href={profiles.tiktok} target="_blank" rel="noreferrer">TikTok</a>
              <a className="button button--ghost" href={profiles.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          <div className="hero__showcase" aria-label="RUMBXO video preview stack">
            <div className="phone-frame phone-frame--main">
              <div className="video-poster">
                <span className="video-poster__tag">For You</span>
                <span className="video-poster__play">▶</span>
                <span className="video-poster__handle">@rumbxo</span>
              </div>
            </div>
            <div className="phone-frame phone-frame--side">
              <div className="mini-feed">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-strip" aria-label="Featured content">
          {featuredVideos.map((item) => (
            <a className={`feature-tile feature-tile--${item.accent}`} href={item.url} key={item.title}>
              <span>{item.platform}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </a>
          ))}
        </section>

        <div className="platform-band">
          <p>Built to point fans, collaborators, and editors to the right place fast.</p>
          <Link to="/projects">Browse project downloads</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
