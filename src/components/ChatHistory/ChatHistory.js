import React from 'react';
import PropTypes from 'prop-types';
import ChatRecord from '../ChatRecord';

const ChatHistory = ({ chatHistory, guessUserId }) => {
  if (!chatHistory || !chatHistory.length) return (
    <div>Let's say hi to another!</div>
  )

  return (
    <div>
      {chatHistory.map(his => (
        <ChatRecord
        key={his.messageId}
        guessUserId={guessUserId}
        message={his.message}
        sender={his.sender || his._sender}
        />
      ))}
    </div>
  );
};

ChatHistory.propTypes = {
  chatHistory: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  guessUserId: PropTypes.string,
};

export default ChatHistory;
