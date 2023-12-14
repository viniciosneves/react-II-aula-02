import React, { useState } from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Step = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.$ativo ? '#4FE5B8' : '#D9D9D9'};
  margin: 0 5px;
`;

const Connector = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: ${props => props.$ativo ? '#4FE5B8' : '#D9D9D9'};
`;

const Stepper = () => {
  return (
    <StepperContainer>
        <Step $ativo />
        <Connector $ativo/>
        <Step $ativo />
        <Connector />
        <Step />

    </StepperContainer>
  );
};

export default Stepper;
