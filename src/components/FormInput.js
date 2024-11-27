import React, { useState, useCallback } from 'react';

function FormInput() {
  const [text, setText] = useState('');
  const [textHistory, setTextHistory] = useState([]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const saveText = () => {
    if (text.trim()) {
      setTextHistory([...textHistory, text]);
      setText('');
    }
  };

  const clearHistory = () => {
    setTextHistory([]);
  };

  return (
    <div className="text-input-container">
      <h2>Enhanced Text Input</h2>
      <div className="input-group">
        <input 
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter text"
        />
        <button onClick={saveText}>Save</button>
      </div>
      <div className="history-section">
        <h3>Input History</h3>
        {textHistory.length > 0 ? (
          <>
            <ul>
              {textHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button onClick={clearHistory}>Clear History</button>
          </>
        ) : (
          <p>No history yet</p>
        )}
      </div>
    </div>
  );
}

export default FormInput;