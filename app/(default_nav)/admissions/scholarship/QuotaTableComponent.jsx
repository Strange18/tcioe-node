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

const QuotaTableComponent = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Program</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Female</TableHeader>
            <TableHeader>Adhibasi-Janajati</TableHeader>
            <TableHeader>Madhesi</TableHeader>
            <TableHeader>Dalit</TableHeader>
            <TableHeader>Disabled</TableHeader>
            <TableHeader>Backward Remote Area</TableHeader>
            <TableHeader>Muslim</TableHeader>
            <TableHeader>Tharu</TableHeader>
            <TableHeader>Others</TableHeader>
          </TableRow>
        </TableHead>

        <tbody>
          <TableRow>
            <TableData>Civil</TableData>
            <TableData>7</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
          </TableRow>
          <TableRow>
            <TableData>Electronics</TableData>
            <TableData>2</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>Mechanical</TableData>
            <TableData>2</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>Architecture</TableData>
            <TableData>2</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>Industrial</TableData>
            <TableData>2</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>Automobile</TableData>
            <TableData>2</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>Computer</TableData>
            <TableData>2</TableData>
            <TableData>1</TableData>
            <TableData>1</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  )
}

export default QuotaTableComponent;