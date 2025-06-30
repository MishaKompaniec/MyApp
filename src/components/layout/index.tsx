import { FC } from 'react';

import { LayoutProps } from '@/types';

import { Footer } from '../footer';
import { Header } from '../header';

import { MainWrapper } from './style';

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <MainWrapper>{children}</MainWrapper>
    <Footer />
  </>
);

export { Layout };
