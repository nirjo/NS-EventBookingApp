import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventBookingFormThumbnailContainer from './EventBookingFormThumbnailContainer';

describe('<EventBookingFormThumbnailContainer />', () => {
  test('it should mount', () => {
    render(<EventBookingFormThumbnailContainer />);
    
    const eventBookingFormThumbnailContainer = screen.getByTestId('EventBookingFormThumbnailContainer');

    expect(eventBookingFormThumbnailContainer).toBeInTheDocument();
  });
});