import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingFormBody from './EventBookingFormBody';

describe('<EventBookingFormBody />', () => {
  test('it should mount', () => {
    render(<EventBookingFormBody />);
    
    const eventBookingFormBody = screen.getByTestId('EventBookingFormBody');

    expect(eventBookingFormBody).toBeInTheDocument();
  });
});