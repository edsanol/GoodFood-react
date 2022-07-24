import React from 'react'

export const OrderFood = ({ detail }) => {
  const currency = function (number) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(number)
  }

  return (
    <div className="orders__product">
      <div className="orders__product-image">
        <img src={detail.image} alt="food" />
      </div>
      <div className="orders__product-info">
        <p className="orders__product-info-name">{detail.name}</p>
        <p className="orders__product-info-description">
          product description and comments
        </p>
        <div className="orders__product-info-food">
          <p className="orders__product-info-price">{currency(detail.price)}</p>
          <p className="orders__product-info-quantity">Qty: {detail.cant}</p>
        </div>
      </div>
    </div>
  )
}
