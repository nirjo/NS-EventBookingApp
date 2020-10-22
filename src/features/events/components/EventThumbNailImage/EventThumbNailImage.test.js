import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventThumbNailImage from './EventThumbNailImage';

describe('<EventThumbNailImage />', () => {
  test('it should mount', () => {
    render(<EventThumbNailImage />);
    
    const eventThumbNailImage = screen.getByTestId('EventThumbNailImage');

    expect(eventThumbNailImage).toBeInTheDocument();
  });
});