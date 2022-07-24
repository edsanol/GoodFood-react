import React from 'react'
import { timeDateGeneral } from '../helpers/timeDate'

export const OrderHistoryCells = ({ order, restaurant }) => {
  const orderId = order.id.slice(order.id.length - 4).toUpperCase()
  const currency = function (number) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(number)
  }
  return (
    <tr>
      <td>{order.dinerId}</td>
      <td>{orderId}</td>
      <td>
        {currency(
          order.detail.reduce((acc, cur) => acc + cur.price * cur.cant, 0)
        )}
      </td>
      <td>{timeDateGeneral(order.createdAt)}</td>
      <td>{order.success ? 'Completed' : 'Pending'}</td>
    </tr>
  )
}
