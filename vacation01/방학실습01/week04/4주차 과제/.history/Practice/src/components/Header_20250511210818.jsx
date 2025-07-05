import Search from "./Search";

const Header = () => {
  return (
    <div className="flex justify-center item-center gap-1 mt-8">
      <div className="absolute top-8 left-8">TV Show</div>
      <input
        className="bg-gray-100 border-gray-600 px-2 py-2 border-1 rounded-xl w-1/3 text-left"
        placeholder="검색어를 입력하세요"
      />
      <Search />
    </div>
  );
};

export default Header;
