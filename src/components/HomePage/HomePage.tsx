import React, { FC, useState } from 'react';
import './HomePage.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { SidebarItem } from 'src/types/interface';
import SidebarComponent from '../SidebarComponent/SidebarComponent';
import { HomePageProps } from '../../types/interface';
import { Shapes } from 'src/constants-services/constatns';
const HomePage: FC<HomePageProps> = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const sidebarItems: SidebarItem[] | undefined = [
    {
      id: '1',
      label: 'Home',
      icon: <i className="fas fa-home"></i>,
      onClick: () => getLog(),
      shape: Shapes.Circle,
      hasBorder: true,
    },
    {
      id: '2',
      label: 'Projects',
      icon: <i className="fas fa-code"></i>,
      onClick: () => console.log('Navigate to Projects'),
      shape: Shapes.Square,
      hasBorder: true,
    },
    {
      id: '3',
      label: 'About',
      icon: <i className="fas fa-user"></i>,
      onClick: () => console.log('Navigate to About'),
      shape: Shapes.Square,
      hasBorder: true,
    },
    {
      id: '4',
      label: 'Contact',
      icon: <i className="fas fa-envelope"></i>,
      onClick: () => console.log('Navigate to Contact'),
      shape: Shapes.Square,
      hasBorder: true,
    }
  ];

  /**
   * toggleSideBar()
   * Toggles the sidebarOpen value
   * @returns 
   */
  const toggleSideBar = () => {
    setSidebarOpen(prev => !prev)
  };

  /**
   * sideBarClose()
   * Sets the sidebar visibility to false
   * @returns 
   */
  const sideBarClose = () => setSidebarOpen(false);

  return (
    <div data-testid="HomePage" className="homepage-container">
      <header className="header">
        {!isSidebarOpen && <ButtonComponent onClick={toggleSideBar} text='Menu' />}
        <h1>My Portfolio</h1>
      </header>

      <main className="p-[2px] main-content">
        <section className="hero-section">
          <h2>Welcome to My Portfolio</h2>
          <p>Frontend Developer | React Specialist | UI/UX Enthusiast</p>
          <ButtonComponent 
            onClick={() => console.log('Contact button clicked')} 
            text='Get in Touch'
          />
        </section>
      </main>

      <SidebarComponent 
        isOpen={isSidebarOpen} 
        onClose={sideBarClose} 
        items={sidebarItems}
        position='left'
        layout='vertical'
      />
    </div>
  );
};

export default HomePage;
