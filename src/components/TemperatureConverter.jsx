import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

export const SCALE_TEXT = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
const cToF = c => {
  return (c * 9) / 5 + 32;
};

const fToC = f => {
  return ((f - 32) * 5) / 9;
};

const convert = (input, converter) => {
  const temperature = parseFloat(input);
  if (Number.isNaN(temperature)) {
    return '';
  }
  return converter(temperature).toFixed(2);
};

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [currentScale, setCurrentScale] = useState('c');
  const celsius =
    currentScale === 'c' ? temperature : convert(temperature, fToC);
  const fahrenheit =
    currentScale === 'f' ? temperature : convert(temperature, cToF);

  const handleChangeCelsius = value => {
    setTemperature(value);
    setCurrentScale('c');
  };
  const handleChangeFahrenheit = value => {
    setTemperature(value);
    setCurrentScale('f');
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <h5>Current Scale: {SCALE_TEXT[currentScale]}</h5>
      <TemperatureInput
        value={celsius}
        onChange={handleChangeCelsius}
        scale="c"
        to="f"
      />
      <TemperatureInput
        value={fahrenheit}
        onChange={handleChangeFahrenheit}
        scale="f"
        to="c"
      />
      Result: <code>{celsius || '_'}</code> degrees celsius ={' '}
      <code>{fahrenheit || '_'}</code> degrees fahrenheit
    </div>
  );
};

TemperatureConverter.propTypes = {};

TemperatureConverter.defaultProps = {};

export default TemperatureConverter;
