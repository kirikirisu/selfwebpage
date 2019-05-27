import React from 'react';
import MediaQuery from 'react-responsive';
import YoutubeComp from '../youtubeComponent/youtube';

const Thirdslid = () => (
  <div>
    <MediaQuery query="(min-device-width: 1025px)">
      <h2>Youtubeチャンネル</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div style={{ marginRight: 10 }}>
          <YoutubeComp id='DU-R2uyU8NY' st='8780' h='340' w='590' ap='1' en='8797' />
        </div>
        <YoutubeComp id='OO3OfkMBd8U' st='45' h='340' w='590' ap='1' en='62' />
      </div>
    </MediaQuery>
    <MediaQuery query="(min-width:591px) and ( max-width:1024px)">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <h2>Youtubeチャンネル</h2>
        <YoutubeComp id='DU-R2uyU8NY' st='8780' h='340' w='590' ap='1' en='8797' />
        <YoutubeComp id='OO3OfkMBd8U' st='45' h='340' w='590' ap='1' en='62' />
      </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 590px)">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <h2>Youtubeチャンネル</h2>
        <YoutubeComp id='DU-R2uyU8NY' st='8780' h='200' w='330' ap='0' en='8797' />
        <YoutubeComp id='OO3OfkMBd8U' st='45' h='200' w='330' ap='0' en='62' />
      </div>
    </MediaQuery>
  </div>
);

export default Thirdslid;
