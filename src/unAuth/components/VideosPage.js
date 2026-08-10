import React, { useEffect } from 'react';
import './PageSection.css';
import Footer from './Footer';
import { featuredVideos, profiles } from '../../data/siteContent';

const getTikTokVideoId = (url) => {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : '';
};

const reloadTikTokEmbedScript = () => {
  const scriptId = 'tiktok-embed-script';
  const oldScript = document.getElementById(scriptId);

  if (oldScript) {
    oldScript.remove();
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
};

const VideosPage = () => {
  useEffect(() => {
    reloadTikTokEmbedScript();
  }, []);

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

        <section className="video-grid" aria-label="Featured video links">
          {featuredVideos.map((item, index) => (
            <article className={`video-card video-card--${item.accent}`} key={item.title}>
              <div className="video-card__embed">
                <span className="video-card__number">0{index + 1}</span>
                <blockquote
                  className="tiktok-embed"
                  cite={item.url}
                  data-video-id={getTikTokVideoId(item.url)}
                  data-embed-from="oembed"
                  style={{ maxWidth: '325px', minWidth: '280px' }}
                >
                  <section>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Watch {item.title} on TikTok
                    </a>
                  </section>
                </blockquote>
              </div>
              <div>
                <span className="video-card__platform">{item.platform}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="embed-note">
          <h2>Featured post slots</h2>
          <p>
            These slots now point directly to the three selected @rumbxo TikTok edits.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VideosPage;
