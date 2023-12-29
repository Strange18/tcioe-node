"use client";

import TeamCard from "./TeamCard";
import styled from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  gap: 3em;
  justify-content: center;
  @media (max-width: 764px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  width: 30%;
  color: #333333;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 764px) {
    font-size: 1.5rem;
    width: 50%;
  }
  @media (max-width: 564px) {
    font-size: 1rem;
    width: 80%;
  }
`;

export const Wrapper = styled.section`
  width: 95%;
  padding: 32px 32px 64px 32px;
  @media (max-width: 764px) {
    padding: 32px;
  }
`;

export const RenderUnitHeadComponent = ({ Members, title }) => {
  return (
    <Wrapper>
      <CardsContainer>
        {Members && Members.length > 0 ? (
          Members.map((member, index) => {
            return <TeamCard key={index} detail={member} />;
          })
        ) : (
          <h1>Loading Data...</h1>
        )}
      </CardsContainer>
    </Wrapper>
  );
};
