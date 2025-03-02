import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  color: ${colors.black};
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
  margin-bottom: 30px;
`;

export const RightTextBlock = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-bottom: 30px;
`;
