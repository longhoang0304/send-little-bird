import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatHistory from '../ChatHistory';
import ChatBox from '../../containers/ChatBox';

const ChatDialog = ({ userId, message, createChannel }) => {
  useEffect(() => {
    createChannel(userId);
  }, []);
  const { history = [] } = message;

  return (
    <div>
      <ChatBox userId={userId} />
      <ChatHistory chatHistory={history} guessUserId={userId} />
    </div>
  );
};

ChatDialog.propTypes = {
  message: PropTypes.shape().isRequired,
  createChannel: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ChatDialog;
