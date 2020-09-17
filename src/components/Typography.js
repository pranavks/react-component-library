import React from 'react';

const Typography = (props) => {
  if (props.type === 'heading') {
    const Heading = 'h' + props.hrank;
    return (
      <Heading className={`heading ${props.className}`}>{props.text}</Heading>
    );
  } else if (props.type === 'paragraph') {
    return <p>{props.text}</p>;
  } else if (props.type === 'paragraph-bold') {
    return (
      <p className={props.className} style={{ fontWeight: 'bold' }}>
        {props.text}
      </p>
    );
  } else if (props.type === 'link') {
    return (
      <a
        href={props.link}
        style={{ color: 'inherit' }}
        className={props.className}
        id={props.id}
      >
        {props.text}
      </a>
    );
  }
};

export default Typography;
