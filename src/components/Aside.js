import React from 'react';
import '../assets/styles/components/Aside.css';

export const Aside = () => {
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
          <li className="option__selected"><i className="fa-solid fa-house"></i><p className="text__aseide-p"> HOME</p></li>
          <li><i className="fa-solid fa-message"></i> MESSAGES</li>
          <li><i className="fa-solid fa-utensils"></i> PRODUCTS</li>
          <li><i className="fa-solid fa-gear"></i> SETTINGS</li>
        </ul>
      </div>
      <div className="aside__footer">
        <div className="aside__restaurant-connected"></div>
        <p className="aside__footer-connected">Restaurant Open</p>
      </div>
    </aside>
  );
};
