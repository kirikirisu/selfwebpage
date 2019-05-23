import React from 'react';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import Header from '../headerComponent/header';
import Greeting from '../greetingComponent/greeting';
import StatusHobby from '../statushobbyComponent/index';
import CardGroup from '../cardgroupComponent/cardgroup';
import MiddleArea from '../jumbotronComponent/jumbotron';
import Footer from '../footerComponent/footer';

const App = () => (
  <div>
    <Flip top>
      <Header />
    </Flip>
    <Rotate bottom left>
      <Greeting />
    </Rotate>
    <Rotate bottom right>
      <MiddleArea title="Introduction" paragraph="自分のステータスと趣味です。性別は武器から予想して下さい///" />
    </Rotate>
    <Rotate bottom left>
      <StatusHobby />
    </Rotate>
    <Slide bottom>
      <MiddleArea title="Products" paragraph="所属しているプロジェクトでチーム開発したものや個人開発したものです" />
      <CardGroup />
      <Footer />
    </Slide>
  </div>
);

export default App;
