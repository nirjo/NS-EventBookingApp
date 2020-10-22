import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventThumbNail from './EventThumbNail';

describe('<EventThumbNail />', () => {
  test('it should mount', () => {
    render(<EventThumbNail />);
    
    const eventThumbNail = screen.getByTestId('EventThumbNail');

    expect(eventThumbNail).toBeInTheDocument();
  });
});