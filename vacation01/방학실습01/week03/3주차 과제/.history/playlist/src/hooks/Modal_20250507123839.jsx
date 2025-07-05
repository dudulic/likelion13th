import { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    // 현재 overflow 상태 저장
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // 스크롤 막기
    document.body.style.overflow = 'hidden';

    // 모달 닫힐 때 복구
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-[90%] flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-bold hover:text-black"
        >
          ×
        </button>
        <img
          src={image}
          alt="Album"
          className="max-h-[500px] w-auto rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default Modal;