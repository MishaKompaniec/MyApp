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

export const SubTitle = styled.h2`
  font-size: 22px;
  margin: 0 auto;
  text-align: center;
  margin-top: 15px;
  color: ${colors.black};
`;

export const ContactInfo = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: ${colors.black};
  line-height: 1.6;
  text-align: center;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 20px 0;

  li {
    width: fit-content;
    padding: 10px;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;
