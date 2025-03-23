import { Drawer as DrawerComponent } from 'antd';
import React, { useState } from 'react';

import { useCart } from '@/CartContext';

import { DrawerItem } from '../drawerItem';

import { DrawerContent, MenuItem, ListItem, Total, List } from './style';

const Drawer = () => {
  const { cart, totalPrice } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuItem onClick={() => setOpen(true)}>КОРЗИНА</MenuItem>
      <DrawerComponent
        title="Корзина"
        onClose={() => setOpen(false)}
        open={open}
        width={500}
      >
        <DrawerContent>
          {cart.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <List>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <DrawerItem
                    id={item.id}
                    name={item.title}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </ListItem>
              ))}
            </List>
          )}
          <Total>Итого: {totalPrice} грн</Total>
        </DrawerContent>
      </DrawerComponent>
    </>
  );
};

export default Drawer;
