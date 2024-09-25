import React from 'react';

function DateRange({ startDate, setStartDate }) {
  return (
    <div className="form-group">
        
      <label htmlFor="start-date">Start Date</label>
      <input
       id="start-date"
        type="date"
        className="form-control"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
  );
}

export default DateRange;
