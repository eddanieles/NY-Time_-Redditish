import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import Front from '../components/Front';
import Login from '../components/Login';
import Register from '../components/Register';
import Article from '../components/Article';
import Favs from '../components/Favs';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Login} />
      <Route path="/register" component={Register}/>
      <Route path="/front" component={Front}/>
      <Route path="/article/(:article_id)" component={Article}/>
      <Route path="/likeArticles" component={Favs}/>
    </Route>
  </Router>
)
export default router;
