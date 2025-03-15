import React from 'react';

import { HeaderWrapper, LogoWrapper, Logo, Menu, MenuItem } from './style';

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper to="/">
      <Logo src="/images/logo.png" alt="flower" />
    </LogoWrapper>
    <Menu>
      <MenuItem to="/store">МАГАЗИН</MenuItem>
      <MenuItem to="/">О НАС</MenuItem>
      <MenuItem to="/">ИЗБРАННОЕ</MenuItem>
      <MenuItem to="/">КОНТАКТЫ</MenuItem>
    </Menu>
  </HeaderWrapper>
);

export { Header };
