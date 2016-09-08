import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import Front from '../components/Front';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/front" component={Front}/>
    </Route>
  </Router>
)
export default router;
