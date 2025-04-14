import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BookingForm } from './BookingForm'; 
describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];

  test('renders the form fields', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reserve/i })).toBeInTheDocument();
  });


  test('submits valid form data', async () => {
    window.alert = vi.fn(); // or jest.fn() if using Jest

    render(<BookingForm availableTimes={availableTimes} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2025-05-01' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /reserve/i }));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Reservation submitted!');
    });
  });
});
