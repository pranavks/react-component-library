import React from 'react';
import './components.scss';

const Colors = (props) => {
  let opacityText;
  if (props.class === 'opacity') {
    opacityText = (
      <span className="Colors__opacity">&nbsp;Opacity: {props.opacity}</span>
    );
  }
  let className = `Colors Colors--${props.modifier}`;

  return (
    <div className={className}>
      <div className="Colors__color" style={{ opacity: props.opacity }}></div>
      <div className="Colors__details">
        <div className="Colors__colorName">{props.name}</div>
        <span className="Colors__colorCode">{props.code}</span>
        {opacityText}
      </div>
    </div>
  );
};
export default Colors;
