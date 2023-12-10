import React from 'react';
import styled, { keyframes } from 'styled-components';
import Robot from '../../../_metronic/assets/favi.png';

const WelcomeContainer: React.FC = () => (
  <Container>
    <BounceImage width='100px' height='100px' src={Robot} alt="" />
    <h1>Welcome,</h1>
    <h3>Please select a chat to start messaging.</h3>
  </Container>
);

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80dvh;
  color: white;
  flex-direction: column;
  h1, h3 {
    margin: 0;
  }
`;

const BounceImage = styled.img`
  animation: ${bounceAnimation} 2s infinite;
`;

export default WelcomeContainer;
