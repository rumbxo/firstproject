import React from 'react';
import './Bumpups.css';

const Bumpups = () => {
  return (
    <section className="bumpups">
      <h2 className="bumpups__title">Why AI YouTube Timestamps?</h2>
      <p className="bumpups__subtitle">
        Turn long videos into intelligent navigation tools. Our AI timestamps help viewers jump straight to the moments that matter.
      </p>
      <div className="bumpups__grid">
        <div className="bumpups__card">
          <h3>Automated chapter discovery</h3>
          <p>Use AI to generate precise timestamps instantly, so viewers can find the best sections without scrubbing.</p>
        </div>
        <div className="bumpups__card">
          <h3>Smarter video navigation</h3>
          <p>Improve watch time and engagement with every video by making content easy to browse.</p>
        </div>
        <div className="bumpups__card">
          <h3>Creator-friendly workflow</h3>
          <p>Save time on manual editing and let AI do the heavy lifting for your YouTube timestamps.</p>
        </div>
      </div>
    </section>
  );
};

export default Bumpups;
