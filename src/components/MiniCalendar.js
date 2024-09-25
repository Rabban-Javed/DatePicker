import React from 'react';
import { format, addDays, addMonths, addWeeks, addYears } from 'date-fns';

function MiniCalendar({ startDate, recurrencePattern, customization }) {
  if (!startDate) {
    return <div className="alert alert-warning">Please select a start date first.</div>;
  }

  const calculateRecurrenceDates = () => {
    let dates = [];
    let currentDate = new Date(startDate);

    switch (recurrencePattern) {
      case 'Daily':
        for (let i = 0; i < 10; i++) {
          dates.push(currentDate);
          currentDate = addDays(currentDate, customization.every || 1);
        }
        break;
      case 'Weekly':
        for (let i = 0; i < 10; i++) {
          dates.push(currentDate);
          currentDate = addWeeks(currentDate, customization.every || 1);
        }
        break;
      case 'Monthly':
        for (let i = 0; i < 10; i++) {
          dates.push(currentDate);
          currentDate = addMonths(currentDate, customization.every || 1);
        }
        break;
      case 'Yearly':
        for (let i = 0; i < 10; i++) {
          dates.push(currentDate);
          currentDate = addYears(currentDate, customization.every || 1);
        }
        break;
      default:
        return [];
    }
    return dates;
  };

  const dates = calculateRecurrenceDates();

  return (
    <div className="mt-4">
      <h5>Recurring Dates</h5>
      <div className="d-flex flex-wrap">
        {dates.map((date, index) => (
          <div key={index} className="p-2 border m-1">
            {format(date, 'dd MMM yyyy')}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniCalendar;
