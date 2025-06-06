// SongCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SongCard = ({
  albumImage,
  releaseDate,
  artist,
  title,
  lyricist,
  composer,
}) => {
  return (
    <section className="w-100 bg-gray-800 p-6 rounded-lg shadow">
//         <img
//           src={albumImage}
//           alt={`${title} 앨범 커버`}
//           className="w-full rounded mb-4"
//         />
//         <h2 className="text-2xl font-semibold">{title}</h2>
//         <hr className="my-4" />
//         <p className="text-gray-200">🎤 가수: {artist}</p>
//         <p className="text-gray-200">📝 작사가: {lyricist}</p>
//         <p className="text-gray-200">🎼 작곡가: {composer}</p>
//         <p className="text-gray-400 text-sm mt-2">📅 발매일: {releaseDate}</p>
//       </section>
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
