import React from "react";
import { Link } from "react-router-dom";
import { BottonStyled } from "../Units/ButtonStyle";

const CartTotals = ({ value }) => {
  const { subTotal, tax, total, deleteAll } = value;
  console.log();
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-12  text-capitalize text-right ml-5">
          <Link to="/">
            <BottonStyled cart clear className="w-20" onClick={deleteAll}>
              clear all
            </BottonStyled>
          </Link>
        </div>
        <div className="col-lg-12 text-right">
          <strong className="text-uppercase">
            sub total : <span>$ {subTotal}</span>
          </strong>
        </div>
        <div className="col-lg-12 text-right">
          <strong className="text-uppercase">
            tax : <span>$ {tax}</span>
          </strong>
        </div>
        <div className="col-lg-12 text-right">
          <strong className="text-uppercase">
            total : <span>$ {total}</span>
          </strong>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartTotals;
