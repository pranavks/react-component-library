import React from 'react';
import './components.scss';

const Input = (props) => (
  <input
    type={props.type}
    className={'Input Input--' + props.modifier}
    value={props.value}
    disabled={props.isDisabled}
  />
);

export default Input;
