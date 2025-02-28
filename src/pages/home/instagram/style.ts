import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 4vw;
  color: ${colors.black};
`;

export const Image1 = styled.img`
  width: 560px;
  height: 560px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageItem = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0 50px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ImgBlock = styled.div`
  display: flex;
  gap: 15px;
`;

export const Inst = styled.span`
  color: ${colors.pink};
`;
