import React from 'react';

import { HeaderWrapper, Logo, Menu, MenuItem } from './style';

const Header = () => (
  <HeaderWrapper>
    <Logo to="/">Logo</Logo>
    <Menu>
      <MenuItem to="/page1">Page 1</MenuItem>
      <MenuItem to="/page2">Page 2</MenuItem>
      <MenuItem to="/page3">Page 3</MenuItem>
      <MenuItem to="/page4">Page 4</MenuItem>
    </Menu>
  </HeaderWrapper>
);

export { Header };
