import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 30px;
  background-color: red;
`;

export const Logo = styled(Link)`
  background-color: red;
  margin-right: auto;
  color: white;
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;

export const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
`;
