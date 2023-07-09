"use client";
import styled from "styled-components";
import Image from 'next/legacy/image'
import Link from "next/link";
import { useState } from "react";

import CampusCheifimage from "../assets/CC_image.png";
const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 12px 64px 12px 64px;
  gap: 8px;

  @media (max-width: 950px) {
    padding: 12px 32px 12px 32px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 525px;
  display: flex;
  gap: 32px;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    gap: 0px;
  }
`;
const LeftContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #090c4c;

  @media (max-width: 950px) {
    text-align: center;
  }
`;
const BodyText = styled.div`
  font-size: 18px;
  color: #8a8a8a;
  line-height: 2rem;
  text-align: justify;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ expanded }) => (expanded ? "unset" : "120px")};
`;
const Readmore = styled.a`
  font-size: 16px;
  color: #4c7fbc;
  text-decoration: none;
  cursor: pointer;
  margin-top: -1rem;
`;

const Readless = styled.a`
  font-size: 16px;
  color: #4c7fbc;
  text-decoration: none;
  cursor: pointer;
  margin-top: -1rem;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CampusChiefName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0d1392;
`;
const CampusChiefPost = styled.div`
  padding-top: 8px;
  font-size: 14px;
  color: #292929;
`;

const RightContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 950px) {
    top: -64px;
  }

  @media (max-width: 950px) {
    min-width: 100%;
    min-height: 50vh;
    top: 0;
  }
`;

const CampusChiefComponent = ({ post, name, photo, message }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(true);
  };
  const handleReadLessClick = () => {
    setExpanded(false);
  };
  return (
    <Wrapper>
      <Heading>Message From {post}</Heading>
      <Container>
        <LeftContainer>
          <BodyText expanded={expanded}>
            {message}
          </BodyText>
          {expanded ? (
            <Readless onClick={handleReadLessClick}>Read Less</Readless>
          ) : (
            <Readmore onClick={handleReadMoreClick}>Read More</Readmore>
          )}
          <PostContainer>
            <CampusChiefName>{name}</CampusChiefName>
            <CampusChiefPost>{post}, TCIOE</CampusChiefPost>
          </PostContainer>
        </LeftContainer>
        <RightContainer>
          <Image
            src={photo}
            layout="fill"
            objectFit="contain"
            alt="Campus Chief"
          />
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

export default CampusChiefComponent;