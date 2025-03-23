import { Button } from 'antd';
import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const DrawerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  min-width: 220px;
`;

export const Price = styled.h3`
  min-width: 90px;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Counter = styled.span`
  display: block;
  width: 20px;
  margin: 0 7px;
  text-align: center;
`;

export const Btn = styled(Button)`
  color: ${colors.red};
  margin-left: auto;

  &:hover {
    color: ${colors.red} !important;
  }

  &:active {
    color: ${colors.red} !important;
  }
`;
