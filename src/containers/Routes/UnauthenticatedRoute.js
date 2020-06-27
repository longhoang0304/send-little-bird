import { connect } from 'react-redux';
import UnauthenticateRoute from '../../components/Routes/UnauthenticateRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';

const mapStateToProps = (state) => ({
  authenticated: AuthSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(UnauthenticateRoute);
