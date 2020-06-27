import { connect } from 'react-redux';
import { actions as UsersActions, selectors as UsersSelectors } from "../../reducers/users";
import ChatList from '../../components/ChatList';

const mapStateToProps = state => ({
  userList: UsersSelectors.getUserList(state),
});

const mapDispatchToProps = {
  fetchUserList: UsersActions.fetch,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
