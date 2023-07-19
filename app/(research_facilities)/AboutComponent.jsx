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
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 12px 32px 12px 32px;
    margin-top: -4rem;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 75px 0 0px 0;

  @media (max-width: 1200px) {
    margin-top: -7rem;
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

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
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
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
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
      <Header>
          <Title>{heading}</Title>
          <Line width={"100px"} />
          
        </Header>
        <BodyText>{body_text}</BodyText>
      </RightContainer>
    </Container>
  );
};

export default AboutComponent;
