"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  @media (max-width: 950px) {
    padding: 24px 0 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // min-height: 400px;
  gap: 3em;
  padding: 0px 64px 12px 64px;
  @media (max-width: 950px) {
    padding: 0px 32px 12px 32px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #090c4c;
  @media (max-width: 950px) {
    font-size: 2rem;
  }
`;
const Description = styled.div`
  font-size: 18px;
  text-align: justify;
  color: #909090;
  // @media (max-width: 950px) {
  //   font-size: 1rem;
  // }
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
