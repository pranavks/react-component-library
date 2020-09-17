import React from 'react';

const Input = (props) => (
  <input
    type={props.type}
    className={`Input Input--${props.modifier} ${props.className}`}
    id={props.id}
    placeholder={props.placeholder}
    disabled={props.isDisabled}
  />
);

export default Input;
