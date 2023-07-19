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

export const TABLE = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TH = styled.th`
  padding: 10px;
  text-align: center;
  word-wrap: break-word;
`;

export const TD = styled.td`
  padding: 10px;
  text-align: center;
  word-wrap: break-word;
`;

export const TR = styled.tr``;

export const THEAD = styled.thead`
  background-color: #090c4c;
  color: white;
`;

export const sm = styled.p`
  font-size: 8px;
`;

const Scholarship = () => {
  return (
    <>
      <Container>
        <RightContainer>
          <Heading>Admission and Semester Fee Structure</Heading>
          <BodyText>
            <TABLE>
              <THEAD>
                <TR>
                  <TH>B.E. Programs</TH>
                  <TH></TH>
                  <TH>Admission</TH>
                  <TH>Semester</TH>
                </TR>
              </THEAD>
              <tbody>
                <TR>
                  <TD>BIE,BEI,BCT,BAR,BME</TD>
                  <TD rowSpan={2}>Regular</TD>
                  <TD>11025/-</TD>
                  <TD></TD>
                </TR>
                <TR>
                  <TD>BIE,BAM</TD>
                  <TD>15025/-</TD>
                  <TD></TD>
                </TR>
                <TR>
                  <TD>BIE,BEI,BCT,BAR,BME</TD>
                  <TD rowSpan={2}>Full Fee</TD>
                  <TD>74400/-</TD>
                  <TD></TD>
                </TR>
                <TR>
                  <TD>BIE,BAM</TD>
                  <TD>82400/-</TD>
                  <TD></TD>
                </TR>
              </tbody>
            </TABLE>

            <TABLE>
              <THEAD>
                <TR>
                  <TH>M.Sc. Programs</TH>
                  <TH>Regular</TH>
                  <TH>Full Fee</TH>
                  <TH>Sponsor</TH>
                  <TH>Foreign</TH>
                </TR>
              </THEAD>
              <tbody>
                <TR>
                  <TD>MSDEM,MSIISE,MSEQE</TD>
                  <TD>21355/-</TD>
                  <TD>46855/-</TD>
                  <TD>54175/-</TD>
                  <TD>$2,060</TD>
                </TR>
              </tbody>
            </TABLE>
          </BodyText>
          <BodyText>
            <Heading>Annual Intake</Heading>
            <IntakeTableComponent />
          </BodyText>
        </RightContainer>
      </Container>
    </>
  );
};

export default Scholarship;
