"use client";

import { useEffect, useState } from 'react';

import styled from 'styled-components'

const HeadingTags = styled.h4`
  color: var(--bg-color);
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const SubHeadingTags = styled.h6`
color: var(--primary-color);
font-size: 1.5rem;
text-align: center;
margin-top: 1rem;

@media only screen and (max-width: 600px) {
  font-size: 1rem;
}
`;

const Tables = styled.table`
border-collapse: collapse;
width: 50%; 
margin: 3rem auto;

th,
td {
  text-align: left;
  border: 1px solid var(--light-brown);
  padding: 8px;
}

th {
  background-color: var(--dark-brown);
}

@media only screen and (max-width: 600px) {
  width: 95%;
  font-size: 12px;
}
`;

const Tick = styled.span`
color: green;
`;


const MyComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://49.236.212.118:8001/api/department/students/');
        const jsonData = await res.json();

        // Filter and sort the data
        const filteredData = jsonData.filter(item => item.roll.startsWith('THA077BCT'));
        const sortedData = filteredData.sort((a, b) => a.roll.localeCompare(b.roll));

        setData(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching API data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadingTags>Students – Bachelor in Computer Engineering</HeadingTags>
      <SubHeadingTags>B.E Computer 2077 Batch </SubHeadingTags>
      <Tables>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>CR</th>
            <th>Topper</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.roll}</td>
              <td>{data.name}</td>
              <td>{data.is_cr ? <Tick>&#10004;</Tick> : ''}</td>
              <td>{data.is_topper ? <Tick>&#10004;</Tick> : ''}</td>
            </tr>
          ))}
        </tbody>
      </Tables>
    </>
  );
};

export default MyComponent;