"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px 64px;
  margin-block: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 12px 32px;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BodyText = styled.div`
  font-size: 18px;
  color: #8a8a8a;
  line-height: 2rem;
  text-align: justify;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #181b57;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: #f97a00;
`;

const AboutComponent = ({ heading, body_text, img }) => {
  return (
    <Container>
      <LeftContainer>
        <Image
          src={img}
          width={500}
          height={500}
          layout="intrinsic"
          objectFit="contain"
          alt={heading}
        />
      </LeftContainer>
      <RightContainer>
      <Header>
          <Title>{heading}</Title>
          <Line />
      </Header>
      <BodyText>{body_text}</BodyText>
      </RightContainer>
    </Container>
  );
};

export default AboutComponent;