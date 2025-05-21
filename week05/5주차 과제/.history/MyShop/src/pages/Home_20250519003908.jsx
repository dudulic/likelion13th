import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="mt-36 px-24">
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
