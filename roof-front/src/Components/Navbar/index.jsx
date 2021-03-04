import React from 'react';
import Logo from '../../Assets/icons/Vector.png';
import style from './index.module.css';

const Navbar = () => (
  <nav className={style.nav}>
    <div className={style.maxWidth}>
      <img className={style.logo} src={Logo} alt="logo" />
      <span className={style.menuBtn} />

      <ul className={style.menu}>
        <li>Quero aprender</li>
        <li>Consultoria</li>
        <li>Dúvidas</li>
        <li>Sobre</li>
        <li className={style.loginContent}>
          <i className="fas fa-shopping-cart" />
          <p>Login</p>
        </li>
        <li>
          <button className={style.deliveryBtn} type="button">
            Delivery
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
