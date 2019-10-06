import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/homePageComponent/home';
import Work from './components/workComponent/work';
import Game from './components/gamePageComponent/game';
import Join from './components/joinpageComponent/join';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/Work' component={Work} />
      <Route exact path='/Game' component={Game} />
      <Route exact path='/Belong' component={Join} />
    </div>
  </BrowserRouter>
);

export default App;
