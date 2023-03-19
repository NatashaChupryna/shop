import React from 'react';
import { ProductsTitle, Categories, Category } from './Filter.styled';

export function Filter({ filter }) {
  return (
    <>
      <ProductsTitle>Our products :</ProductsTitle>
      <Categories>
        <Category
          key={1}
          onClick={() => {
            filter('all');
          }}
        >
          all
        </Category>
        <Category
          key={2}
          onClick={() => {
            filter('face');
          }}
        >
          face
        </Category>
        <Category
          key={3}
          onClick={() => {
            filter('body');
          }}
        >
          body
        </Category>
        <Category
          key={4}
          onClick={() => {
            filter('hair');
          }}
        >
          hair
        </Category>
      </Categories>
    </>
  );
}
