const SongCard = ({
  albumImage,
  releaseDate,
  artist,
  title,
  lyricist,
  composer,
}) => {
  return (
    /*ph:w-60 ph:p-3 pt:text-sm ph:m-3 dt:w-100 dt:p-6 dt:m-5 dt:text-base bg-gray-800 rounded-lg shadow*/
    <section className="w-full p-6 bg-sky-200 border-gray-200 border-2 rounded-lg shadow-2xl">
      <img
        src={albumImage}
        alt={`${title} 앨범 커버`}
        className="w-full rounded mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <hr className="my-4" />
      <p className="text-gray-900">🎤 가수: {artist}</p>
      <p className="text-gray-900">📝 작사가: {lyricist}</p>
      <p className="text-gray-900">🎼 작곡가: {composer}</p>
      <p className="text-gray-900 text-sm mt-2">📅 발매일: {releaseDate}</p>
    </section>
  );
};

export default SongCard;
