import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box">
          <div>{mailbox._id}</div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;

