import { useNavigate } from 'react-router-dom';

export const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogin = () => {
    onClose();
    navigate('/login');
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
    >
      <div className="relative bg-white rounded-xl px-6 pt-10 pb-8 w-80 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 cursor-pointer text-gray-800 text-xl"
        >
          X
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-3">
          로그인이 필요한 기능입니다
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          해당 기능을 사용하려면 <br />
          소셜 로그인을 진행해주세요.
        </p>

        <button
          onClick={handleLogin}
          className="w-full py-2 cursor-pointer rounded-md bg-main text-white font-semibold hover:opacity-90 transition"
        >
          로그인 하러 가기
        </button>
      </div>
    </div>
  );
};
