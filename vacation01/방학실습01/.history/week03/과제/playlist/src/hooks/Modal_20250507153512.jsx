import { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

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
        /*모달사진을 클릭해도 꺼지지 않게 하기*/
        className="relative bg-sky-200 rounded-xl shadow-2xl p-4 max-w-xl w-[50%] flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-gray-600 text-2xl font-bold hover:text-black"
        >
          ×
        </button>
        <img
          src={image}
          alt="selected-album"
          className="max-h-[500px] w-auto rounded-lg "
        />
      </div>
    </div>
  );
};

export default Modal;
