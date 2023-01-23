import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Today from './pages/today';
import Month from './pages/month';
import Year from './pages/year';

const App = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/'>
            <Today />
          </Route>
          <Route path='/month'>
            <Month />
          </Route>
          <Route path='/year'>
            <Year />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
