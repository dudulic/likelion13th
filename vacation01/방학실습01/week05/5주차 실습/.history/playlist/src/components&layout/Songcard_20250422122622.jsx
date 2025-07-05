// SongCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SongCard = ({ albumImage, releaseDate, artist, title, lyricist, composer }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <img src={albumImage} alt={`${title} 앨범 커버`} className="w-full h-56 object-cover rounded mb-4" />
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400">{artist}</p>
      <p className="text-gray-300">{lyricist} / {composer}</p>
      <p className="text-gray-200">{releaseDate}</p>
    </div>
  );
};

SongCard.propTypes = {
  albumImage: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyricist: PropTypes.string.isRequired,
  composer: PropTypes.string.isRequired,
};

export default SongCard;
