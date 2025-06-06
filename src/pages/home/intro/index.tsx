import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MainWrapper,
  Wrapper,
  Title,
  Description,
  MainInfo,
  Btn,
} from './style';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <Wrapper>
        <MainInfo>
          <Title>flower</Title>
          <Description>
            Наши цены позволят вам дарить цветы без повода!
          </Description>
          <Btn type="primary" size="large" onClick={() => navigate('/store')}>
            Выбрать цветы
          </Btn>
        </MainInfo>
      </Wrapper>
    </MainWrapper>
  );
};

export default Intro;
