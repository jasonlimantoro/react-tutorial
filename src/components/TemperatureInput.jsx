import React from 'react';
import Form from 'react-bootstrap/Form';
import { SCALE_TEXT } from './TemperatureConverter';
import PropTypes from 'prop-types';

const TemperatureInput = ({ scale, to, value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <div>
      <Form.Group>
        <Form.Label>
          {SCALE_TEXT[scale]} to {SCALE_TEXT[to]}
        </Form.Label>
        <Form.Control
          type="number"
          value={value}
          onChange={handleChange}
          placeholder={`Enter ${SCALE_TEXT[scale]}`}
        />
      </Form.Group>
    </div>
  );
};

TemperatureInput.propTypes = {
  scale: PropTypes.string,
  to: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

TemperatureInput.defaultProps = {
  scale: 'c'
};

export default TemperatureInput;
