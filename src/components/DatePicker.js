import React, { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import Customization from './Customization';
import MiniCalendar from './MiniCalendar';
import DateRange from './DateRange';

function DatePicker() {
  const [recurrencePattern, setRecurrencePattern] = useState('');
  const [customization, setCustomization] = useState({});
  const [startDate, setStartDate] = useState('');

  return (
    <div className="container p-4">
      <DateRange startDate={startDate} setStartDate={setStartDate} />
      <RecurrenceOptions setRecurrencePattern={setRecurrencePattern} />
      {recurrencePattern && (
        <Customization
          recurrencePattern={recurrencePattern}
          customization={customization}
          setCustomization={setCustomization}
        />
      )}
      <MiniCalendar
        startDate={startDate}
        recurrencePattern={recurrencePattern}
        customization={customization}
      />
    </div>
  );
}

export default DatePicker;
