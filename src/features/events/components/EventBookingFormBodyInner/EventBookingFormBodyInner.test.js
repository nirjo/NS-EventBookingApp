import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingFormBodyInner from './EventBookingFormBodyInner';

describe('<EventBookingFormBodyInner />', () => {
  test('it should mount', () => {
    render(<EventBookingFormBodyInner />);
    
    const eventBookingFormBodyInner = screen.getByTestId('EventBookingFormBodyInner');

    expect(eventBookingFormBodyInner).toBeInTheDocument();
  });
});