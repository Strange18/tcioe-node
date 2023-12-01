"use client"
import styled from 'styled-components';
import IntakeTableComponent from './IntakeTableComponent';

const Container = styled.div`
  width: 100%;
  min-height: 525px;
  display: flex;
  gap: 32px;
  padding: 12px 64px 12px 64px;

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 12px 16px;
  }
`;

const RightContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 75px 0 0px 0;
  max-width: 800px;
  overflow-x: auto;
  margin: 20px auto;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #090c4c;
  text-align: center;
`;

export const BodyText = styled.div`
  font-size: 18px;
  color: #8a8a8a;
  line-height: 2rem;
  text-align: justify;
`;

const Intake = () => {
  return (
    <>
      <Container>
        <RightContainer>
          <Heading>Annual Intake</Heading>
          <BodyText>
            <IntakeTableComponent />
          </BodyText>
        </RightContainer>
      </Container>
    </>
  );
};

export default Intake;