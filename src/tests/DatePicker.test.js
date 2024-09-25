import { render, screen } from '@testing-library/react';
import DatePicker from '../components/DatePicker';

describe('DatePicker Component', () => {
  test('renders DatePicker component', () => {
    render(<DatePicker />);
    
    // Check if the start date label is present
    const startDateLabel = screen.getByLabelText(/Start Date/i);
    expect(startDateLabel).toBeInTheDocument();
    
    // Check if Recurrence Options are rendered
    const dailyButton = screen.getByText(/Daily/i);
    expect(dailyButton).toBeInTheDocument();
    
    const weeklyButton = screen.getByText(/Weekly/i);
    expect(weeklyButton).toBeInTheDocument();
    
    const monthlyButton = screen.getByText(/Monthly/i);
    expect(monthlyButton).toBeInTheDocument();
    
    const yearlyButton = screen.getByText(/Yearly/i);
    expect(yearlyButton).toBeInTheDocument();
  });
});
