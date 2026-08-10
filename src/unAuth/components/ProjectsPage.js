import React from 'react';
import './PageSection.css';
import Footer from './Footer';
import { projectDownloads } from '../../data/siteContent';

const ProjectsPage = () => {
  return (
    <>
      <main className="page-main">
        <section className="page-hero">
          <p className="eyebrow">Downloads</p>
          <h1>Project files</h1>
          <p>
            A professional download area for edit files, presets, collab briefs, and future assets connected to RUMBXO content.
          </p>
        </section>

        <section className="download-list" aria-label="Project downloads">
          {projectDownloads.map((project) => (
            <article className="download-item" key={project.title}>
              <div>
                <span>{project.meta}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <a className="button button--primary" href={project.file} download>Download</a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
