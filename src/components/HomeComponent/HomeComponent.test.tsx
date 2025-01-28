import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeComponent from './HomeComponent';

describe('<HomeComponent />', () => {
  test('it should mount', () => {
    render(<HomeComponent title={''} header={''} footer={''} body={''} />);

    const homeComponent = screen.getByTestId('HomeComponent');

    expect(homeComponent).toBeInTheDocument();
  });
});