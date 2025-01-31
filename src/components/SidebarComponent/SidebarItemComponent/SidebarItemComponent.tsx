import React from 'react';
import { SidebarItem } from '../../../types/interface';
import './SidebarItemComponent.scss';

const SidebarItemComponent: React.FC<SidebarItem> = ({
  id,
  icon,
  label,
  onClick,
  shape,
  hasBorder,
  styleClass,
}) => {
  const shapeClass = `shape-${shape}`;
  const borderClass = hasBorder ? 'has-border' : '';

  return (
    <div
      className={`sidebar-item ${shapeClass} ${borderClass} ${styleClass}`}
      key={id}
      onClick={onClick}
    >
      {icon}
      {label}
    </div>
  );
};

export default SidebarItemComponent;
