import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventInfoContainer from './EventInfoContainer';

describe('<EventInfoContainer />', () => {
  test('it should mount', () => {
    render(<EventInfoContainer />);
    
    const eventInfoContainer = screen.getByTestId('EventInfoContainer');

    expect(eventInfoContainer).toBeInTheDocument();
  });
});