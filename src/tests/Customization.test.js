import { render, screen } from '@testing-library/react';
import Customization from '../components/Customization';

test('renders Customization component', () => {
  render(<Customization recurrencePattern="Daily" customization={{}} setCustomization={() => {}} />);
  const label = screen.getByText(/Recurrence customization for Daily/i);
  expect(label).toBeInTheDocument();
});
