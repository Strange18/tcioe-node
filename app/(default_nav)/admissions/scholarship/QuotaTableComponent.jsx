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
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
  }
`;

const TableData = styled.td`
  padding: 8px; /* Adjusted padding for smaller screens */
  text-align: center;
  font-size: 14px; /* Default font size for data */

  @media (max-width: 768px) {
    adding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
  }
`;

const QuotaTableComponent = () => {
  const data = [
    ["Program", "Total", "Female", "Adhibasi-Janajati", "Madhesi", "Dalit", "Disabled", "Backward Remote Area", "Muslim", "Tharu", "Others"],
    ["Civil", "7", "1", "1", "1", "1", "1", "-", "-", "1", "1"],
    ["Electronics", "2", "1", "1", "-", "-", "-", "-", "-", "-", "-"],
    ["Mechanical", "2", "1", "1", "-", "-", "-", "-", "-", "-", "-"],
    ["Architecture", "2", "1", "1", "-", "-", "-", "-", "-", "-", "-"],
    ["Industrial", "2", "1", "1", "-", "-", "-", "-", "-", "-", "-"],
    ["Automobile", "2", "1", "1", "-", "-", "-", "-", "-", "-", "-"],
    ["Computer", "2", "1", "1", "-", "-", "-", "-", "-", "-", "-"],
  ]

  // divite the data along the column to create two tables
  const table1 = data.map((row) => {
    return row.slice(0, 6);
  });
 
  // keep the first column of data into the second table
  const table2 = data.map((row) => {
    return [row[0], ...row.slice(6)];
  });
  // remove all rows except the first and second of table 2
  table2.splice(2, 6);


  return (
    <Container>
      {/* create two tables */}

      {/* first table */}
      <Table>
        <TableHead>
          <TableRow>
            {/* loop over first row of data 1 */}
            {table1[0].map((item) => {
              return <TableHeader>{item}</TableHeader>
            })}
          </TableRow>
        </TableHead>

        <tbody>
          {/* loop over rest of the rows of data 1 */}
          {table1.slice(1).map((row) => {
            return (
              <TableRow>
                {row.map((item) => {
                  return <TableData>{item}</TableData>
                })}
              </TableRow>
            )
          })}
        </tbody>
      </Table>

      {/* second table */}
      <Table>
        <TableHead>
          <TableRow>
            {/* loop over first row of data 2 */}
            {table2[0].map((item) => {
              return <TableHeader>{item}</TableHeader>
            })}
          </TableRow>
        </TableHead>

        <tbody>
          {/* loop over rest of the rows of data 2 */}
          {table2.slice(1).map((row) => {
            return (
              <TableRow>
                {row.map((item) => {
                  return <TableData>{item}</TableData>
                })}
              </TableRow>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default QuotaTableComponent;