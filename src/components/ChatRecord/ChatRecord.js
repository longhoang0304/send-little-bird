import React  from 'react';
import PropTypes from 'prop-types';

const ChatRecord = ({ message, sender, isCurrentUser }) => {
  if (!sender) {
    return (
      <div>
        <span>System</span>
        <span>{message}</span>
      </div>
    )
  }
  return (
    <div>
      <span>{sender.nickname}</span>
      <span>({sender.userId}</span>
      <span>-</span>
      <span>{isCurrentUser ? 'Owner' : 'Guess'})</span>
      <span>:</span>
      <span>{message}</span>
    </div>
  );
};

ChatRecord.defaultProps = {
  sender: null,
}

ChatRecord.propTypes = {
  message: PropTypes.string.isRequired,
  sender: PropTypes.shape(
  ),
  isCurrentUser: PropTypes.string.isRequired,
};

export default ChatRecord;
