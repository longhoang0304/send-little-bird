import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const UserInfo = ({ userInfo }) => {

  return (
    <div>
    <Link to={`/chat/${userInfo.userId}`}>
      <span>{userInfo.nickname}</span>
      <span>({userInfo.userId})</span>
    </Link>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape().isRequired,
};

export default UserInfo;
