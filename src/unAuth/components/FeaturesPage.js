import React, { useState } from 'react';
import './PageSection.css';
import './YouTubePlayer.css';
import Bumpups from './Bumpups';
import Footer from './Footer';

const FeaturesPage = () => {
  const [url, setUrl] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  const selectBestThumbnail = (thumbnails) => {
    return (
      thumbnails.maxres ||
      thumbnails.standard ||
      thumbnails.high ||
      thumbnails.medium ||
      thumbnails.default ||
      null
    );
  };

  const fetchVideoDetails = async (youtubeId) => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    if (!apiKey) {
      throw new Error('YouTube API key is not configured.');
    }

    const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${youtubeId}&key=${apiKey}`;
    console.log('YouTube API request payload:', {
      endpoint,
      method: 'GET',
      params: {
        part: 'snippet',
        id: youtubeId,
        key: apiKey,
      },
    });
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data || !data.items || data.items.length === 0) {
      throw new Error('Video not found.');
    }

    const snippet = data.items[0].snippet;
    const thumbnail = selectBestThumbnail(snippet.thumbnails);

    return {
      title: snippet.title,
      channelTitle: snippet.channelTitle,
      description: snippet.description,
      thumbnailUrl: thumbnail?.url || '',
      videoId: youtubeId,
    };
  };

  const handleInputChange = (e) => {
    setUrl(e.target.value);
    setError('');
  };

  const handleLoadVideo = async () => {
    const id = extractVideoId(url.trim());
    if (!id) {
      setError('Please enter a valid YouTube URL or video ID.');
      setVideoDetails(null);
      return;
    }

    setLoading(true);
    setError('');
    setVideoDetails(null);

    try {
      const details = await fetchVideoDetails(id);
      setVideoDetails(details);
    } catch (err) {
      setError(err.message || 'Unable to load video details.');
    } finally {
      setLoading(false);
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
                Paste a YouTube link or video ID and preview the video thumbnail and title. This system fetches the best available thumbnail from YouTube and displays the video metadata right below the input.
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
                <button className="youtube-button" onClick={handleLoadVideo}>
                  Load Preview
                </button>
              </div>

              {loading && <div className="youtube-status">Fetching video preview…</div>}
              {error && <div className="youtube-error">{error}</div>}

              {videoDetails && (
                <div className="youtube-preview-panel">
                  <div className="youtube-preview-details">
                    <h2 className="youtube-video-title">{videoDetails.title}</h2>
                    <p className="youtube-video-channel">{videoDetails.channelTitle}</p>
                  </div>

                  <div className="youtube-embed-container">
                    <iframe
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${videoDetails.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
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
