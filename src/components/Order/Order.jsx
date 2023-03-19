import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import { OrderItem, Img, ProductName, ProductPrice } from './Order.styled';

export function Order({ item, onDelete }) {
  return (
    <OrderItem>
      <Img
        src={process.env.PUBLIC_URL + '/Products/' + item.src}
        alt="My Image"
      />
      <ProductName>{item.title}</ProductName>
      <ProductPrice>{item.price}$</ProductPrice>
      <FaRegTimesCircle
        onClick={() => {
          onDelete(item.id);
        }}
      />
    </OrderItem>
  );
}
