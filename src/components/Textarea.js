import React from 'react';
import './components.scss';

const Textarea = (props) => (
  <textarea
    class={'Textarea Textarea--' + props.modifier}
    disabled={props.isDisabled}
    value={props.value}
  />
);

export default Textarea;
