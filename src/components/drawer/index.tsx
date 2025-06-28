import { Drawer as DrawerComponent, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCart } from '@/CartContext';

import { DrawerItem } from '../drawerItem';

import { DrawerContent, ListItem, Total, List, Basket, Btn } from './style';

const Drawer = () => {
  const { t } = useTranslation();
  const { cart, totalPrice, isCartOpen, openCart, closeCart, clearCart } =
    useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOk = () => {
    clearCart();
    closeCart();
    setIsModalOpen(false);
  };

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
          {cart.length > 0 && (
            <Btn
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              {t('basket.btn')}
            </Btn>
          )}
        </DrawerContent>
      </DrawerComponent>
      <Modal
        title={t('basket.modalTitle')}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        okText={t('basket.ok')}
        cancelText={t('basket.cancel')}
      >
        <p>{t('basket.modal')}</p>
      </Modal>
    </>
  );
};

export default Drawer;
