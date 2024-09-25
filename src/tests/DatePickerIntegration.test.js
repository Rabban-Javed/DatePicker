import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';

test('selects a recurrence pattern and customizes recurrence', () => {
  render(<DatePicker />);

  // Find and click the "Daily" button
  const dailyButton = screen.getByText(/Daily/i);
  fireEvent.click(dailyButton);

  // Ensure the input for customizing the recurrence is displayed
  const input = screen.getByPlaceholderText(/Every X daily/i);
  expect(input).toBeInTheDocument();

  // Simulate user typing "3" into the input field
  fireEvent.change(input, { target: { value: '3' } });

  // Verify the input value has been updated to "3"
  expect(input.value).toBe('3');
});
