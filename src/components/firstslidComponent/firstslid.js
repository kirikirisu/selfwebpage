import React from 'react';
import Bar from '../animationBarComponent/animationbar';
import ResBar from '../resanimationbarComponent/resanimationbar';
import MediaQuery from 'react-responsive';
import '../../styles/firstslid.css';
import siegeImg from '../../img/thumb_13546_avatar_xl.svg';
import pubgImg from '../../img/s-l1600.svg';
import monsterhunterImg from '../../img/xz9_9FB-_400x400.svg';
import bfvImg from '../../img/bf5.svg';
import apexImg from '../../img/titanfall-icon-51.svg';

const FirstSlid = () => (
  <div>
    <MediaQuery query="(min-device-width: 1224px)">
      <h2>プレイ時間</h2>
      <Bar title="RainbowSixSiege" num="400" />
      <Bar title="PUBG" num="365" />
      <Bar title="MHW" num="66" />
      <Bar title="BF5" num="20" />
      <Bar title="Apex" num="11" />
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div style={{
        display: 'flex', alignItems: 'flex-end',
      }}>
        <ResBar num="400" img={siegeImg} />
        <ResBar num="365" img={pubgImg} />
        <ResBar num="66" img={monsterhunterImg} />
        <ResBar num="20" img={bfvImg} />
        <ResBar num="11" img={apexImg} />
      </div>
    </MediaQuery>
  </div>
);

export default FirstSlid;
