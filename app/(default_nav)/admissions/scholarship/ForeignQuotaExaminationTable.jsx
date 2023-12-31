import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 16px 0; /* Adjusted margin for smaller screens */

  @media (min-width: 768px) {
    margin: 32px 0;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #090c4c;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px; /* Adjusted padding for smaller screens */
  text-align: center;
  font-size: 14px; /* Default font size for headers */

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TableData = styled.td`
  padding: 8px; /* Adjusted padding for smaller screens */
  text-align: center;
  font-size: 14px; /* Default font size for data */

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ForeignQuotaExaminationTable = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>S.N.</TableHeader>
            <TableHeader>Type of Foreign Citizen</TableHeader>
            <TableHeader>Type of Entrance Exam</TableHeader>
          </TableRow>
        </TableHead>

        <tbody>
          <TableRow>
            <TableData>1</TableData>
            <TableData>Foreign Citizen Studying in Nepalese Campus/High Schools</TableData>
            <TableData>Entrance Examination Held by IOE Similar to as of Nepali Students.</TableData>
          </TableRow>
          <TableRow>
            <TableData>2</TableData>
            <TableData>SAARC Countries' Foreign Students</TableData>
            <TableData>The candidate should take the exam as said by the Entrance Examination Board, IOE and be passed. </TableData>
          </TableRow>
          <TableRow>
            <TableData>3</TableData>
            <TableData>Foreign Students from Countries Outside SAARC:</TableData>
            <TableData>The admission can be done after taking the approval from the IOE, Entrance Examination Board.</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default ForeignQuotaExaminationTable;
