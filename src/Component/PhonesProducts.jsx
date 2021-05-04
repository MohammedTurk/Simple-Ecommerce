import React from 'react'
import Product from './Product';
import { ProvideConsumer } from './Context';
import styled from 'styled-components';
import Title from './Units/Title';

export default function PhonesProducts(props) {
    return (
        <ProductGrid>
            <div className='container row mx-auto'>
                <Title name="our" title="Phones" />
                <ProvideConsumer>

                    {value => {
                        return value.storeProducts.map(p => {
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

