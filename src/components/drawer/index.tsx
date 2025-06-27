import { Drawer as DrawerComponent } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useCart } from '@/CartContext';

import { DrawerItem } from '../drawerItem';

import { DrawerContent, MenuItem, ListItem, Total, List } from './style';

const Drawer = () => {
  const { t } = useTranslation();
  const { cart, totalPrice, isCartOpen, openCart, closeCart } = useCart();

  return (
    <>
      <MenuItem onClick={openCart}>{t('header.basket')}</MenuItem>
      <DrawerComponent
        title={t('basket.title')}
        onClose={closeCart}
        open={isCartOpen}
        width={500}
      >
        <DrawerContent>
          {cart.length === 0 ? (
            <p>{t('basket.empty')}</p>
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
          <Total>{t('basket.total', { total: totalPrice })}</Total>
        </DrawerContent>
      </DrawerComponent>
    </>
  );
};

export default Drawer;
