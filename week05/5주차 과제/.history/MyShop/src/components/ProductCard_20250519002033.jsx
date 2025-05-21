// src/components/ProductCard.jsx
const ProductCard = ({ name, price, category, image }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-md text-black">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-2 rounded-md" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-gray-700 font-medium">${price}</p>
    </div>
  );
};

export default ProductCard;
