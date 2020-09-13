import React from 'react';
import './components.scss';
import navArrow from '../images/navArrow.svg';

const ListItem = (props) => {
  return (
    <div className={'ListItem ListItem--' + props.modifier}>
      <div className="flex-item">
        <div className="icon">
          <img src={props.icon} alt="" />
        </div>
        <div className="text">
          <div className="item">{props.title}</div>
          <div className="subtitle">{props.subtitle}</div>
        </div>
      </div>
      <div className="flex-item">
        <span>Value</span>
        <img src={navArrow} alt="" />
      </div>
    </div>
  );
};

export default ListItem;
