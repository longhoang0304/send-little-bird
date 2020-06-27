import React from 'react';
import ChatDialog from '../../containers/ChatDialog';
import {useParams} from "react-router";

const ChatDialogPage = () => {
  const params = useParams();
  return (
    <ChatDialog userId={params.userId} />
  );
};

export default ChatDialogPage;
