import { Drawer as DrawerComponent } from 'antd';
import React, { useState } from 'react';

import { useCart } from '@/CartContext';

import { DrawerItem } from '../drawerItem';

import { DrawerContent, MenuItem } from './style';

const Drawer = () => {
  const { cart, removeFromCart, totalPrice, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuItem onClick={() => setOpen(true)}>КОРЗИНА</MenuItem>
      <DrawerComponent
        title="Корзина"
        onClose={() => setOpen(false)}
        open={open}
      >
        <DrawerContent>
          {cart.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <DrawerItem
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    updateQuantity={updateQuantity}
                  />
                  <button onClick={() => removeFromCart(item.id)}>
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p>Итого: {totalPrice} ₽</p>
        </DrawerContent>
      </DrawerComponent>
    </>
  );
};

export default Drawer;
