import React from 'react';

import {
  MainWrapper,
  Wrapper,
  Title,
  Description,
  MainInfo,
  Btn,
} from './style';

const Home = () => (
  <MainWrapper>
    <Wrapper>
      <MainInfo>
        <Title>flower</Title>
        <Description>
          Наши цены позволят вам дарить цветы без повода!
        </Description>
        <Btn type="primary" size="large">
          Выбрать цветы
        </Btn>
      </MainInfo>
    </Wrapper>
  </MainWrapper>
);

export default Home;
