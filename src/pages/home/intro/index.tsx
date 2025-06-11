import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <MainWrapper>
      <Wrapper>
        <MainInfo>
          <Title>flower</Title>
          <Description>{t('intro.description')}</Description>
          <Btn type="primary" size="large" onClick={() => navigate('/store')}>
            {t('intro.btn')}
          </Btn>
        </MainInfo>
      </Wrapper>
    </MainWrapper>
  );
};

export default Intro;
