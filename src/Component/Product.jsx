import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProvideConsumer } from './Context';

export default class Product extends Component {
    render() {
        const { id, img, title, price, info, inCart, count, total } = this.props.theProduct;
        return (
            <ProvideConsumer>
                {value => {
                    const { handleDetails, openModal } = value;
                    return (
                        <ProductWrapper className="col-lg-3 col-md-6  my-3  mx-auto">
                            <div className="card" >
                                <div className="img-container">
                                    <Link to='/details' className='nav-link' onClick={() => handleDetails(img)}>
                                        <img className="card-img-top " src={img} alt={title} />
                                    </Link>
                                    <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { value.handleAddToCart(img); openModal(img) }} >
                                        {inCart ? (<p className="text-capitalize mb-0">in cart</p>) : (<i className="fa fa-cart-plus"></i>)}
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className=" my-auto">{title}</p>
                                    <p className=" my-auto">
                                        <span>$</span>
                                        {price}
                                    </p>
                                </div>


                            </div>
                        </ProductWrapper>
                    )
                }
                }
            </ProvideConsumer >


        )
    }
}
const ProductWrapper = styled.div`
width: 18rem;

.img-container{
    overflow:hidden;
    position:relative;
    
}
.card{
transition:all .4s ease;

}
&:hover{
    .card{
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,.2);
    border:0.04rem solid rgba(0,0,0,.2);
    }
    .card-footer{
        background-color:rgba(0, 0, 0, 0.06)
    }
} 
.cart-btn{
    cursor:pointer;
    padding:0.2rem .4rem;
    font-size:1.4rem;
    background-color:#FA7A00;
    color:#fff;
    border:none;
    position:absolute;
    right:0;
    bottom:0;
    transform:translate(100%,100%);
    transition:all .3s linear;
    border-radius: 7px 0 0 0;



}
.img-container:hover .cart-btn{
    transform:translate(0,0);

}
`


