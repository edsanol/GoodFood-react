import React from 'react'
import '../assets/styles/components/ProductItem.css'
import imageFood from '../assets/images/product_02.png'

export const ProductItem = () => {
  return (
    <div className="Products__container-product">
      <div className="Product__food-image">
        <img src={imageFood} alt="card-food" />
      </div>
      <div className="Product__detail">
        <p className="Product__food-name">
          Loin of Vension Black Pudding Pure & Jerk
        </p>
        <p className="Product__food-detail">
          lorem ipsum dolor sit amet, consectetur adipis occ lorem lorem ipsum
          dolor sit amet, consectetur adipis occ lorem lorem ipsum dolor sit
          amet, consectetur adipis occ lorem lorem ipsum dolor sit amet,
          consectetur adipis occ lorem
        </p>
        <p className="Product__food-price">$ 10.00</p>
      </div>
    </div>
  )
}
