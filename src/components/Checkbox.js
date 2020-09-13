import React from 'react';
import './components.scss';

const Checkbox = (props) => (
  <span className={'Checkbox Checkbox--' + props.modifier}>
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

export default Checkbox;
