import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/main-flower.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
  }
`;
