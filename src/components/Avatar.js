import React from 'react';
import './components.scss';

const Avatar = (props) => (
  <img
    src={props.img}
    className={'Avatar Avatar--' + props.modifier}
    alt="avatar"
  />
);

export default Avatar;
