// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import DatePicker from './components/DatePicker';

test('renders App component', () => {
  render(<App />);
  
  // Check if the app renders the title
  const titleElement = screen.getByText(/Date Picker App/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check if the DatePicker component is rendered
  const startDateLabel = screen.getByText(/Start Date/i);
  expect(startDateLabel).toBeInTheDocument();
});
