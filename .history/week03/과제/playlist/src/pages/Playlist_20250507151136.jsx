import albumData from '../data/song.json';
import SongCard from '../components&layout/SongCard';
import { useState } from 'react';
import Modal from '../hooks/modal';

export const Playlist = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedTitle, setSelectedTitle]

  const handleImageClick = (image, title) => {
    setSelectedImage(image);
    setSelectedImage(title);
  };

  const handleCloseModal = () => {
    setSelectedImage();
  };

  return (
    <main className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {albumData.map((song, albumId) => (
        <SongCard
          key={albumId}
          {...song}
          onCardClick={() => handleImageClick(song.albumImage, song.title)}
        />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </main>
  );
};
