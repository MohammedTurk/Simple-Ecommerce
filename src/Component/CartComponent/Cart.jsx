import React, { Component } from "react";
import { ProvideConsumer } from "../Context";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartColumn />
        <ProvideConsumer>
          {(value) => {
            const { cart } = value;
            return (
              <div>
                <CartList cart={cart} value={value} />
                <CartTotals value={value} />
              </div>
            );
          }}
        </ProvideConsumer>
      </div>
    );
  }
}
