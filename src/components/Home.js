import React, { useEffect } from 'react'
import '../assets/styles/components/Home.css'
import { OrderList } from './OrderList'
import { Orders } from './Orders'
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrdersAction } from '../store/actions/ActionHome'

export const Home = () => {
  const dispatch = useDispatch()

  const { orders } = useSelector((state) => state.homeReducer)
  const { restaurant } = useSelector((state) => state.restaurantReducer)

  useEffect(() => {
    dispatch(getAllOrdersAction())
  }, [dispatch])

  return (
    <div className="home__container-page">
      <div className="home__container-header">
        <div className="home__title">
          <h3>ORDER LIST</h3>
        </div>
        <div className="home__orders">
          {orders
            .filter((order) => order.restaurantId === restaurant.id)
            .filter((order) => order.success === false)
            .map((order) => (
              <OrderList key={order.id} numberOrder={order.id} />
            ))}
        </div>
      </div>
      <div className="home__container-orders">
        {orders
          .filter((order) => order.restaurantId === restaurant.id)
          .filter((order) => order.success === false)
          .map((order) => (
            <Orders key={order.id} order={order} />
          ))}
      </div>
    </div>
  )
}
