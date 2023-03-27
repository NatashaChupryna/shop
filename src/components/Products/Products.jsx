import { useState, forwardRef } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ProductList,
  Product,
  Button,
  Img,
  ProductName,
  ProductPrice,
} from './Products.styled';

function Products({ products, onAdd, ref }) {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(prevState => !prevState);
  };
  return (
    <ProductList id="products" ref={ref}>
      {products.map(product => (
        <Product key={product.id}>
          <Img
            onClick={toggleModal}
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

          {openModal && (
            <Modal
              onClose={toggleModal}
              src={process.env.PUBLIC_URL + '/Products/' + product.src}
              alt="My Image"
            />
          )}
        </Product>
      ))}
    </ProductList>
  );
}

export default forwardRef(Products);
