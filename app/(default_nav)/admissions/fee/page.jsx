"use client"

import styled from 'styled-components';
import MSCFeeStructureTableComponent from './MSCFeeStructureTableComponent';
import BEFeeStructureTableComponent from './BEFeeStructureTableComponent';

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
  // padding: 75px 0 0px 0;
  overflow-x: auto;
  margin: 20px auto;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #090c4c;
  text-align: center;
  margin-bottom: 20px;
`;

const BodyText = styled.div`
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

const FadedParagraph = styled.p`
  color: #a9a9a9;
  font-size: 14px;
  // margin-top: -10px;
`;
const FeeStructure = () => {
  return (
    <>
      <Container>
        <RightContainer>
          <BodyText>
            <Heading>B.E./B.Arch. Fee Structure</Heading>
            <NoteContainer>
              <NoteText>
                <b>Fee Details of Undergraduate (B.E./B.Arch.) Level for Academic Year 2080/081</b>
                <FadedParagraph>
                  (In accordance with the decision of IOE, Implementation Committee on 21st, Ashoj, 2080 B.S.)
                </FadedParagraph>
              </NoteText>
            </NoteContainer>
            <BEFeeStructureTableComponent />
          </BodyText>

          <BodyText>
            <Heading>MSC Fee Structure</Heading>
            <MSCFeeStructureTableComponent />
          </BodyText>

          <NoteContainer>
            <NoteHeading>Note:</NoteHeading>
            <NoteText>
              <p>
                1. The tuition fee, examination fee, campus operations, and infrastructure development will be increased by 7% annually from next year, considering inflation, to reduce the impact of poverty and establish financial stability.
              </p>
              <p>
                2. All funds collected under the category of Campus Operations and Infrastructure Development shall be deposited into the Campus Reserve Fund. This fund can be utilized for both Current and Capital Expenditure as deemed necessary by the College.
              </p>
              <p>
                3. The Campus Deposit Fee will be refunded upon completion of the course, with any applicable fees deducted.
              </p>
              <p>
                4. For courses spanning more than 8 semesters, additional fees will be applied accordingly.
              </p>
              <p>
                * T.U. Registration Charges will only be applied to those who haven't registered in T.U. before, as follows:
              </p>
              <p>
                &gt; Students who have passed examinations in Nepal: NRs. 500
              </p>
              <p>
                &gt; Students who have passed examinations outside of Nepal: NRs. 1000
              </p>
              <p>
                &gt; Any additional fees charged by T.U. beyond those mentioned above may be added.
              </p>
              <p>
                &gt; The tuition fee for the Sponsored Quota (as provisioned in the first point of Section 6.4 in the IOE Bulletin) is 30% higher than that of the Personal Full Fee Program.
              </p>
              <p>
                &gt; The fee associated with any educational activities besides those mentioned in the curriculum, such as additional subjects, educational visits, additional practical classes, etc., is to be borne by the students only.
              </p>
              <p>
                &gt; The registration fee for the Nepal Engineering Council is to be borne by the students themselves.
              </p>
            </NoteText>
          </NoteContainer>

        </RightContainer>
      </Container>
    </>
  );
};

export default FeeStructure;
