import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingFormContainer from './EventBookingFormContainer';

describe('<EventBookingFormContainer />', () => {
  test('it should mount', () => {
    render(<EventBookingFormContainer />);
    
    const eventBookingFormContainer = screen.getByTestId('EventBookingFormContainer');

    expect(eventBookingFormContainer).toBeInTheDocument();
  });
});