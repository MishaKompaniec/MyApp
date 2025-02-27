import { Button } from 'antd';
import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/images/main-flower.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  background-color: ${colors.transparentBlack};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.h1`
  font-size: 7vw;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const Btn = styled(Button)`
  height: 50px;
  font-size: 20px;
`;
