import React from 'react';
import './components.scss';

const Button = (props) => {
  let content;
  if (props.type === 'text') {
    content = props.content;
  } else if (props.type === 'image') {
    content = <img src={props.content} alt={props.alt} />;
  }

  const isDisabled = props.isDisabled ? true : false;

  return (
    <button
      className={'Button Button--' + props.modifier}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};
export default Button;
