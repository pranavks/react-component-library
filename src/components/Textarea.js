import React from 'react';

const Textarea = (props) => (
  <textarea
    class={`Textarea Textarea--${props.modifier} ${props.className}`}
    id={props.id}
    disabled={props.isDisabled}
    placeholder={props.placeholder}
  />
);

export default Textarea;
