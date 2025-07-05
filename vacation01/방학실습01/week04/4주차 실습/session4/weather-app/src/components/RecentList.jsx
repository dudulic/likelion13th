const RecentList = ({ cities, onCityClick }) => {
  return (
    <div className="mt-6 text-[#64748B] text-sm">
      <p className="font-semibold mb-2">최근 검색</p>
      <div className="flex gap-2 flex-wrap">
        {cities.map((city, idx) => (
          <button
            key={idx}
            onClick={() => onCityClick(city)}
            className="cursor-pointer px-3 py-1 rounded-full bg-white text-sky-600 text-sm font-medium shadow-sm hover:bg-sky-200  transition"
          >
            {city.length > 20 ? `${city.slice(0, 17)}...` : city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentList;
