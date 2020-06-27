import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import AuthenticatedRoute from '../containers/Routes/AuthenticatedRoute';
import UnauthenticatedRoute from '../containers/Routes/UnauthenticatedRoute';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import ChatListPage from './ChatListPage';


// eslint-disable-next-line react/prefer-stateless-function
class Router extends Component {
  render() {
    return (
      <Switch>
        <UnauthenticatedRoute exact path="/" component={WelcomePage} />
        <UnauthenticatedRoute exact path="/login" component={LoginPage} />
        <AuthenticatedRoute exact path="/chat-list" component={ChatListPage} />
        <Redirect
          to="/login"
        />
      </Switch>
    );
  }
}

export default Router;
