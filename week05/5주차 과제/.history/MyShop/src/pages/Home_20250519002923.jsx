// const Home = () => {
//   return <div>Home 페이지</div>;
// };

// export default Home;

// src/pages/Home.jsx

import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="mt-24 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Our Products
      </h1>
      <div className="grid ph:grid-cols-2 dt:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productImage={product.productImage}
            category={product.category}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
