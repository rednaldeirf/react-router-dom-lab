import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
    const [boxOwner, setBoxOwner] = useState('');
    const [boxSize, setBoxSize] = useState('Small');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ boxOwner, boxSize });
        navigate('/mailboxes'); 
        setBoxOwner('');
        setBoxSize('Small');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a Boxholder:</p>
            <input
                type="text"
                value={boxOwner}
                onChange={(e) => setBoxOwner(e.target.value)}
                placeholder="Owner Name"
            />
            <p>Select a Box Size:</p>
            <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <button type="submit">Create Mailbox</button>
        </form>
    );
};

export default MailboxForm;