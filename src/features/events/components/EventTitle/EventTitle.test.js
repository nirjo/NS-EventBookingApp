import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventTitle from './EventTitle';

describe('<EventTitle />', () => {
  test('it should mount', () => {
    render(<EventTitle />);
    
    const eventTitle = screen.getByTestId('EventTitle');

    expect(eventTitle).toBeInTheDocument();
  });
});