import { useTranslation } from 'react-i18next';

import { LeftTextBlock, RightTextBlock, Title, Wrapper, Text } from './style';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id="about-us">
      <Title>
        {t('about-us.hero')} {t('about-us.title')}
      </Title>
      <LeftTextBlock>{t('about-us.block1')}</LeftTextBlock>
      <RightTextBlock>{t('about-us.block2')}</RightTextBlock>
      <LeftTextBlock>{t('about-us.block3')}</LeftTextBlock>
      <RightTextBlock>{t('about-us.block4')}</RightTextBlock>
      <LeftTextBlock>{t('about-us.block5')}</LeftTextBlock>
      <Text>{t('about-us.block6')}</Text>
    </Wrapper>
  );
};

export default AboutUs;
