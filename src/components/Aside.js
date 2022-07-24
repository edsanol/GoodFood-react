import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Aside.css'
import { actionsChangeHome } from '../store/actions/ActionHome'
import { logoutUserAction } from '../store/actions/ActionRestaurants'

export const Aside = ({ homeView }) => {
  const dispatch = useDispatch()

  return (
    <aside className="aside__main">
      <div className="aside__logo">
        <img
          src="https://i.postimg.cc/mDMfx5tz/good-foog-logo.png"
          alt="good-food-logo"
        />
      </div>
      <div className="aside__menu">
        <ul className="aside__menu-ul">
          <li
            type="button"
            className={homeView === 'Home' ? 'option__selected' : ''}
            onClick={() => dispatch(actionsChangeHome('Home'))}>
            <i className="fa-solid fa-house"></i>
            <p className="text__aseide-p"> HOME</p>
          </li>
          <li
            className={homeView === 'History' ? 'option__selected' : ''}
            type="button"
            onClick={() => dispatch(actionsChangeHome('History'))}>
            <i className="fa-solid fa-message"></i> ORDER HISTORY
          </li>
          <li
            type="button"
            className={homeView === 'Products' ? 'option__selected' : ''}
            onClick={() => dispatch(actionsChangeHome('Products'))}>
            <i className="fa-solid fa-utensils"></i> PRODUCTS
          </li>
          <li
            type="button"
            className={homeView === 'Settings' ? 'option__selected' : ''}
            onClick={() => dispatch(logoutUserAction())}>
            <i className="fa-solid fa-gear"></i> LOGOUT
          </li>
        </ul>
      </div>
      <div className="aside__footer">
        <div className="aside__restaurant-connected"></div>
        <p className="aside__footer-connected">Restaurant Open</p>
      </div>
    </aside>
  )
}
