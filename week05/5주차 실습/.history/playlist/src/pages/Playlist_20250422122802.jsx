// import albumData from '../data/song.json';
// import SongCard from '../components/SongCard';

// export const Playlist = () => {
//   const { albumImage, releaseDate, artist, title, lyricist, composer } =
//     albumData;

//   return (
//     <main className="p-10">
//       <section className="w-100 bg-gray-800 p-6 rounded-lg shadow">
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
//     </main>
//   );
// };

import React from 'react';
import albumData from '../data/song.json'; // 4곡이 들어 있는 배열
import SongCard from '../components&layout/SongCard'; // 하나의 카드 컴포넌트

export const Playlist = () => {
  return (
    <main className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {albumData.map((song, index) => (
        <SongCard key={index} {...song} />
      ))}
    </main>
  );
};
