import React from 'react';

const Select = (props) => {
  let values = props.value.map((value) => <option>{value}</option>);
  return (
    <select
      className={`Select Select--${props.modifier} ${props.className}`}
      id={props.id}
      disabled={props.isDisabled}
    >
      {values}
    </select>
  );
};

export default Select;
