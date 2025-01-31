import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarComponent from './SidebarComponent';

describe('<SidebarComponent />', () => {
  test('it should mount', () => {
    render(<SidebarComponent isOpen={false} onClose={()=>{}} items={[]} />);

    const sidebarComponent = screen.getByTestId('SidebarComponent');

    expect(sidebarComponent).toBeInTheDocument();
  });
});