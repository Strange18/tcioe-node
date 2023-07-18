"use client"

import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f0f0f0;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #20068E;
`;

const Subheading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Emoji = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;

const Page = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Heading><Emoji>🚧</Emoji>Work in Progress<Emoji>🚧</Emoji></Heading>
        <Subheading>This page is under construction. Check back soon!</Subheading>
      </ContentContainer>
    </PageContainer>
  );
};

export default Page;
