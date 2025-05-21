const Header = ({ query, setQuery, handleSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 relative">
      <div className="absolute top-0 left-8 text-xl font-bold">TV Show</div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
        className="bg-gray-100 border-gray-600 px-3 py-2 border rounded-xl w-1/3"
      />
      <button
        onClick={handleSearch}
        className="border border-blue-500 rounded-xl bg-blue-300 px-4 hover:bg-blue-500"
      >
        검색
      </button>
    </div>
  );
};

export default Header;
