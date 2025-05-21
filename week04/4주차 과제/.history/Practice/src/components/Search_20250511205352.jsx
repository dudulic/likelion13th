const Search = () => {
  return (
    <div className="flex justify-center item-center gap-1 mt-10">
      <div className="absolute top-3 left-3">TV Show</div>
      <input
        className="bg-gray-100 border-gray-600 px-2 py-2 border-1 rounded-xl w-1/3 text-left"
        placeholder="검색어를 입력하세요"
      />
      <button className="border-1 border-blue-500 rounded-xl bg-blue-300 px-4">검색</button>
    </div>
  );
};

export default Search;
