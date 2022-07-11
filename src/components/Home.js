import React from 'react';
import '../assets/styles/components/Home.css';
import { OrderList } from './OrderList';
import { Orders } from './Orders';

export const Home = () => {
  return (
    <div className="home__container-page">
      <div className="home__container-header">
        <div className="home__title">
          <h3>ORDER LIST</h3>
        </div>
        <div className="home__orders">
          <OrderList numberOrder={"#215"}/>
          <OrderList numberOrder={"#216"}/>
          <OrderList numberOrder={"#217"}/>
          <OrderList numberOrder={"#218"}/>
          <OrderList numberOrder={"#219"}/>
          <OrderList numberOrder={"#220"}/>
        </div>
      </div>
      <div className="home__container-orders">
        <Orders numberOrder={"Order #215"}/>
        <Orders numberOrder={"Order #216"}/>
        <Orders numberOrder={"Order #217"}/>
        <Orders numberOrder={"Order #218"}/>
        <Orders numberOrder={"Order #219"}/>
        <Orders numberOrder={"Order #220"}/>
      </div>
    </div>
  );
};
