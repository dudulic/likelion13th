import { useState } from "react";
import Button from "./Button";
import { useCart } from "./CartContext";

const ProductCard = ({ productImage, category, name, price }) => {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const product = { productImage, category, name, price };

  const handleAddToCart = () => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // 2초 후 알림 사라짐
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-4 flex flex-col text-black text-left">
      {showAlert && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 text-sm px-4 py-2 rounded shadow">
          상품이 추가되었습니다!
        </div>
      )}

      <div className="w-full flex justify-center">
        <img
          src={productImage}
          alt={name}
          className="h-32 object-contain mb-4"
        />
      </div>
      <p className="text-sm text-gray-500">{category}</p>
      <h2 className="text-lg pt-4 font-semibold">{name}</h2>
      <div className="w-full flex justify-between items-center mt-2">
        <p className="text-base font-bold">${price}</p>
        <Button variant="Cart" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
