import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 15px 15px 15px 0;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
