import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';

const ChatBox = ({ sendMessage, userId }) => {
  const [message, setMessage] = useState("");
  const sendMsg = useCallback(() => {
    sendMessage(userId, message);
    setMessage("");
  }, [message]);

  return (
    <div>
      <input
        type="text"
        value={message} onChange={e => {
        setMessage(e.target.value)
        }}
      />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
};

ChatBox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ChatBox;
