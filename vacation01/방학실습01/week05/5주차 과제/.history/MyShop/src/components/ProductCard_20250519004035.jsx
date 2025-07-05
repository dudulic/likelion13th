const ProductCard = ({ productImage, category, name, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-black text ">
      <img
        src={productImage}
        alt={name}
        className="w-32 h-32 object-contain mb-4"
      />
      <p className="text-sm text-gray-500">{category}</p>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-base font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
