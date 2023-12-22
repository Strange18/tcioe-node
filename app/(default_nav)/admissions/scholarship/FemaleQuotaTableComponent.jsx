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
    padding: 8px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
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
    padding: 6px;
  }
`;

const ProgramData = styled(TableData)`
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const FemaleQuotaTableComponent = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Program</TableHeader>
            <TableHeader>Regular</TableHeader>
            <TableHeader>Full Fee</TableHeader>
          </TableRow>
        </TableHead>

        <tbody>
          <TableRow>
            <TableData>Civil</TableData>
            <TableData>3</TableData>
            <TableData>10</TableData>
          </TableRow>
          <TableRow>
            <TableData>Electronics, Communication and Information</TableData>
            <TableData>1</TableData>
            <TableData>4</TableData>
          </TableRow>
          <TableRow>
            <TableData>Computer</TableData>
            <TableData>1</TableData>
            <TableData>4</TableData>
          </TableRow>
          <TableRow>
            <TableData>Architecture</TableData>
            <TableData>1</TableData>
            <TableData>4</TableData>
          </TableRow>
          <TableRow>
            <TableData>Industrial</TableData>
            <TableData>1</TableData>
            <TableData>4</TableData>
          </TableRow>
          <TableRow>
            <TableData>Automobile</TableData>
            <TableData>1</TableData>
            <TableData>4</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default FemaleQuotaTableComponent;
