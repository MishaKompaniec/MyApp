import { Drawer as DrawerComponent } from 'antd';
import React, { useState } from 'react';

import { MenuItem } from './style';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuItem onClick={showDrawer}>КОРЗИНА</MenuItem>
      <DrawerComponent title="Корзина" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </DrawerComponent>
    </>
  );
};

export default Drawer;
