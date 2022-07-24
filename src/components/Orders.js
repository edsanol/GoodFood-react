import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Orders.css'
import { timeDateGeneral } from '../helpers/timeDate'
import { updateSuccessOrderAction } from '../store/actions/ActionHome'
import { OrderFood } from './OrderFood'
import { Modal } from '@mantine/core'
import { ModalOrderDetail } from './modals/ModalOrderDetail'

export const Orders = ({ order }) => {
  const [opened, setOpened] = useState(false)
  const orderId = order.id.slice(order.id.length - 4).toUpperCase()
  const dispatch = useDispatch()

  const currency = function (number) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(number)
  }

  const handleSuccessOrder = () => {
    dispatch(updateSuccessOrderAction(order.id))
  }

  return (
    <div className="Orders__container-product">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        size="xs"
        centered>
        <ModalOrderDetail setOpened={setOpened} order={order} />
      </Modal>
      <div
        className="Orders__herader-product"
        type="button"
        onClick={() => setOpened(true)}>
        <p className="Orders__herader-product-left-p">{orderId}</p>
        <p className="Orders__herader-product-date">
          {timeDateGeneral(order.createdAt)}
        </p>
      </div>
      <main className="orders__main-product">
        {order.detail.map((detail) => (
          <OrderFood key={detail.foodId} detail={detail} />
        ))}
      </main>
      <div className="orders__purchase-data">
        <div className="orders__purchase-bottom">
          <p className="orders__purchase-data-left-p">
            x{order.detail.length} items
          </p>
          <p className="orders__purchase-data-right-p">
            {currency(
              order.detail.reduce((acc, cur) => acc + cur.price * cur.cant, 0)
            )}
          </p>
        </div>
        <div
          className="orders__purchase-check"
          type="button"
          onClick={handleSuccessOrder}>
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  )
}
