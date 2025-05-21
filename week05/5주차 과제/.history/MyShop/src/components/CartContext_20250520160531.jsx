import React, { createContext, useState, useContext } from "react";

// Context 생성
const CartContext = createContext();

// Provider 컴포넌트
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 상품 추가 함수
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 커스텀 훅으로 Context 사용
export const useCart = () => useContext(CartContext);
