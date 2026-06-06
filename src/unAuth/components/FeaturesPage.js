import React, { useState } from 'react';
import './PageSection.css';
import './YouTubePlayer.css';
import Bumpups from './Bumpups';
import Footer from './Footer';

const FeaturesPage = () => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [timestamps, setTimestamps] = useState([]);

  const extractVideoId = (youtubeUrl) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /^([a-zA-Z0-9_-]{11})$/
    ];

    for (let pattern of patterns) {
      const match = youtubeUrl.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return '';
  };

  const generateSampleTimestamps = () => [
    { time: '00:00', label: 'Intro and purpose of the video' },
    { time: '01:20', label: 'Key AI timestamp features explained' },
    { time: '03:45', label: 'Using timestamps to jump to highlights' },
    { time: '06:10', label: 'Best practices for creators and viewers' },
    { time: '08:30', label: 'Wrap up and next steps' }
  ];

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleLoadVideo = () => {
    const id = extractVideoId(url.trim());
    if (id) {
      setVideoId(id);
      setTimestamps(generateSampleTimestamps());
    } else {
      alert('Please enter a valid YouTube URL or video ID');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLoadVideo();
    }
  };

  return (
    <>
      <main className="page-main">
        <div className="page-container">
          <div className="youtube-player-wrapper">
            <div className="youtube-player-card">
              <h1 className="youtube-title">AI YouTube Timestamp System</h1>
              <p className="youtube-subtitle">
                Paste a YouTube link or video ID and load the video to preview AI-driven timestamps. Navigate faster, skip to highlights, and unlock smarter watching for long-form content.
              </p>

              <div className="youtube-input-group">
                <input
                  type="text"
                  className="youtube-input"
                  placeholder="https://youtube.com/watch?v=... or dQw4w9WgXcQ"
                  value={url}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="youtube-button"
                  onClick={handleLoadVideo}
                >
                  Load Video
                </button>
              </div>

              {videoId && (
                <>
                  <div className="youtube-embed-container">
                    <iframe
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="youtube-timestamps-card">
                    <div className="youtube-timestamps-header">
                      <h2>AI Generated Timestamps</h2>
                      <p>Jump directly to the important moments in the video.</p>
                    </div>
                    <ul className="youtube-timestamp-list">
                      {timestamps.map((item) => (
                        <li key={item.time} className="youtube-timestamp-item">
                          <span className="timestamp-time">{item.time}</span>
                          <span className="timestamp-label">{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Bumpups />
      <Footer />
    </>
  );
};

export default FeaturesPage;
