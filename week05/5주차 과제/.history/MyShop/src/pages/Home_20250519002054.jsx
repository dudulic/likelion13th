// const Home = () => {
//   return <div>Home 페이지</div>;
// };

// export default Home;

// src/pages/Home.jsx
import ProductCard from "../components/ProductCard";
import products from "../data/data.json";

const Home = () => {
  return (
    <div className="pt-24 px-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-2 dt:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
