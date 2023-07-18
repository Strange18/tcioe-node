"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

const Container = styled.div`
  width: 100%;
  min-height: 525px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 12px 64px 12px 64px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 12px 32px 12px 32px;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 75px 0 0px 0;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #090c4c;
  text-align: center;

  @media (max-width: 1200px) {
    margin-top: -3rem;
    flex: 100%;
  }
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
  margin-top: 75px;

  @media (max-width: 1200px) {
    margin-top: 50px;
    flex: 100%;
  }
`;

const AboutComponent = ({ heading, body_text, img }) => {
  return (
    <Container>
      <LeftContainer>
        <Image
          src={img}
          layout="intrinsic"
          width={500}
          height={500}
          objectFit="contain"
          alt={heading}
        />
      </LeftContainer>
      <RightContainer>
        <Heading>{heading}</Heading>
        <BodyText>{body_text}</BodyText>
      </RightContainer>
    </Container>
  );
};

export default AboutComponent;
