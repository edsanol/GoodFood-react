import React, { useState } from 'react'
import '../assets/styles/components/Products.css'
import { ProductItem } from './ProductItem'
import { Modal } from '@mantine/core'
import { ModalProducts } from './modals/ModalProducts'

export const Products = () => {
  const [opened, setOpened] = useState(false)

  return (
    <div className="product__container-page">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        size="lg">
        <ModalProducts />
      </Modal>
      <div className="product__container-header">
        <div className="product__title">
          <h3>RESTAURANT is open</h3>
          <p>22 Mei 2021, 12.21 PM</p>
        </div>
        <div className="product__products-title">
          <h3>ALL PRODUCTS</h3>
          <div
            type="button"
            onClick={() => setOpened(true)}
            className="product__add-product">
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
  )
}
