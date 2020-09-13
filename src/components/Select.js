import React from 'react';
import './components.scss';

const Select = (props) => (
  <select
    className={'Select Select--' + props.modifier}
    disabled={props.isDisabled}
  >
    <option>{props.value}</option>
    <option>{props.value}</option>
    <option>{props.value}</option>
    <option>{props.value}</option>
  </select>
);

export default Select;
