import React from 'react';
import PropTypes from 'prop-types';

const EmployeeListItem = ({ employee }) => {
  const { name, email } = employee;
  return (
    <div>
      <h1>Employee details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

EmployeeListItem.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })
};

EmployeeListItem.defaultProps = {};

export default EmployeeListItem;
