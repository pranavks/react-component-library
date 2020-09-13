import React from 'react';
import './components.scss';

const RadioButton = (props) => (
  <span className={'RadioButton RadioButton--' + props.modifier}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.name}
      defaultChecked={props.defaultChecked}
      style={{ display: 'none' }}
    />
  </span>
);

export default RadioButton;
