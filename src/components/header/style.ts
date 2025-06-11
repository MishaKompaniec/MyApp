import { Select as AntSelect } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const Select = styled(AntSelect)`
  &&& {
    .ant-select-selector {
      background-color: transparent;
      border: 1px solid ${colors.white};
      box-shadow: none;
      color: ${colors.white};
      transition:
        color 0.3s ease,
        border-color 0.3s ease;
    }

    &.ant-select-focused .ant-select-selector,
    &.ant-select-open .ant-select-selector {
      box-shadow: none;
      background-color: transparent;
      color: ${colors.primary};
      border-color: ${colors.primary};
    }

    &:hover .ant-select-selector {
      color: ${colors.primary};
      border-color: ${colors.primary};
    }
    &:hover .ant-select-arrow {
      color: ${colors.primary};
    }

    &:hover .ant-select-selection-item,
    &:hover .ant-select-selection-placeholder {
      color: ${colors.primary};
    }

    .ant-select-selection-item,
    .ant-select-selection-placeholder {
      color: ${colors.white};
      transition: color 0.3s ease;
    }

    &.ant-select-focused .ant-select-selection-item,
    &.ant-select-focused .ant-select-selection-placeholder,
    &.ant-select-open .ant-select-selection-item,
    &.ant-select-open .ant-select-selection-placeholder {
      color: ${colors.primary};
    }

    .ant-select-arrow {
      color: ${colors.white};
      transition: color 0.3s ease;
    }

    &.ant-select-focused .ant-select-arrow,
    &.ant-select-open .ant-select-arrow {
      color: ${colors.primary};
    }

    .ant-select-dropdown {
      background-color: transparent;
      color: ${colors.white};
    }

    .ant-select-item-option-content {
      color: ${colors.white};
    }

    .ant-select-item-option-active {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

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
