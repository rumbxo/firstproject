import React from 'react';
import './Bumpups.css';

const Bumpups = () => {
  return (
    <section className="bumpups">
      <h2 className="bumpups__title">Why choose us?</h2>
      <div className="bumpups__grid">
        <div className="bumpups__card">
          <h3>Fast setup</h3>
          <p>Launch your project quickly with a clean React component structure.</p>
        </div>
        <div className="bumpups__card">
          <h3>Modern layout</h3>
          <p>Responsive styles make this page look great on desktop and mobile.</p>
        </div>
        <div className="bumpups__card">
          <h3>Simple design</h3>
          <p>Minimal CSS keeps the UI clear and easy to maintain.</p>
        </div>
      </div>
    </section>
  );
};

export default Bumpups;
