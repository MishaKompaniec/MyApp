import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 4vw;
  color: ${colors.black};
`;

export const Image1 = styled.img`
  width: 590px;
  height: 600px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImageItem = styled.img`
  width: 295px;
  height: 295px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0 50px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImgBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const Inst = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${colors.pink};
  transition: color 0.3s ease-in-out;
`;
