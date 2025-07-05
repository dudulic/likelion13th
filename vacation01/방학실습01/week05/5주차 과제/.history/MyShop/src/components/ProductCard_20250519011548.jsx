const ProductCard = ({ productImage, category, name, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg  p-4 flex flex-col text-black text-left">
      <div className="w-full flex justify-center ">
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
