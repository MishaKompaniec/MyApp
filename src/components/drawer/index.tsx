import { Drawer as DrawerComponent } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCart } from '@/CartContext';

import { DrawerItem } from '../drawerItem';

import { DrawerContent, ListItem, Total, List, Basket } from './style';

const Drawer = () => {
  const { t } = useTranslation();
  const { cart, totalPrice, isCartOpen, openCart, closeCart } = useCart();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      <Basket onClick={openCart} src="/images/basket.png" alt="basket" />
      <DrawerComponent
        title={t('basket.title')}
        onClose={closeCart}
        open={isCartOpen}
        width={isMobile ? '100%' : 500}
      >
        <DrawerContent>
          {cart.length === 0 ? (
            <p>{t('basket.empty')}</p>
          ) : (
            <List>
              {cart.map((product) => (
                <ListItem key={product.id}>
                  <DrawerItem product={product} />
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
