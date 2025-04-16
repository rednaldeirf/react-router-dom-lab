import React, { useState } from 'react';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({ boxOwner, boxSize });
    setBoxOwner('');
    setBoxSize('Small');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Box Owner" 
        value={boxOwner} 
        onChange={(e) => setBoxOwner(e.target.value)} 
        required 
      />
      <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;

// import React, { useState } from 'react';

// const MailboxForm = ({ addBox }) => {
//     const [boxOwner, setBoxOwner] = useState('');
//     const [boxSize, setBoxSize] = useState('Small');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addBox({ boxOwner, boxSize });
//         setBoxOwner('');
//         setBoxSize('Small');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={boxOwner}
//                 onChange={(e) => setBoxOwner(e.target.value)}
//                 placeholder="Owner Name"
//             />
//             <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
//                 <option value="Small">Small</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Large">Large</option>
//             </select>
//             <button type="submit">Create Mailbox</button>
//         </form>
//     );
// };