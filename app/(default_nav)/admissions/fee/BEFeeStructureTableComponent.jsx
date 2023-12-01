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
  border: 1px solid #999;
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

const BEIntakeTableComponent = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <TableHeader rowSpan="2">Details</TableHeader>
            <TableHeader colSpan="3">Fee (NRs.)</TableHeader>
            <TableHeader rowSpan="2">Note</TableHeader>
          </tr>
          <tr>
            <TableHeader>Regular</TableHeader>
            <TableHeader>Full Fee</TableHeader>
            <TableHeader>Foreign</TableHeader>
          </tr>
        </TableHead>

        <tbody>
          <TableRow>
            <TableData>Tuition Fee</TableData>
            <TableData>2,340.00/-</TableData>
            <TableData>38,250.00/-</TableData>
            <TableData>1,10,000.00/-</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  )
}

export default BEIntakeTableComponent;