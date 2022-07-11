import React from 'react';
import '../assets/styles/components/Orders.css';
import { OrderFood } from './OrderFood';

export const Orders = ({ numberOrder }) => {
  return (
    <div className="Orders__container-product">
      <div className="Orders__herader-product">
        <p className="Orders__herader-product-left-p">{numberOrder}</p>
        <p className="Orders__herader-product-date">Hola mundo</p>
      </div>
      <main className="orders__main-product">
        <OrderFood />
        <OrderFood />
        <OrderFood />
      </main>
      <div className="orders__purchase-data">
        <div className="orders__purchase-bottom">
          <p className="orders__purchase-data-left-p">x4 items</p>
          <p className="orders__purchase-data-right-p">$40.00</p>
        </div>
        <div className="orders__purchase-check">
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  );
};
