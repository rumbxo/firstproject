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
            Start with the featured TikTok edits, then jump into the full TikTok and Instagram feeds.
          </p>
          <div className="button-row">
            <a className="button button--primary" href={profiles.tiktok} target="_blank" rel="noreferrer">Open TikTok</a>
            <a className="button button--ghost" href={profiles.instagram} target="_blank" rel="noreferrer">Open Instagram</a>
          </div>
        </section>

        <section className="featured-videos" aria-labelledby="featured-videos-title">
          <div className="section-heading">
            <p className="eyebrow">Featured videos</p>
            <h2 id="featured-videos-title">Looping previews</h2>
          </div>

          <div className="video-grid">
            {featuredVideos.map((item) => (
              <article className={`video-card video-card--${item.accent}`} key={item.title}>
                <div className="video-card__media">
                  <video
                    className="video-card__player"
                    src={item.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
                <div className="video-card__body">
                  <span className="video-card__platform">{item.platform}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a className="button button--ghost video-card__link" href={item.url || profiles.tiktok} target="_blank" rel="noreferrer">
                    Watch on TikTok
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VideosPage;
