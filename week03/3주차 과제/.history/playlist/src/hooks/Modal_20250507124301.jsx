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
        className="relative bg-white rounded-xl shadow-2xl p-4 max-w-2xl w-[50%] flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-gray-600 text-2xl font-bold hover:text-black"
        >
          ×
        </button>
        <img
          src={image}
          alt="Album"
          className="max-h-[500px] w-auto rounded-lg mt-2"
        />
      </div>
    </div>
  );
};

export default Modal;
