import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo }) => {

  return (
    <div>
      <span>{userInfo.nickname}</span>
      <span>({userInfo.userId})</span>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.shape().isRequired,
};

export default UserInfo;
