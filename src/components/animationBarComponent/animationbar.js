import React from 'react';
import { Spring } from 'react-spring/renderprops';
import '../../styles/animationbar.css';

const AnimationBar = ({ title, num }) => (
  <Spring
    from={{ number: 0 }}
    to={{ number: num }}
    config={{ duration: 2800 }}
  >
    {props => (
      <div>
        <div className="gametitle">{title}</div>
        <div className="bar" style={{ width: (props.number) * 2.5 }}>
          <div className="numbersize">{props.number.toFixed()}時間</div>
        </div>
      </div>
    )}
  </Spring>
);

export default AnimationBar;