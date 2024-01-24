import React, { useState } from 'react';

const MyComponent = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (key, value) => {
    // Create a copy of the object to avoid mutating the state directly
    const updatedValues = { ...inputValues, [key]: value };
    setInputValues(updatedValues);
  };

  return (
    <div>
      {Object.keys(inputValues).map((key) => (
        <input
          key={key}
          type="text"
          value={inputValues[key] || ''}
          onChange={(e) => handleInputChange(key, e.target.value)}
        />
      ))}
    </div>
  );
};

export default MyComponent;
