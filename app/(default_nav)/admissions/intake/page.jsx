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
  // gap: 24px;
  // padding: 75px 0 0px 0;
  overflow-x: auto;
  margin: 20px auto;
`;

const Heading = styled.div`
  font-size: 2rem;
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

const NoteContainer = styled.div`
  // margin-top: 30px;
`;

const NoteHeading = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #090c4c;
  margin-bottom: 10px;
`;

const NoteText = styled.div`
  font-size: 18px;
  color: #8a8a8a;
  line-height: 1.8rem;

  p {
    margin-bottom: 10px;
  }
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

          <NoteContainer>
            <NoteHeading>Note:</NoteHeading>
            <NoteText>
              <p>1. In any of the programs conducted by the individual campus through internal resource operation, if there is any doubt about whether full-fee and sponsored quotas will be met or not, students will be admitted on a full-fee basis only after the full-fee quota is filled, and based on the rules, they will be able to move to regular.</p>
              <p>2. In any program, if 60% of the full fee and the sponsored quota within the First Phase Admission Program (First, Second, and Third Admission List) are not filled, the concerned campus may postpone the program for that year, and in such a case, the admission fee will have to be refunded in full.</p>
            </NoteText>
          </NoteContainer>

        </RightContainer>
      </Container>
    </>
  );
};

export default Intake;