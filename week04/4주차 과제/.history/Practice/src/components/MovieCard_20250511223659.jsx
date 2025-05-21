// const MovieCard = () => {
//   return <div>MovieCard</div>;
// };

// export default MovieCard;

const MovieCard = ({ results }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {results.map((item) => {
        const show = item.show;
        return (
          <div key={show.id} className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition">
            <img
              src={show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
              alt={show.name}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{show.name}</h2>
            <div className="mt-1 flex flex-wrap gap-1">
              {show.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                >
                  #{genre}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
