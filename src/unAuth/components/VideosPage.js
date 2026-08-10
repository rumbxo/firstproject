import React from 'react';
import './PageSection.css';
import Footer from './Footer';
import { featuredVideos, profiles } from '../../data/siteContent';

const VideosPage = () => {
  return (
    <>
      <main className="page-main">
        <section className="page-hero">
          <p className="eyebrow">Video hub</p>
          <h1>Watch the RUMBXO feed</h1>
          <p>
            Start with TikTok, jump into Instagram Reels, and use the featured slots below for specific posts as the page grows.
          </p>
          <div className="button-row">
            <a className="button button--primary" href={profiles.tiktok} target="_blank" rel="noreferrer">Open TikTok</a>
            <a className="button button--ghost" href={profiles.instagram} target="_blank" rel="noreferrer">Open Instagram</a>
          </div>
        </section>

        <section className="video-grid" aria-label="Featured video links">
          {featuredVideos.map((item, index) => (
            <a className={`video-card video-card--${item.accent}`} href={item.url} key={item.title}>
              <div className="video-card__poster">
                <span className="video-card__number">0{index + 1}</span>
                <span className="video-card__play">▶</span>
              </div>
              <div>
                <span className="video-card__platform">{item.platform}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </section>

        <section className="embed-note">
          <h2>Featured post slots</h2>
          <p>
            Replace the profile links in <code>src/data/siteContent.js</code> with direct TikTok or Instagram post URLs when you want this page to showcase individual videos.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VideosPage;
