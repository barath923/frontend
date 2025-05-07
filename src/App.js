import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://<BACKEND_VM_PUBLIC_IP>:3000/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
