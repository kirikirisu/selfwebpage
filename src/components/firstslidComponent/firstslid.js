import React from 'react';
import Bar from '../animationBarComponent/animationbar';
import '../../styles/firstslid.css';

const FirstSlid = () => (
  <div>
    <h2>プレイ時間</h2>
    <Bar title="RainbowSixSiege" num="400" />
    <Bar title="PUBG" num="365" />
    <Bar title="MHW" num="66" />
    <Bar title="BF5" num="20" />
    <Bar title="Apex" num="11" />
  </div>
);

export default FirstSlid;
