import React from 'react';
import './components.scss';

const Toggle = (props) => (
  <span className={'Toggle Toggle--' + props.modifier}>
    <input
      type="checkbox"
      id={props.id}
      name={props.name}
      value={props.value}
      defaultChecked={props.defaultChecked}
      disabled={props.disabled}
      style={{ display: 'none' }}
    />
  </span>
);

export default Toggle;
