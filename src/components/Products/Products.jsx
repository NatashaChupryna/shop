import React from 'react';

import {
  ProductList,
  Product,
  Button,
  Img,
  ProductName,
  ProductPrice,
} from './Products.styled';

export function Products({ products, onAdd }) {
  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.id}>
          <Img
            src={process.env.PUBLIC_URL + '/Products/' + product.src}
            alt="My Image"
          />
          <ProductName>{product.title}</ProductName>
          <ProductPrice>{product.price}$</ProductPrice>
          <Button
            onClick={() => {
              onAdd(product);
            }}
          >
            Buy
          </Button>
        </Product>
      ))}
    </ProductList>
  );
}
