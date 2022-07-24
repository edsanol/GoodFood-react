import React from 'react'
import '../assets/styles/components/OrderHistory.css'
import { OrderHistoryCells } from './OrderHistoryCells'
import { useSelector } from 'react-redux'

export const OrderHistory = () => {
  const { orders } = useSelector((state) => state.homeReducer)
  const { restaurant } = useSelector((state) => state.restaurantReducer)

  return (
    <div className="order-history__container-page">
      <div className="order-history__container-header">
        <div className="order-history__title">
          <h3>ORDER HISTORY</h3>
          <p>22 Mie 2021, 12.21 PM</p>
        </div>
        <div className="order-history-title">
          <h3>ALL PRODUCTS</h3>
        </div>
      </div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.restaurantId === restaurant.id)
            .map((order) => (
              <OrderHistoryCells
                key={order.id}
                order={order}
                restaurant={restaurant.name}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}
