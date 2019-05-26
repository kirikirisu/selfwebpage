import React from 'react';
import '../../styles/status.css';
import MediaQuery from 'react-responsive';

const StatusTable = () => (
  <table>
    <tr>
      <th>CPU</th>
      <td>インテル core i7-4790</td>
    </tr>
    <tr>
      <th>メモリ</th>
      <td>16GB</td>
    </tr>
    <tr>
      <th>SSD</th>
      <td>120GB</td>
    </tr>
    <tr>
      <th>HDD</th>
      <td>２T</td>
    </tr>
    <tr>
      <th>グラフィックカード</th>
      <td>NVIDIA GeForce GTX1060</td>
    </tr>
    <tr>
      <th>電源</th>
      <td>ATX/EPS電源 24pin 700w 80PLUS Gold</td>
    </tr>
    <tr>
      <th>ディスプレイ</th>
      <td>BenQ モニターディスプレイ GL2460HM 24インチ </td>
    </tr>
    <tr>
      <th>キーボード</th>
      <td>SteelSeries Apex M500</td>
    </tr>
    <tr>
      <th>マウス</th>
      <td>BenQ Zowie EC2-A</td>
    </tr>
    <tr>
      <th>ヘッドセット</th>
      <td>SteelSeries Arctis 5 Black</td>
    </tr>
    <tr>
      <th>椅子</th>
      <td>ニトリの安いやつ</td>
    </tr>
    <tr>
      <th>マウスパッド</th>
      <td>SteelSeries QcK+ Limited</td>
    </tr>
    <tr>
      <th>dpi</th>
      <td>400</td>
    </tr>
  </table>
);

const SecondSlid = () => (
  <div>
    <MediaQuery query="(min-device-width: 768px)">
      <div className="slid">
        <h3 style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>ゲーム環境</h3>
        <StatusTable />
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 760px)">
      <StatusTable />
    </MediaQuery>
  </div>
);

export default SecondSlid;
