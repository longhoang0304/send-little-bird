/* eslint-disable react/prefer-stateless-function */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class UnauthenticateRoute extends React.Component {
  render() {
    const {
      authenticated,
      component: Component,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!authenticated) {
            return <Component {...props} authenticated />;
          }

          return <Redirect to="/chat-list" />;
        }}
      />
    );
  }
}

UnauthenticateRoute.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.any,
};

UnauthenticateRoute.defaultProps = {
  component: () => null,
};
