// const MovieCard = () => {
//   return <div>MovieCard</div>;
// };

// export default MovieCard;

import { Link } from "react-router-dom";

const MovieCard = ({ results }) => {
  if (!results.length)
    return <div className="text-center mt-8">검색 결과가 없습니다.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {results.map(({ show }) => (
        <Link to={`/shows/${show.id}`} key={show.id}>
          <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
            <img
              src={
                show.image?.medium ||
                "https://via.placeholder.com/210x295?text=No+Image"
              }
              alt={show.name}
              className="w-full h-[250px] rounded"
            />
            <h2 className="text-lg font-bold mt-2">{show.name}</h2>
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
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;
