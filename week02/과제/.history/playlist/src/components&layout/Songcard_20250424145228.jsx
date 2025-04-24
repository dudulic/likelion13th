// SongCard.jsx
import React from 'react';

const SongCard = ({
  albumImage,
  releaseDate,
  artist,
  title,
  lyricist,
  composer,
}) => {
  return (
    <section className="w-100 p-6 border-2 border-sky-200 rounded-lg shadow-2xl">
      <img
        src={albumImage}
        alt={`${title} 앨범 커버`}
        className="w-full rounded mb-4"
      />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <hr className="my-4" />
      <p className="text-gray-200">🎤 가수: {artist}</p>
      <p className="text-gray-200">📝 작사가: {lyricist}</p>
      <p className="text-gray-200">🎼 작곡가: {composer}</p>
      <p className="text-gray-400 text-sm mt-2">📅 발매일: {releaseDate}</p>
    </section>
  );
};

export default SongCard;
