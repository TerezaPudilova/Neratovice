import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Adoption } from './components/Adoption';
import { Adopted } from './components/Adpoted';
import { About } from './components/About';
import { Sponzors } from './components/Sponzors';
import './styles.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/k-adopci">
            <Adoption/>
          </Route>
          <Route path="/nasli-domov">
            <Adopted/>
          </Route>
          <Route path="/o-nas">
            <About/>
          </Route>
          <Route path="/pomohli-nam">
            <Sponzors/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

render(<App />, document.querySelector('#app'));
