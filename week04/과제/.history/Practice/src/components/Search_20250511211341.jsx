function ButtonOnClick() {
  
}

const Search = () => {
  return (
    <>
      <button
        onClick={ButtonOnClick}
        className="border-1 border-blue-500 rounded-xl bg-blue-300 px-4 hover:bg-blue-500 cursor-pointer"
      >
        검색
      </button>
    </>
  );
};

export default Search;
