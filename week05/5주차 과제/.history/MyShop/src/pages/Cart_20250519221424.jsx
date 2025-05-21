import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  <div className=""></div>

  if (cartItems.length === 0) {
    return <p>장바구니가 비어 있습니다.</p>;
  }

  return (
    <div>
      <h1>장바구니</h1>
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
