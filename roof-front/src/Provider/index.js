import React from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const values = {
    cart,
    setCart,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
