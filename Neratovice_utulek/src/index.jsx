import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/k-adopci"></Route>
          <Route path="/nasli-domov"></Route>
          <Route path="/o-nas"></Route>
          <Route path="/pomohli-nam"></Route>
          <Route path="/" component={Homepage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

render(<App />, document.querySelector('#app'));
