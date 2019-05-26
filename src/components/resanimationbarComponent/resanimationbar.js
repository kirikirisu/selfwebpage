import React from 'react';
import { Spring } from 'react-spring/renderprops';
import '../../styles/resanimationbar.css';

const AnimationBar = ({ img, num }) => (
  <Spring
    from={{ number: 0 }}
    to={{ number: num }}
    config={{ duration: 2800 }}
  >
    {props => (
      <div>
        <div className="resbar" style={{ height: (props.number) * 1.3 }}>
          {props.number.toFixed()}Hour
        </div>
        <img className="barimg" alt="gameimg" src={img} />
      </div>
    )}
  </Spring>
);

export default AnimationBar;