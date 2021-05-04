import React from 'react';
import { ProvideConsumer } from './Context';
import { BottonStyled } from './Units/ButtonStyle';

export default function Details() {
    return (
        <ProvideConsumer>
            {value => {
                const { id, img, info, title, inCart, company, price } = value.detailProduct;
                return (
                    <div className="container">
                        {/* Start Title */}
                        <div className="row ">
                            <div className="col-10 text-capitalize text-center mx-auto my-4 font-weight-bold">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* End Title */}

                        {/* Start Info */}
                        <div className="row">


                            {/* Start Title */}
                            <div className="row mx-auto">
                                <div className="img-details  col-md-6">
                                    <img src={img} alt="" className='img-fluid' />
                                </div>
                                <div className="product-text col-lg-4 col md-6 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className='text-muted text-uppercase my-2'>made by : <span className=''>{company}</span></h4>
                                    <strong className="mb-3" style={{ color: "#FA7A00", fontSize: "40px" }}>price : <span>$</span>{price}</strong>
                                    <p className='mb-0 '><strong>some info about the product :</strong></p>
                                    <p className="lead text-muted">
                                        {info}
                                    </p>
                                    <BottonStyled>back to product</BottonStyled>
                                    <BottonStyled cart disabled={inCart ? true : false}>
                                        {inCart ? 'in cart' : 'add to cart'}
                                    </BottonStyled>


                                </div>

                            </div>
                        </div>

                    </div>
                )
            }}
        </ProvideConsumer>
    )
}
