import React from 'react';
import './components.scss';

const Typography = (props) => {
  if (props.type === 'heading') {
    const Heading = 'h' + props.hrank;
    return <Heading>{props.text}</Heading>;
  } else if (props.type === 'paragraph') {
    return <p>{props.text}</p>;
  } else if (props.type === 'paragraph-bold') {
    return <p style={{ fontWeight: 'bold' }}>{props.text}</p>;
  } else if (props.type === 'link') {
    return (
      <a href={props.link} style={{ color: 'inherit' }}>
        {props.text}
      </a>
    );
  }
};

export default Typography;
