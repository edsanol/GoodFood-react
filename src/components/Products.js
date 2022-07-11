import React from 'react';
import '../assets/styles/components/Products.css';
import { ProductItem } from './ProductItem';

export const Products = () => {
  return (
    <div className="product__container-page">
      <div className="product__container-header">
        <div className="product__title">
          <h3>RESTAURANT is open</h3>
          <p>22 Mei 2021, 12.21 PM</p>
        </div>
        <div className="product__products-title">
          <h3>ALL PRODUCTS</h3>
          <div className="product__add-product">
            Add
          </div>
        </div>
      </div>
      <div className="product__container-orders">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};
