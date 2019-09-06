import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

export const SCALE_TEXT = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};
const cToF = c => {
  return (c * 9) / 5 + 32;
};

const fToC = f => {
  return ((f - 32) * 5) / 9;
};

const cToK = c => {
  return c + 273.15;
};

const KtoC = k => {
  return k - 273.15;
};

const fToK = f => {
  return cToK(fToC(f));
};

const KtoF = k => {
  return cToF(KtoC(k));
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
    currentScale === 'c'
      ? temperature
      : currentScale === 'f'
      ? convert(temperature, fToC)
      : convert(temperature, KtoC);
  const fahrenheit =
    currentScale === 'f'
      ? temperature
      : temperature === 'c'
      ? convert(temperature, cToF)
      : convert(temperature, KtoF);
  const kelvin =
    currentScale === 'k'
      ? temperature
      : currentScale === 'c'
      ? convert(temperature, cToK)
      : convert(temperature, fToK);

  const handleChangeCelsius = value => {
    setTemperature(value);
    setCurrentScale('c');
  };
  const handleChangeFahrenheit = value => {
    setTemperature(value);
    setCurrentScale('f');
  };
  const handleChangeKelvin = value => {
    setTemperature(value);
    setCurrentScale('k');
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <h5>
        Current Scale: <code>{SCALE_TEXT[currentScale]}</code>
      </h5>
      <TemperatureInput
        value={celsius}
        onChange={handleChangeCelsius}
        scale="c"
        from={currentScale}
      />
      <TemperatureInput
        value={fahrenheit}
        onChange={handleChangeFahrenheit}
        scale="f"
        from={currentScale}
      />
      <TemperatureInput
        value={kelvin}
        onChange={handleChangeKelvin}
        scale="k"
        from={currentScale}
      />
      Result: <code>{celsius || '_'}</code> degrees Celsius ={' '}
      <code>{fahrenheit || '_'}</code> degrees Fahrenheit ={' '}
      <code>{kelvin || '_'}</code> degrees Kelvin
    </div>
  );
};

TemperatureConverter.propTypes = {};

TemperatureConverter.defaultProps = {};

export default TemperatureConverter;
