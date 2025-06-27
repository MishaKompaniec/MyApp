import styled, { keyframes } from 'styled-components';

import { colors } from '@/theme/colors';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 25px 25px 50px 25px;
  color: ${colors.black};
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
  font-size: 4vw;
  color: ${colors.black};
`;

export const Text = styled.div``;

export const LeftTextBlock = styled.div`
  max-width: 600px;
`;

export const RightTextBlock = styled.div`
  max-width: 600px;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  animation: ${rotate} 10s linear infinite;
`;
