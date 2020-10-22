import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingFormWindow from './EventBookingFormWindow';

describe('<EventBookingFormWindow />', () => {
  test('it should mount', () => {
    render(<EventBookingFormWindow />);
    
    const eventBookingFormWindow = screen.getByTestId('EventBookingFormWindow');

    expect(eventBookingFormWindow).toBeInTheDocument();
  });
});