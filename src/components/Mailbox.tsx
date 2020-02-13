import * as React from 'react';

const Mailbox: React.FunctionComponent<{unreadMessages: string[]}> = ({
  unreadMessages
}) => {
  return (
    <div>
      <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
      </h2>
    }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
const listMessages = messages.map((message) => 
  <li>{message}</li>
);

export default Mailbox;
