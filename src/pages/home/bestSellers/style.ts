import styled from 'styled-components';

import { colors } from '@/theme/colors';

export const Wrapper = styled.div`
  background-color: ${colors.pinkBg};
`;

export const InnerWrapper = styled.div`
  .ant-card .ant-card-body {
    background-color: ${colors.lightPinkBg};
  }

  width: 1000px;
  margin: 0 auto;
  padding: 25px 0 25px 0;
  color: ${colors.black};
  background-color: ${colors.pinkBg};

  .swiper-pagination-bullet-active {
    background-color: ${colors.primary}!important;
  }

  .ant-card .ant-card-body {
    padding: 20px 10px;
  }
`;

export const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  padding-bottom: 30px;
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

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
