import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import RecentList from '../components/RecentList';

const Home = () => {
  const [city, setCity] = useState('Seoul');
  const [recentCities, setRecentCities] = useState([]);

  // TODO: 최근 검색 도시(localStorage) 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recentCities') || '[]');
    setRecentCities(saved);
    // localStorage.getItem()
  }, []);

  // TODO: 검색 시 최근 도시 저장 + 상태 업데이트
  const handleSearch = (newCity) => {
    setCity(newCity);

    const saved = JSON.parse(localStorage.getItem('recentCities') || '[]');

    const updated = [newCity, ...saved.filter((c) => c !== newCity)].slice(
      0,
      5
    );

    localStorage.setItem('recentCities', JSON.stringify(updated));
    setRecentCities(updated);

    // 기존 목록에서 중복 제거 후 newCity 추가 → 5개 제한
    // localStorage.setItem()
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#E0F2FF]">
      <div className="mb-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#1E293B]">
          Today's Weather
        </h1>
        <p className="mt-2 text-sm text-[#64748B]">
          간편하게 도시별 실시간 날씨 확인하기
        </p>
      </div>

      {/* 검색 바 */}
      <SearchBar onSearch={handleSearch} />

      {/* 날씨 카드 */}
      <WeatherCard city={city} />

      {/* 최근 검색 */}
      <RecentList cities={recentCities} onCityClick={handleSearch} />
    </div>
  );
};

export default Home;
