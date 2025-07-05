const Search = () => {
  return (
    <div className="flex item-center gap-2">
      <div>TV Show</div>
      <input
        className="px-full py-2 border-1 rounded-3xl"
        placeholder="검색어를 입력하세요"
      />
      <button>검색</button>
    </div>
  );
};

export default Search;
