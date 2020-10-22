import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingForm from './EventBookingForm';

describe('<EventBookingForm />', () => {
  test('it should mount', () => {
    render(<EventBookingForm />);
    
    const eventBookingForm = screen.getByTestId('EventBookingForm');

    expect(eventBookingForm).toBeInTheDocument();
  });
});