import React from 'react';

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
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBestSellers = () => {
    const aboutSection = document.getElementById('bestSellers');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderWrapper>
      <LogoWrapper to="/">
        <Logo src="/images/logo.png" alt="flower" />
      </LogoWrapper>
      <Menu>
        <MenuItemLink to="/store">МАГАЗИН</MenuItemLink>
        <MenuItem onClick={scrollToAbout}>О НАС</MenuItem>
        <MenuItem onClick={scrollToBestSellers}>ТОП ПРОДАЖ</MenuItem>
        <MenuItem>КОНТАКТЫ</MenuItem>
        <Drawer />
      </Menu>
    </HeaderWrapper>
  );
};

export { Header };
