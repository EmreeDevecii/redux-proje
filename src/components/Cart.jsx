//components/Cart.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="container">
      <ul className="list-group">
        {cart.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title} - Quantity: {item.quantity}
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Sepetten Kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
