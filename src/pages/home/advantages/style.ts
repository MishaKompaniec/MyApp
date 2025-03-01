import styled, { keyframes } from 'styled-components';

import { colors } from '@/theme/colors';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const InformWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  color: ${colors.black};
`;

export const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 4vw;
`;

export const Info = styled.p`
  max-width: 800px;
  margin: 20px auto 40px auto;
  line-height: 25px;
  font-size: 19px;
`;

export const AdvantagesWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AdvantagesItem = styled.div`
  display: flex;
  gap: 15px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  animation: ${rotate} 10s linear infinite;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 22px;
`;

export const Text = styled.p`
  max-width: 280px;
  line-height: 18px;
  font-size: 14px;
`;
