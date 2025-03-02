import React from 'react';

import { FooterWrapper, FooterText, FlexBox } from './style';

const Footer = () => (
  <FooterWrapper>
    <FlexBox>
      <FooterText> +38 777 777 77 77</FooterText>
      <FooterText>&copy; {new Date().getFullYear()}</FooterText>
    </FlexBox>
  </FooterWrapper>
);

export { Footer };
