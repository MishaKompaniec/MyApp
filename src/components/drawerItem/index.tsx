import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';

import { useCart } from '@/CartContext';
import { DrawerItemProps } from '@/types';

import {
  QuantityControls,
  DrawerWrapper,
  Counter,
  Title,
  Price,
  Btn,
} from './style';

const DrawerItem: FC<DrawerItemProps> = ({ id, name, price, quantity }) => {
  const { removeFromCart, updateQuantity } = useCart();
  return (
    <DrawerWrapper>
      <Title>{name}</Title>
      <Price>{price} грн</Price>
      <QuantityControls>
        <Button
          size="small"
          icon={<MinusOutlined />}
          onClick={() => updateQuantity(id, quantity - 1)}
        />
        <Counter>{quantity}</Counter>
        <Button
          size="small"
          icon={<PlusOutlined />}
          onClick={() => updateQuantity(id, quantity + 1)}
        />
      </QuantityControls>
      <Btn
        type="text"
        icon={<CloseOutlined />}
        onClick={() => removeFromCart(id)}
      />
    </DrawerWrapper>
  );
};

export { DrawerItem };
