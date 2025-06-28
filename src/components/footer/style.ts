import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  background-color: ${colors.pink};
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

export const FooterText = styled.p`
  width: fit-content;
  color: white;
`;
