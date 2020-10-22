import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventSeacrhContainer from './EventSeacrhContainer';

describe('<EventSeacrhContainer />', () => {
  test('it should mount', () => {
    render(<EventSeacrhContainer />);
    
    const eventSeacrhContainer = screen.getByTestId('EventSeacrhContainer');

    expect(eventSeacrhContainer).toBeInTheDocument();
  });
});