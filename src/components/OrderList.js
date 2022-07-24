import React from 'react'
import '../assets/styles/components/OrderList.css'

export const OrderList = ({ numberOrder }) => {
  const orderId = numberOrder.slice(numberOrder.length - 4).toUpperCase()
  return (
    <div className="order__list-item">
      <i className="fa-solid fa-check"></i>
      <p>#{orderId}</p>
    </div>
  )
}
