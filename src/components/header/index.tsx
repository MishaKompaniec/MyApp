import React from 'react';

import { HeaderWrapper, LogoWrapper, Logo, Menu, MenuItem } from './style';

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper to="/">
      <Logo src="/images/logo.png" alt="flower" />
    </LogoWrapper>
    <Menu>
      <MenuItem to="/page1">МАГАЗИН</MenuItem>
      <MenuItem to="/page2">О НАС</MenuItem>
      <MenuItem to="/page3">КОНТАКТЫ</MenuItem>
    </Menu>
  </HeaderWrapper>
);

export { Header };
