import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Icon from "../Icon.svg";
import styled from "styled-components";
import ProvideContext from "./Context";

export default function NavBar() {
  let TheContext = useContext(ProvideContext);
  // const length = TheContext.cartLength();
  // useEffect(() => {
  //   // let length = TheContext.cartLength();
  //   console.log("from the effect => ", TheContext.cartLength());
  // });
  return (
    <NavWrapper className="navbar navbar-expand-lg navbar-light bg-primary ">
      <Link className="navbar-brand " to="/">
        <div className="brand d-flex align-items-center">
          <img src={logo} alt=" logo " />{" "}
          <span className="ml-2">Local Store</span>
        </div>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto  my-auto">
          <li className="nav-item ml-2">
            <Link className="nav-link text-center" to="/phonesproducts">
              Phones{" "}
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link className="nav-link  text-center" to="/sweetsproducts">
              Sweets{" "}
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link className="nav-link  text-center" to="/signin">
              Sign In{" "}
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link className="nav-link  text-center" to="/signup">
              Sign Up{" "}
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link
              className="nav-link  text-center"
              to="/about"
              // onClick={TheContext.cartLength}
            >
              About{" "}
            </Link>
          </li>
        </ul>
      </div>

      <div className="tool-bar d-flex">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={Icon} alt="" />
          </span>
        </button>
        <Link className="nav-link  " to="/cart">
          <span className="cart-icon ">
            {/* <span className="counter-span">{TheContext.cart.length}</span> */}
            <i className="fa fa-shopping-cart mr-1 "></i>
          </span>
        </Link>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: #1d2941 !important;
  .navbar-brand {
    color: #fff !important;
    font-size: 25px;
  }
  .nav-link {
    color: #ffffff !important;
    transition: all 0.5s ease;
    &:hover {
      color: #fa7a00 !important;
    }
  }
  .cart-icon {
    background: #2d384f !important;
    padding: 12px;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    position: relative;
  }
  .nav-item .nav-link {
    font-size: 24px;
  }
  .navbar-toggler {
    border: none;
  }
  .navbar-toggler:focus {
    outline: none;
  }
  .counter-span {
    background-color: #fa7a00;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.25rem;
    position: absolute;
    top: -0.3125rem;
    right: -0.3125rem;
  }
`;
const TheButton = styled.button`
  background: #161f5a !important;
  border: 1px solid #8fcbec;
  padding: 5px 10px;
  font-size: 1.1rem;
  border-radius: 5px;
  text-transform: capitalize;
  color: #8fcbec;
  transition: all 0.5s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #fa7a00;

    color: #fa7a00;
    background: tranparent !important;
  }
`;
