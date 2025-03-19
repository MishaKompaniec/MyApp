import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  background-color: ${colors.transparentBlack};
  display: flex;
  align-items: center;
  z-index: 1000;
`;

export const LogoWrapper = styled(Link)`
  margin-right: auto;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;

  &:hover {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in;
  }

  &:not(:hover) {
    transform: rotate(0deg);
    transition: transform 0.3s ease-in;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

export const MenuItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Montserrat';
`;

export const MenuItem = styled.p`
  color: white;
  text-decoration: none;
  font-family: 'Montserrat';
  cursor: pointer;
`;
