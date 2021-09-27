import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApiContainer from '../apiContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ApiContainer} />
      </Switch>
    </BrowserRouter>
  );
}
