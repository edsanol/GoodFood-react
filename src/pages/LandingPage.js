import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/LandingPage.css'

export const LandingPage = () => {
  return (
    <div className="landingPage__container">
      <header className="landingPage__header">
        <div className="landingPage__header-rigth">
          <img
            src="https://i.postimg.cc/m261LHM8/good-foog-logo-menus.png"
            alt="Good Food"
          />
        </div>
        <div className="landingPage__header-center">
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <a
            href="https://edinael-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Contact
          </a>
        </div>
        <div className="landingPage__header-left">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/edinael-sanguino/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/edsanol"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </header>
      <main className="landingPage__main-container">
        <div className="landingPage__main-left">
          <p className="landingPage__text-title">It's good time for a great taste</p>
          <p className="landingPage__text">where everyone wants to order</p>
          <Link className="landingPage__button" to="/register">
            Register
          </Link>
        </div>
        <div className="landingPage__main-right"></div>
      </main>
    </div>
  )
}
