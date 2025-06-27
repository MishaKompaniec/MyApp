import { MenuOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from '../drawer';
import { MobileMenuDrawer } from '../mobileMenuDrawer';
import { LanguageSelect } from '../select';

import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  Menu,
  MenuItemLink,
  MenuItem,
  FlexBox,
  BurgerButton,
} from './style';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => scrollToElement(sectionId), 100);
    } else {
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <HeaderWrapper>
      <LogoWrapper to="/">
        <Logo src="/images/logo.png" alt="flower" />
      </LogoWrapper>
      <Menu>
        <MenuItemLink to="/store">{t('header.store')}</MenuItemLink>
        <MenuItem onClick={() => scrollToSection('about-us')}>
          {t('header.about')}
        </MenuItem>
        <MenuItem onClick={() => scrollToSection('contacts')}>
          {t('header.contacts')}
        </MenuItem>
      </Menu>

      <FlexBox>
        <Drawer />
        <LanguageSelect />
      </FlexBox>

      <BurgerButton onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
        <MenuOutlined />
      </BurgerButton>

      <MobileMenuDrawer
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </HeaderWrapper>
  );
};

export { Header };
