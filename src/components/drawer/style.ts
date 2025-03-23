import styled from 'styled-components';

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

export const MenuItem = styled.p`
  color: white;
  text-decoration: none;
  font-family: 'Montserrat';
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
