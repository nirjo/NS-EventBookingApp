import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventShortDescContainer from './EventShortDescContainer';

describe('<EventShortDescContainer />', () => {
  test('it should mount', () => {
    render(<EventShortDescContainer />);
    
    const eventShortDescContainer = screen.getByTestId('EventShortDescContainer');

    expect(eventShortDescContainer).toBeInTheDocument();
  });
});