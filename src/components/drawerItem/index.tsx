import React, { FC } from 'react';

import { DrawerItemProps } from '@/types';

import { DrawerWrapper, Title, Price } from './style';

const DrawerItem: FC<DrawerItemProps> = ({ name, price }) => (
  <DrawerWrapper>
    <Title>{name}</Title>
    <Price>{price}грн</Price>
  </DrawerWrapper>
);

export { DrawerItem };
