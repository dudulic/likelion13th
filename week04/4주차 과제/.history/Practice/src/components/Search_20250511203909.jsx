const Search = () => {
  return (
    <div className="flex item-center gap-2">
      <div className="">TV Show</div>
      <input
        className="px-20 py-20 border-1 rounded-3xl w-1/2 text-left mx-auto"
        placeholder="검색어를 입력하세요"
      />
      <button>검색</button>
    </div>
  );
};

export default Search;
