import { connect } from 'react-redux';
import { actions as MessagesActions, selectors as MessagesSelectors } from "../../reducers/messages";
import ChatBox from '../../components/ChatBox';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  sendMessage: MessagesActions.sendMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
