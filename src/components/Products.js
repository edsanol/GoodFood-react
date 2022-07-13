import React, { useEffect, useState } from 'react'
import '../assets/styles/components/Products.css'
import { ProductItem } from './ProductItem'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from '@mantine/core'
import { ModalProducts } from './modals/ModalProducts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getProductsByRestaurantAction } from '../store/actions/ActionProducts'

export const Products = () => {
  const [opened, setOpened] = useState(false)
  const dispatch = useDispatch()

  const restaurantProducts = useSelector((state) => state.productReducer.products)

  useEffect(() => {
    dispatch(getProductsByRestaurantAction())
  }, [dispatch])


  return (
    <div className="product__container-page">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        size="lg">
        <ModalProducts setOpened={setOpened} />
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
        {
          restaurantProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
}
