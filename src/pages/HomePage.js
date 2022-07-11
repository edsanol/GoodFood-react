import React from 'react';
import { Aside } from '../components/Aside';
import '../assets/styles/pages/HomePage.css';
import { Home } from '../components/Home';
import { Products } from '../components/Products';

export const HomePage = () => {
  const inputStyle = {
    fontFamily: "'Roboto', FontAwesome",
  };
  return (
    <main className="main__full-container">
      <Aside />
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
              <div className="div__header-right-logo">LO</div>
              <p className="div__header-right-restaurant">Londeros</p>
            </div>
            <i className="fa-solid fa-bell"></i>
          </div>
        </div>
        {/* <Home /> */}
        <Products />
      </div>
    </main>
  );
};
