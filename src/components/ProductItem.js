import React from 'react'
import '../assets/styles/components/ProductItem.css'

export const ProductItem = ({ product }) => {

  const currency = function (number) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(number)
  }

  return (
    <div className="Products__container-product">
      <div className="Product__food-image">
        <img src={product.image} alt="card-food" />
      </div>
      <div className="Product__detail">
        <p className="Product__food-name">{product.name}</p>
        <p className="Product__food-detail">{product.description}</p>
        <p className="Product__food-price">{`${currency(product.price)}`}</p>
      </div>
    </div>
  )
}
