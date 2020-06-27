import { connect } from 'react-redux';
import AuthenticatedRoute from '../../components/Routes/AuthenticatedRoute';
import { selectors as AuthSelectors } from '../../reducers/auth';

const mapStateToProps = (state) => ({
  authenticated: AuthSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(AuthenticatedRoute);
