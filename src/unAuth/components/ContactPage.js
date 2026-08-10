import React from 'react';
import './PageSection.css';
import Footer from './Footer';
import { profiles } from '../../data/siteContent';

const ContactPage = () => {
  return (
    <>
      <main className="page-main">
        <section className="page-hero">
          <p className="eyebrow">Contact</p>
          <h1>Work with RUMBXO</h1>
          <p>
            For collabs, edits, project files, or social inquiries, reach out through the active social profiles.
          </p>
          <div className="button-row">
            <a className="button button--primary" href={profiles.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            <a className="button button--ghost" href={profiles.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
