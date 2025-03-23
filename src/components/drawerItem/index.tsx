import React, { FC } from 'react';

import { DrawerItemProps } from '@/types';

import { DrawerWrapper, Title, Price, QuantityControls } from './style';

const DrawerItem: FC<DrawerItemProps> = ({
  id,
  name,
  price,
  quantity,
  updateQuantity,
}) => (
  <DrawerWrapper>
    <Title>{name}</Title>
    <Price>{price} грн</Price>
    <QuantityControls>
      <button onClick={() => updateQuantity(id, quantity - 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
    </QuantityControls>
  </DrawerWrapper>
);

export { DrawerItem };
