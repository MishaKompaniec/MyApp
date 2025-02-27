import React, { FC } from 'react';

import { AdvantageItemProps } from '@/types';
import { advantagesData } from '@/utils/pages';

import {
  AdvantagesWraper,
  AdvantagesItem,
  InformWrapper,
  SubTitle,
  FlexBox,
  Title,
  Info,
  Text,
  Img,
} from './style';

const AdvantageItem: FC<AdvantageItemProps> = ({ title, text }) => (
  <AdvantagesItem>
    <Img src="/images/flower.png" alt="flower" />
    <FlexBox>
      <SubTitle>{title}</SubTitle>
      <Text>{text}</Text>
    </FlexBox>
  </AdvantagesItem>
);

const Advantages = () => (
  <InformWrapper>
    <Title>Преимущества flower</Title>
    <Info>
      Каждый день мы учимся и экспериментируем, создавая новые цветочные
      композиции. Мы стремимся стать сегодня чуточку лучше, чем были вчера,
      чтобы делать наших клиентов счастливыми.
    </Info>
    <AdvantagesWraper>
      {advantagesData.map((advantage, index) => (
        <AdvantageItem key={index} {...advantage} />
      ))}
    </AdvantagesWraper>
  </InformWrapper>
);

export default Advantages;
