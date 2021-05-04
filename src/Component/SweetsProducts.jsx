import React from 'react';
import { ProvideConsumer } from './Context';
import Product from './Product';
import Title from './Units/Title';

import styled from "styled-components";

export default function SweetsProducts() {
    return (
        <ProductGrid>
            <div className='container row mx-auto'>
                <Title name="our" title="Sweets" />
                <ProvideConsumer>

                    {value => {
                        return value.sweetsProducts.map(p => {
                            return <Product key={p.id} theProduct={p} />
                        })
                    }}
                </ProvideConsumer>
            </div>
        </ProductGrid>

    )
}
const ProductGrid = styled.section`
    background: #c8c9cf27 !important;
`;
