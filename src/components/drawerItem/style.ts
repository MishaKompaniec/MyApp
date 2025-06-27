import { CloseOutlined } from '@ant-design/icons';
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

export const Price = styled.p`
  min-width: 90px;
  margin-top: 5px;
  margin-left: 5px;
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

export const CloseBtn = styled(CloseOutlined)`
  color: ${colors.pink};
`;
