const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <div>TV Show</div>
      <input
        className="px-20 py-2 border rounded-3xl w-64 text-left"
        placeholder="검색어를 입력하세요"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl">
        검색
      </button>
    </div>
  );
};

export default Search;