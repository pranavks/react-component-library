import React from 'react';

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
      className={`Button Button--${props.modifier} ${props.className}`}
      id={props.id}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};
export default Button;
