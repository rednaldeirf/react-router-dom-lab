import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
        <h1>Mailbox List</h1>
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box">
          <div>Mailbox {mailbox._id}</div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;

