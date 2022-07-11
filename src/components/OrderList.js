import React from 'react';
import '../assets/styles/components/OrderList.css';

export const OrderList = ({ numberOrder }) => {
  return (
    <div className="order__list-item">
      <i className="fa-solid fa-check"></i>
      <p>{numberOrder}</p>
    </div>
  );
};
