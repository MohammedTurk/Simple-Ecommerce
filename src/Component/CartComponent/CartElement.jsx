import React from "react";
import styled from "styled-components";
import "../../App.css";
export default function CartElement({ item, value }) {
  const { increment, decrement, deleteItem } = value;
  return (
    <div className="container-fluid">
      <div className="row text-center text-capitalize my-4">
        <div className="col-10 col-lg-2 mx-auto d-flex justify-content-center align-items-center my-1">
          <img
            src={item.img}
            alt=""
            style={{ width: "80px", height: "80px", alignSelf: "center" }}
          />
        </div>
        <div className="col-10 col-lg-2  mx-auto d-flex justify-content-center align-items-center my-1">
          <span className="d-lg-none">product : </span>
          {item.title}
        </div>
        <div className="col-10 col-lg-2  mx-auto d-flex justify-content-center align-items-center my-1">
          <strong>
            {" "}
            <span className="d-lg-none">item price : </span>${item.price}
          </strong>
        </div>
        <div className="col-10 col-lg-2  mx-auto d-flex justify-content-center align-items-center my-1">
          {/* <ProvideConsumer>
            {(value) => {
              const { increment, decrement } = value;
              return (
                <React.Fragment> */}
          <button
            className="btn btn-black"
            disabled={item.count === 0 ? true : false}
            onClick={() => decrement(item.img)}
          >
            -
          </button>
          <button className="btn btn-black">{item.count}</button>
          <button className="btn btn-black" onClick={() => increment(item.img)}>
            +
          </button>
          {/* </React.Fragment>
              );
            }}
          </ProvideConsumer> */}
        </div>

        <div className="col-10 col-lg-2  mx-auto d-flex justify-content-center align-items-center my-1">
          <span onClick={() => deleteItem(item.img)}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
        <div className="col-10 col-lg-2  mx-auto d-flex justify-content-center align-items-center my-1">
          <strong>
            <span className="d-lg-none">item total : </span>${item.total}
          </strong>
        </div>
      </div>
    </div>
  );
}
