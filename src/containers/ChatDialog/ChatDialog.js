import { connect } from 'react-redux';
import { selectors as MessagesSelectors } from '../../reducers/messages';
import { actions as ChannelsActions } from '../../reducers/channels';
import ChatDialog from '../../components/ChatDialog';

const mapStateToProps = (state, { userId }) => ({
  message: MessagesSelectors.getMessagesByUserId(state, userId),
});

const mapDispatchToProps = {
  createChannel: ChannelsActions.createChannel,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatDialog);
