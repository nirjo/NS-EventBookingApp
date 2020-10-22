import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventListItem from './EventListItem';

describe('<EventListItem />', () => {
  test('it should mount', () => {
    render(<EventListItem />);
    
    const eventListItem = screen.getByTestId('EventListItem');

    expect(eventListItem).toBeInTheDocument();
  });
});