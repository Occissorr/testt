import React, { FC } from 'react';
import './SidebarComponent.scss';
import { SidebarComponentProps } from '../../types/interface';
import SidebarItemComponent from './SidebarItemComponent/SidebarItemComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const SidebarComponent: FC<SidebarComponentProps> = ({ isOpen, onClose, items, layout, position }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${layout} ${position}`}>
      <ButtonComponent text='Close' onClick={onClose} />
      <div className='sideBarItems'>
        {items.map(item => (
          <div key={item.id} className='sidebarItemWrapper'>
            <SidebarItemComponent {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
