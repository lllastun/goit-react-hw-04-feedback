import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;
  return (
    <button name={name} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
