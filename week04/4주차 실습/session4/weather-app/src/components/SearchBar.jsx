import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false); // 한글 조합 중 여부

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (!isComposing && e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 w-[320px] h-12 bg-white/95 border border-white/40 backdrop-blur-md shadow-sm rounded-xl">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        placeholder="도시명을 입력해주세요"
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-sm"
      />
      <FiSearch
        onClick={handleSearch}
        className="text-slate-900 text-2xl font-semibold pl-2 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
