import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from '../drawer';

import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  Menu,
  MenuItemLink,
  MenuItem,
} from './style';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <HeaderWrapper>
      <LogoWrapper to="/">
        <Logo src="/images/logo.png" alt="flower" />
      </LogoWrapper>
      <Menu>
        <MenuItemLink to="/store">МАГАЗИН</MenuItemLink>
        <MenuItem onClick={() => scrollToSection('about-us')}>О НАС</MenuItem>
        <MenuItem onClick={() => scrollToSection('bestSellers')}>
          ТОП ПРОДАЖ
        </MenuItem>
        <MenuItem onClick={() => scrollToSection('contacts')}>
          КОНТАКТЫ
        </MenuItem>
        <Drawer />
      </Menu>
    </HeaderWrapper>
  );
};

export { Header };
