import React from 'react';
import Logo from '../../Assets/icons/Vector.png';
import useMedia from '../../Hooks/useMedia';
import style from './index.module.css';

const Navbar = () => {
  const mobile = useMedia('(max-width: 825px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <nav className={style.nav}>
      <div className={style.maxWidth}>
        <img className={style.logo} src={Logo} alt="logo" />
        {mobile && (
          <button
            type="button"
            className={style.menuBtn}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <i className={`${style.closeMenuBtn} fas fa-times`} />
            ) : (
              'home'
            )}
          </button>
        )}

        <ul
          className={`${mobile ? style.navMobile : style.menu} ${
            mobileMenu && style.navMobileActive
          }`}
        >
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
};

export default Navbar;
