import Button from "./Button";
import { useCart } from "./CartContext";

const ProductCard = ({ productImage, category, name, price }) => {
  const { addToCart } = useCart();

  const product = { productImage, category, name, price };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col text-black text-left">
      <div className="w-full flex justify-center ">
        <img src={productImage} alt={name} className="h-32 object-contain mb-4" />
      </div>
      <p className="text-sm text-gray-500">{category}</p>
      <h2 className="text-lg pt-4 font-semibold">{name}</h2>
      <div className="w-full flex justify-between items-center mt-2">
        <p className="text-base font-bold">${price}</p>
        <Button variant="Cart" onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
