import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return <header>{title}</header>;
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {};

export default Header;
