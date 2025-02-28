import { Card } from 'antd';
import React from 'react';

import {
  Description,
  Wrapper,
  CardInfo,
  CardTitle,
  Title,
  Price,
  Btn,
} from './style';

const BestSellers = () => (
  <Wrapper>
    <Title>Популярные товары</Title>
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="image2" src="/images/image2.jpg" />}
    >
      <CardInfo>
        <CardTitle>Шикарный букет</CardTitle>
        <Description>Букет из 101 розы сорта "Престиж"</Description>
        <Price>4350 грн</Price>
        <Btn type="primary">Добавить в корзину</Btn>
      </CardInfo>
    </Card>
  </Wrapper>
);

export default BestSellers;
