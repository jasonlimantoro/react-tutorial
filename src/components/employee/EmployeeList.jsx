import React from 'react';
import PropTypes from 'prop-types';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees = [] }) => {
  return (
    <div>
      {employees.map(employee => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

EmployeeList.propTypes = {
  /**
   * Array of employees object
   */
  employees: PropTypes.array
};

EmployeeList.defaultProps = {
  employees: [
    {
      name: 'John',
      email: 'John@example.com'
    }
  ]
};

export default EmployeeList;
