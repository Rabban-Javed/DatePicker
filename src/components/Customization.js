import React from 'react';

function Customization({ recurrencePattern, customization, setCustomization }) {
  const handleInputChange = (e) => {
    const value = Math.max(1, e.target.value);  // Ensure the value is at least 1
    setCustomization({
      ...customization,
      every: value,
    });
  };

  return (
    <div className="mt-3">
      <label>Recurrence customization for {recurrencePattern}</label>
      <input
        type="number"
        className="form-control"
        placeholder={`Every X ${recurrencePattern.toLowerCase()}`}
        value={customization.every || 1}
        onChange={handleInputChange}
        min="1"
      />
    </div>
  );
}

export default Customization;
