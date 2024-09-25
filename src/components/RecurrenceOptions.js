import React from 'react';

function RecurrenceOptions({ setRecurrencePattern }) {
  const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="btn-group">
      {options.map((option) => (
        <button
          key={option}
          className="btn btn-outline-primary"
          onClick={() => setRecurrencePattern(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default RecurrenceOptions;
