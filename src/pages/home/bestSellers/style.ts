import { Button } from 'antd';
import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  color: ${colors.black};
`;

export const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 4vw;
  color: ${colors.black};
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const Price = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
`;

export const Btn = styled(Button)``;
