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

const TableRowBold = styled.tr`
font-weight: 600;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableRowHighlight = styled.tr`
font-weight: 600;
color: #090c4c;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #999;
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

const TableDataHighlight = styled(TableData)`
  font-weight: 600;
  color: #090c4c;
`;

const BEIntakeTableComponent = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <TableHeader rowSpan="2">Details</TableHeader>
            <TableHeader colSpan="3">Fee (NRs.)</TableHeader>
          </tr>
          <tr>
            <TableHeader>Regular</TableHeader>
            <TableHeader>Full Fee</TableHeader>
            <TableHeader>Foreign Students</TableHeader>
          </tr>
        </TableHead>

        <tbody>
          <TableRow>
            <TableData>Tuition Fee</TableData>
            <TableData>2,340.00</TableData>
            <TableData>38,250.00</TableData>
            <TableData>1,10,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Entrance Card Fee</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Laboratory Fee</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Library Fee</TableData>
            <TableData>50.00</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Examination Fee</TableData>
            <TableData>2,500.00</TableData>
            <TableData>2,500.00</TableData>
            <TableData>2,500.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Exam Center Fee</TableData>
            <TableData>150.00</TableData>
            <TableData>150.00</TableData>
            <TableData>150.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Entrance Card Fee</TableData>
            <TableData>100.00</TableData>
            <TableData>100.00</TableData>
            <TableData>100.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Sports Fee</TableData>
            <TableData>20.00</TableData>
            <TableData>20.00</TableData>
            <TableData>100.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Students Union Fee</TableData>
            <TableData>15.00</TableData>
            <TableData>15.00</TableData>
            <TableData>100.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Students Welfare Fund</TableData>
            <TableData>15.00</TableData>
            <TableData>15.00</TableData>
            <TableData>150.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Sports Development Fund</TableData>
            <TableData>50.00</TableData>
            <TableData>100.00</TableData>
            <TableData>150.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Campus Development Fund</TableData>
            <TableData>150.00</TableData>
            <TableData>925.00</TableData>
            <TableData>4,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Campus Maintenance Fee</TableData>
            <TableData>100.00</TableData>
            <TableData>925.00</TableData>
            <TableData>4,000.00</TableData>
          </TableRow>
          <TableRowBold>
            <TableData>Total (1 Semester)</TableData>
            <TableData>5,890.00</TableData>
            <TableData>43,600.00</TableData>
            <TableData>1,21,850.00</TableData>
          </TableRowBold>
          <TableRowHighlight>
            <TableData>Total (8 Semesters)</TableData>
            <TableData>47,120.00</TableData>
            <TableData>3,48,800.00</TableData>
            <TableData>9,74,800.00</TableData>
          </TableRowHighlight>
          <TableRow>
            <TableDataHighlight colSpan="4">Other Fee (Payable Only Once)</TableDataHighlight>
          </TableRow>
          <TableRow>
            <TableData>Campus Operations and Infrastructure Development</TableData>
            <TableData>4,980.00</TableData>
            <TableData>1,00,000.00</TableData>
            <TableData>2,21,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>T.U. Registration Fee*</TableData>
            <TableData>500.00</TableData>
            <TableData>500.00</TableData>
            <TableData>2,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>ID Card Fee</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
            <TableData>200.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Students Health Insurance</TableData>
            <TableData>500.00</TableData>
            <TableData>500.00</TableData>
            <TableData>500.00</TableData>
          </TableRow>
          <TableRowBold>
            <TableData>Total</TableData>
            <TableData>6,180.00</TableData>
            <TableData>1,01,200.00</TableData>
            <TableData>2,23,700.00</TableData>
          </TableRowBold>
          <TableRowHighlight>
            <TableData>Total (4 Years)</TableData>
            <TableData>53,300.00</TableData>
            <TableData>4,50,000.00</TableData>
            <TableData>11,98,500.00</TableData>
          </TableRowHighlight>
          <TableRow>
            <TableDataHighlight colSpan="5">Deposits</TableDataHighlight>
          </TableRow>
          <TableRow>
            <TableData>Library Deposit</TableData>
            <TableData>1,200.00</TableData>
            <TableData>5,000.00</TableData>
            <TableData>5,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Laboratory Deposit</TableData>
            <TableData>500.00</TableData>
            <TableData>10,000.00</TableData>
            <TableData>10,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableData>Campus Deposit</TableData>
            <TableData>1,700.00</TableData>
            <TableData>25,000.00</TableData>
            <TableData>1,00,000.00</TableData>
          </TableRow>
          <TableRowBold>
            <TableData>Total</TableData>
            <TableData>3,400.00</TableData>
            <TableData>30,000.00</TableData>
            <TableData>1,10,000.00</TableData>
          </TableRowBold>
          <TableRow>
            <TableDataHighlight>Fee Payable during Admission</TableDataHighlight>
            <TableData>3,400.00</TableData>
            <TableData>30,000.00</TableData>
            <TableData>1,10,000.00</TableData>
          </TableRow>
          <TableRow>
            <TableDataHighlight>Total (4 Years Including Deposits)</TableDataHighlight>
            <TableData>56,700.00</TableData>
            <TableData>4,80,000.00</TableData>
            <TableData>13,08,500.00</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  )
}

export default BEIntakeTableComponent;