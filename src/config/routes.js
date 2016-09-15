import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import Front from '../components/Front';
import Login from '../components/Login';
import Register from '../components/Register';
import Article from '../components/Article';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Login} />
      <Route path="/register" component={Register}/>
      <Route path="/front" component={Front}/>
      <Route path="/article/(:article_id)" component={Article}/>
    </Route>
  </Router>
)
export default router;
