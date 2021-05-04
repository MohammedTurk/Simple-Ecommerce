import React, { Component } from 'react'
import styled from 'styled-components';
import { ProvideConsumer } from './Context';
import { BottonStyled } from './Units/ButtonStyle';
import { Link } from 'react-router-dom';
export default class Modal extends Component {
    render() {
        return (
            <ProvideConsumer>
                {value => {
                    const { modalProduct, modalOpen, closeModal } = value;
                    const { img, title, price, company } = modalProduct;

                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container row  mx-auto col-lg-3 col-md-7 col-8" style={{ backgroundColor: "#fff", borderRadius: "15px" }}>
                                    <div className="text-center text-capitalize  mx-auto p-5">
                                        <h5 style={{ color: "#1D2941" }}><strong>item added to cart</strong></h5>
                                        <img src={img} alt="product" className="img-fluid" />
                                        <h3 style={{ color: "#1D2941" }}>{title}</h3>
                                        <h5 className="text-muted">made by : {company}</h5>
                                        <h1 style={{ color: "#FA7A00" }}><strong>price : <span>$</span>{price}</strong></h1>

                                        <BottonStyled onClick={closeModal}>continue to shoping</BottonStyled>
                                        <Link to='/cart'>
                                            <BottonStyled cart onClick={closeModal}>go to cart</BottonStyled>
                                        </Link>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }

                }}

            </ProvideConsumer>
        )
    }
}
const ModalContainer = styled.div`
position:fixed;
left:0;
right:0;
top:0;
bottom:0;
background-color:rgba(0,0,0,.3);
display:flex;
align-items:center;
justify-content:center;

`;

