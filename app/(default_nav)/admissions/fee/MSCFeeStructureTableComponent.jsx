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
font-weight: 600;
color: #090c4c;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const TableData = styled.td`
  padding: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const ProgramData = styled(TableData)`
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const MSCFeeStructureTableComponent = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>M.Sc. Programs</TableHeader>
            <TableHeader>Regular</TableHeader>
            <TableHeader>Full Fee</TableHeader>
            <TableHeader>Sponsor</TableHeader>
            <TableHeader>Foreign</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          <TableRow>
            <TableData>MSDEM, MSIISE, MSEQE</TableData>
            <TableData>21,355/-</TableData>
            <TableData>46,855/-</TableData>
            <TableData>54,175/-</TableData>
            <TableData>$2,060</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

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
            <TableData>192</TableData>
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
            <TableData>480</TableData>
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

export default MSCFeeStructureTableComponent;
