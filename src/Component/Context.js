import React, { Component } from "react";
import { storeProducts, detailProduct, sweetsProducts } from "../data";
const ProvideContext = React.createContext();
export default ProvideContext;
class ProductProvider extends Component {
  state = {
    storeProducts: storeProducts,
    detailProduct: detailProduct,
    sweetsProducts: sweetsProducts,
    cart: [],
    modalOpen: false,
    modalProduct: {},
    subTotal: 0,
    tax: 0,
    total: 0,
  };

  componentDidMount() {
    let theState = JSON.parse(localStorage.getItem("State"));
    // localStorage.removeItem("State");
    localStorage.getItem("State") &&
      this.setState({
        cart: theState.cart,
        subTotal: theState.subTotal,
        tax: theState.tax,
        total: theState.total,
      });
  }
  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("State", JSON.stringify(this.state));
  }

  getImgUrl = (img) => {
    const products = [...storeProducts, ...sweetsProducts];
    const product = products.find((item) => {
      return item.img === img;
    });

    return product;
  };

  handleDetails = (img) => {
    const detailProduct = this.getImgUrl(img);
    this.setState({
      detailProduct,
    });
  };

  handleAddToCart = (img) => {
    const product = this.getImgUrl(img);
    const pathCom = img.slice(0, 10);
    const price = product.price;
    product.total = price;
    product.inCart = true;
    product.count = 1;
    if (pathCom === "img-sweets") {
      const products = [...this.state.sweetsProducts];
      const index = products.indexOf(product);
      products[index] = product;
      this.setState(
        {
          sweetsProducts: products,
          cart: [...this.state.cart, product],
        },
        () => {
          this.addTotal();
        }
      );
    } else {
      const products = [...this.state.storeProducts];
      const index = products.indexOf(product);
      products[index] = product;

      this.setState(
        {
          storeProducts: products,
          cart: [...this.state.cart, product],
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  openModal = (img) => {
    const product = this.getImgUrl(img);
    this.setState({
      modalProduct: product,
      modalOpen: true,
    });
  };

  closeModal = (_) => {
    this.setState({
      modalOpen: false,
    });
  };

  increment = (img) => {
    const cart = [...this.state.cart];
    const product = cart.find((f) => f.img === img);
    const Index = cart.indexOf(product);
    cart[Index].count += 1;
    const price = cart[Index].price;
    cart[Index].total = price * cart[Index].count;
    this.setState(
      {
        cart: cart,
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = (img) => {
    const cart = [...this.state.cart];
    const product = cart.find((f) => f.img === img);
    const Index = cart.indexOf(product);
    const price = cart[Index].price;
    cart[Index].count -= 1;
    cart[Index].total = price * cart[Index].count;

    this.setState(
      {
        cart,
      },
      () => {
        this.addTotal();
      }
    );
    if (cart[Index].count === 0) this.deleteItem(img);
  };

  deleteItem = (img) => {
    const product = this.getImgUrl(img);
    product.count = 0;
    product.inCart = false;
    const pathCom = img.slice(0, 10);
    if (pathCom === "img-sweets") {
      const products = [...sweetsProducts];
      const Index = products.indexOf(product);
      products[Index] = product;
      this.setState({
        sweetsProducts: products,
      });
    } else {
      const products = [...storeProducts];
      const Index = products.indexOf(product);
      products[Index] = product;
      this.setState({
        storeProducts: products,
      });
    }

    const cart = this.state.cart.filter((f) => f.img !== img);
    this.setState({ cart }, () => {
      this.addTotal();
    });
  };

  getTotals = (_) => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTaxt = subTotal * 0.1;
    const tax = parseFloat(tempTaxt.toFixed(2));
    const total = tax + subTotal;
    return {
      subTotal,
      tax,
      total,
    };
  };

  addTotal = (_) => {
    const totals = this.getTotals();
    this.setState({
      subTotal: totals.subTotal,
      tax: totals.tax,
      total: totals.total,
    });
  };

  deleteAll = (_) => {
    let tempStore = [...storeProducts];
    let tempSweet = [...sweetsProducts];
    this.setState(
      {
        cart: [],
        storeProducts: tempStore,
        sweetsProducts: tempSweet,
      },
      () => {
        console.log({ tempStore });
      }
    );
  };

  cartLength = (_) => {
    // return ;
    let length = 0;
    this.state.cart.forEach((element) => {
      length++;
    });
    console.log(length);
    return length;
  };

  render() {
    return (
      <ProvideContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          handleAddToCart: this.handleAddToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          deleteItem: this.deleteItem,
          deleteAll: this.deleteAll,
          cartLength: this.cartLength,
        }}
      >
        {this.props.children}
      </ProvideContext.Provider>
    );
  }
}
const ProvideConsumer = ProvideContext.Consumer;
export { ProductProvider, ProvideConsumer };
