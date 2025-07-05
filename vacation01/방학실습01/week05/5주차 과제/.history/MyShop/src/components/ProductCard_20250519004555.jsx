const ProductCard = ({ productImage, category, name, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col text-black text-left">
      <div className="w-full flex">
        <img
          src={productImage}
          alt={name}
          className="w-56 h-32 object-contain mb-4"
        />
      </div>
      <p className="text-sm text-gray-500">{category}</p>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-base font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
