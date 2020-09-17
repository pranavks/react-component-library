import React from 'react';

const Avatar = (props) => (
  <img
    src={props.img}
    className={`Avatar Avatar--${props.modifier} ${props.className}`}
    id={props.id}
    alt="avatar"
  />
);

export default Avatar;
