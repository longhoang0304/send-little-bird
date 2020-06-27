import { connect } from 'react-redux';
import { actions as AuthActions } from "../../reducers/auth";
import Login from '../../components/Login';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  login: AuthActions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
