import React from 'react';
import imageFood from '../assets/images/product_01.png'

export const OrderFood = () => {
  return (
    <div className="orders__product">
      <img src={imageFood} alt="food" />
      <div className="orders__product-info">
        <p className="orders__product-info-name">Product Name</p>
        <p className="orders__product-info-description">
          product description and comments
        </p>
        <div className="orders__product-info-food">
          <p className="orders__product-info-price">$10.00</p>
          <p className="orders__product-info-quantity">Qty: 1</p>
        </div>
      </div>
    </div>
  );
};
