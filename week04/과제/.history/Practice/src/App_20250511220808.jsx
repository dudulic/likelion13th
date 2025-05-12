// import "./App.css";
// import Header from "./components/Header";
// import MovieCard from "./components/MovieCard";

// function App() {
//   return (
//     <>
//       <Header />
//       <MovieCard />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("API 오류:", err);
    }
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <MovieCard results={results} />
    </>
  );
}

export default App;
