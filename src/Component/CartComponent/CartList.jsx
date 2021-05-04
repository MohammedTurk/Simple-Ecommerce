import React from "react";
import CartElement from "./CartElement";
export default function CartList({ cart, value }) {
  return (
    <div>
      {cart.map((item) => {
        return (
          <CartElement
            key={item.id}
            item={item}
            value={value}
            // increment={value.increment}
            // decrement={value.decrement}
          />
        );
      })}
    </div>
  );
}
