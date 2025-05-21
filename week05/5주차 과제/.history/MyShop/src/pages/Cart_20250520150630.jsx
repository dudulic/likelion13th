import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <p className="mt-8">장바구니가 비어 있습니다.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {" "}
      {/* 여백 추가 */}
      <h1 className="text-2xl font-bold mb-4">장바구니</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <img src={item.productImage} alt={item.name} style={{ height: 80 }} />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
