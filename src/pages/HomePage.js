import React, { useEffect, useState } from 'react'
import { Aside } from '../components/Aside'
import '../assets/styles/pages/HomePage.css'
import { Home } from '../components/Home'
import { Products } from '../components/Products'
import { useSelector } from 'react-redux'
import { OrderHistory } from '../components/OrderHistory'
import io from 'socket.io-client'
const BASE_URL = process.env.REACT_APP_URL_BACKEND

export const HomePage = () => {
  const [socket, setSocket] = useState(null)
  const [notification, setNotification] = useState(false)
  const inputStyle = {
    fontFamily: "'Roboto', FontAwesome",
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const newSocket = io.connect(`${BASE_URL}/`, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token,
      },
    })
    setSocket(newSocket)
  }, [])

  useEffect(() => {
    socket?.on('sendNotification', () => {
      setNotification(true)
      localStorage.setItem('bell', 'true')
    })
  }, [socket])

  useEffect(() => {
    const bell = localStorage.getItem('bell')
    if (bell === 'true') {
      setNotification(true)
    }
  }, [])

  const handleNotification = () => {
    setNotification(false)
    localStorage.setItem('bell', 'false')
    window.location.reload(true);
  }

  const { homeView } = useSelector((state) => state.homeReducer)
  const { restaurant } = useSelector((state) => state.restaurantReducer)
  return (
    <main className="main__full-container">
      <Aside homeView={homeView} />
      <div className="div__container">
        <div className="div__container-header">
          <div className="div__header-left">
            <input
              type="text"
              placeholder=" &#xf002;   Search"
              className="input-search"
              style={inputStyle}
            />
          </div>
          <div className="div__header-right">
            <div className="div__header-right-container">
              <div className="div__header-right-logo">
                <img
                  src={`https://ui-avatars.com/api/?background=random&name=${restaurant.name}`}
                  alt="Logo workspace"
                  className="div__header-right-logo-img"
                />
              </div>
              <p className="div__header-right-restaurant">{restaurant.name}</p>
            </div>
            <div
              className="div__header-right-notification"
              type="button"
              onClick={handleNotification}>
              <i className="fa-solid fa-bell"></i>
              <span
                className={
                  notification ? 'div__header-right-badge' : ''
                }></span>
            </div>
          </div>
        </div>
        {homeView === 'Home' ? (
          <Home />
        ) : homeView === 'Products' ? (
          <Products />
        ) : homeView === 'History' ? (
          <OrderHistory />
        ) : (
          <Home />
        )}
      </div>
    </main>
  )
}
