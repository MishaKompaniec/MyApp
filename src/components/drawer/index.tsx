import { Drawer as DrawerComponent } from 'antd';
import React, { useState } from 'react';

import { DrawerItem } from '../drawerItem';

import { DrawerContent, MenuItem } from './style';

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
        <DrawerContent>
          <DrawerItem name="test name 1" price={137} />
          <DrawerItem name="test name 2" price={137} />
          <DrawerItem name="test name 3" price={137} />
          <DrawerItem name="test name 4" price={137} />
        </DrawerContent>
      </DrawerComponent>
    </>
  );
};

export default Drawer;
