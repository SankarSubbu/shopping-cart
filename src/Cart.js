import React, { useEffect } from "react";
import { useState } from "react";

const Cart = ({ items, onRemoveItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    for (const item of items) {
      total += item.price * item.quantity;
    }
    setTotalPrice(total);
  }, [items]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Shopping Cart</h5>
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.title} x {item.quantity}
              <span className="float-right">
                ${item.price}
                <button
                  onClick={() => onRemoveItem(item)}
                  className="btn btn-sm btn-danger ml-2"
                >
                  X
                </button>
              </span>
            </li>
          ))}
        </ul>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart
