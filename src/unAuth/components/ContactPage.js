import React from 'react';
import './PageSection.css';
import Bumpups from './Bumpups';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <>
      <main className="page-main">
        <div className="page-container">
          <div className="page-card">
            <h1 className="page-title">Contact</h1>
            <p className="page-text">
              Have a question or need help? Reach out and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <p>Email: support@rumbxo.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: Remote-friendly, available worldwide.</p>
            </div>
          </div>
        </div>
      </main>
      <Bumpups />
      <Footer />
    </>
  );
};

export default ContactPage;
