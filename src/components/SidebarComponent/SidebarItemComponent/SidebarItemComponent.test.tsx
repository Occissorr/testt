import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarItemComponent from './SidebarItemComponent';

describe('<SidebarItem />', () => {
  test('it should mount', () => {
    render(<SidebarItemComponent id={''} label={''} onClick={()=>{}} />);

    const sidebarItem = screen.getByTestId('SidebarItem');

    expect(sidebarItem).toBeInTheDocument();
  });
});