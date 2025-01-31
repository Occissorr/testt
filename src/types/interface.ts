// ButtonComponent interface
export interface ButtonComponentProps {
  children?: React.ReactNode;
  onClick?: () => void;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  text: string;
}

// Modal interface
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    content?: React.ReactNode;
    footer?: React.ReactNode;
}

// SidebarComponent interface
export interface SidebarComponentProps {
    isOpen: boolean;
    onClose: () => void;
    layout?:'vertical' | 'horizontal';
    position?: 'top' | 'bottom' | 'right' | 'left';
    items: SidebarItem[];
}

export interface SidebarItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    shape?: 'circle' | 'square';
    hasBorder?: boolean;
    styleClass?: string;
}

export interface HomePageProps { 

}