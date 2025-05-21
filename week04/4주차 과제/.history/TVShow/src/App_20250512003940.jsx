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
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import ShowDetail from "./components/ShowDetail";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (e) {
      console.error("API 호출 실패:", e);
    }
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieCard results={results} />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </>
  );
}

export default App;
