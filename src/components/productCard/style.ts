import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const CardWrapper = styled.div`
  .ant-card .ant-card-body {
    padding: 10px 5px 15px 5px;
    background-color: #fffafc;
  }
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
  text-align: center;
`;

export const Description = styled.p`
  font-size: 12px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 3em;
`;

export const Price = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
`;
