import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 32px 0;
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

const TableRowTotal = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
    font-weight: 600;
    color: #090c4c;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableData = styled.td`
  padding: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ProgramData = styled(TableData)`
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ResponsiveTable = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Programs</TableHeader>
            <TableHeader>Regular</TableHeader>
            <TableHeader>Full Fee</TableHeader>
            <TableHeader>Sponsor</TableHeader>
            <TableHeader>Total</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          <TableRow>
            <ProgramData>B.E. in Architecture (BAR)</ProgramData>
            <TableData>12</TableData>
            <TableData>36</TableData>
            <TableData>-</TableData>
            <TableData>48</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>B.E. in Automobile Engineering (BAM)</ProgramData>
            <TableData>12</TableData>
            <TableData>36</TableData>
            <TableData>-</TableData>
            <TableData>48</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>B.E. in Civil Engineering (BCE)</ProgramData>
            <TableData>36</TableData>
            <TableData>108</TableData>
            <TableData>-</TableData>
            <TableData>144</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>
              B.E. in Electronics, Communication and Information Engineering
              (BEI)
            </ProgramData>
            <TableData>12</TableData>
            <TableData>36</TableData>
            <TableData>-</TableData>
            <TableData>48</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>B.E. in Industrial Engineering (BIE)</ProgramData>
            <TableData>12</TableData>
            <TableData>36</TableData>
            <TableData>-</TableData>
            <TableData>48</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>B.E. in Mechanical Engineering (BME)</ProgramData>
            <TableData>12</TableData>
            <TableData>36</TableData>
            <TableData>-</TableData>
            <TableData>48</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>B.E. in Computer Engineering (BCT)</ProgramData>
            <TableData>12</TableData>
            <TableData>36</TableData>
            <TableData>-</TableData>
            <TableData>48</TableData>
          </TableRow>
          <TableRowTotal>
            <ProgramData>B.E. Total</ProgramData>
            <TableData>108</TableData>
            <TableData>324</TableData>
            <TableData>-</TableData>
            <TableData>432</TableData>
          </TableRowTotal>
          <TableRow>
            <ProgramData>M.Sc. in Earthquake Engineering (MSEQE)</ProgramData>
            <TableData>5</TableData>
            <TableData>7</TableData>
            <TableData>8</TableData>
            <TableData>20</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>
              M.Sc. in Mechanical Design and Manufacturing Engineering
              (MSDEM)
            </ProgramData>
            <TableData>5</TableData>
            <TableData>7</TableData>
            <TableData>8</TableData>
            <TableData>20</TableData>
          </TableRow>
          <TableRow>
            <ProgramData>
              M.Sc. in Informatics and Intelligent Systems Engineering (MSIISE)
            </ProgramData>
            <TableData>5</TableData>
            <TableData>7</TableData>
            <TableData>8</TableData>
            <TableData>20</TableData>
          </TableRow>
          <TableRowTotal>
            <ProgramData>M.Sc. Total</ProgramData>
            <TableData>15</TableData>
            <TableData>21</TableData>
            <TableData>24</TableData>
            <TableData>60</TableData>
          </TableRowTotal>
        </tbody>
      </Table>
    </Container>
  );
};

export default ResponsiveTable;
