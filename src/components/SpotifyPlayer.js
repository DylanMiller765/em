import React from 'react';

const SpotifyPlayer = () => {
  return (
    <div className="spotify-player-container">
      <iframe
        title="Spotify Playlist"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/7kpYRTbaio13tvHkYERTyv?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
