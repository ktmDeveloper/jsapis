import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Apis from './pages/apis';
import IntersectionObserver from './pages/intersectionObserver';
import localForage from './pages/localForage';
import cache from './pages/cache';
import mem from './pages/deviceMemory';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/apis' component={Apis}/>
          <Route path='/intersectionObserver' component={IntersectionObserver}/>
          <Route path='/localForage' component={localForage}/>
          <Route path='/cache' component={cache}/>
          <Route path='/mem' component={mem}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;