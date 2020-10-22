import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingFormHeader from './EventBookingFormHeader';

describe('<EventBookingFormHeader />', () => {
  test('it should mount', () => {
    render(<EventBookingFormHeader />);
    
    const eventBookingFormHeader = screen.getByTestId('EventBookingFormHeader');

    expect(eventBookingFormHeader).toBeInTheDocument();
  });
});