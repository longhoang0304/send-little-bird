import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({
  authenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authenticated) {
        const toObj = {
          pathname: '/login',
          state: { from: props.location },
        };
        return <Redirect to={toObj} />;
      }

      return <Component {...props} authenticated />;
    }}
  />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.element,
  authenticated: PropTypes.bool,
  location: PropTypes.any,
};

AuthenticatedRoute.defaultProps = {
  component: () => null,
};

export default AuthenticatedRoute;
