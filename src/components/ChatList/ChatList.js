import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UserInfo from "../UserInfo";

const ChatList = ({ userList, fetchUserList }) => {
  useEffect(() => {
    fetchUserList()
  }, []);

    console.log(userList)

  return (
    <div>
      {
        userList.map(user => (
          <UserInfo userInfo={user} id={user.userId} />
        ))
      }
    </div>
  );
};

ChatList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fetchUserList: PropTypes.func.isRequired,
};

export default ChatList;
