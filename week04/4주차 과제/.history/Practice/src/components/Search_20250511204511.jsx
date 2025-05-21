const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2 w-1/2">
        <div className="absolute left-0 top-0">Name</div>
        <input
          className="px-4 py-2 border rounded-3xl w-full text-left"
          placeholder="검색어를 입력하세요"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl">
          검색
        </button>
      </div>
    </div>
  );
};

export default Search;
