import React, { useState } from 'react';

function FormInput() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Text Input</h2>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
}

export default FormInput;