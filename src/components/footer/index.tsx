import React from 'react';

import { FooterWrapper, FooterText } from './style';

const Footer = () => (
  <FooterWrapper>
    <FooterText>&copy; {new Date().getFullYear()} Мой футер</FooterText>
  </FooterWrapper>
);

export { Footer };
