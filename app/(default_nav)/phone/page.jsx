"use client";

import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 72px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  min-height: 50vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #090c4c;
  margin-bottom: 20px;
`;

const PhoneList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhoneItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const PhoneLabel = styled.div`
  font-weight: 600;
  color: #555555;
`;

const PhoneNumber = styled.div`
  color: #090c4c;
`;

export default function Home() {
  return (
    <Container>
      <Title>Phone Numbers</Title>
      <PhoneList>
        <PhoneItem>
          <PhoneLabel>Reception</PhoneLabel>
          <PhoneNumber>01-4246465</PhoneNumber>
        </PhoneItem>
        <PhoneItem>
          <PhoneLabel>Account, B.Arch, Admin</PhoneLabel>
          <PhoneNumber>01-4248250</PhoneNumber>
        </PhoneItem>
        <PhoneItem>
          <PhoneLabel>Exam Section</PhoneLabel>
          <PhoneNumber>01-5339766</PhoneNumber>
        </PhoneItem>
      </PhoneList>
    </Container>
  );
}
