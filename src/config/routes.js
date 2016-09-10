import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import Front from '../components/Front';
import Login from '../components/Login';
import Register from '../components/Register';
import Search from '../components/Search';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Login} />
      <Route path="/register" component={Register}/>
      <Route path="/front" component={Front}/>
      <Route path="/search" component={Search}/>
    </Route>
  </Router>
)
export default router;
