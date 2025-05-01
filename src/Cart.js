import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-4 mt-4">
            <img src={item.image} alt={item.title} className="h-20" />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
