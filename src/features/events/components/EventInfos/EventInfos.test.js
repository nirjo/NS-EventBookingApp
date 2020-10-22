import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventInfos from './EventInfos';

describe('<EventInfos />', () => {
  test('it should mount', () => {
    render(<EventInfos />);
    
    const eventInfos = screen.getByTestId('EventInfos');

    expect(eventInfos).toBeInTheDocument();
  });
});