import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        <div>
            {selectedBox ? (
                <>
                    <h1>Mailbox {selectedBox._id}</h1>
                    <h3>Details</h3>
                    <p>Boxholder: {selectedBox.boxOwner}</p>
                    <p>Box Size: {selectedBox.boxSize}</p>
                </>
            ) : (
                <h2>Mailbox Not Found!</h2>
            )}
        </div>
    );
};

export default MailboxDetails;