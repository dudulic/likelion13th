const Search = () => {
  return (
    <div className="flex justify-center item-center gap-2">
      <div className="absolute top-3 left-3">TV Show</div>
      <input
        className="px-20 py-2 border-1 rounded-3xl w-1/2 text-left"
        placeholder="검색어를 입력하세요"
      />
      <button className="bg-white">검색</button>
    </div>
  );
};

export default Search;
