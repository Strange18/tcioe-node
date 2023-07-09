"use client";
import styled from "styled-components";
import Image from 'next/legacy/image'
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
  min-height: 552px;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  @media (max-width: 950px) {
    padding: 24px 0 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 525px;
  gap: 3em;
  padding: 0px 64px 12px 64px;
  @media (max-width: 950px) {
    padding: 0px 32px 12px 32px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #090c4c;
  @media (max-width: 950px) {
    font-size: 2rem;
  }
`;
const Description = styled.div`
  font-size: 2rem;
  color: #909090;
`;
const ProgramsIntroComponent = ({ title, description }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </Wrapper>
  );
};

export default ProgramsIntroComponent;
