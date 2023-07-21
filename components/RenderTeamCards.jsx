"use client";

import TeamCard from "./TeamCard";
import styled from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 6em;
  flex: 1fr 1fr 1fr;
  justify-content: center;
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
  padding: 62px;
  @media (max-width: 764px) {
    padding: 32px;
  }
`;

export const RenderTeamCards = ({ Members, title }) => {
  return (
    <Wrapper>
      {title && (
        <div className="flex flex-col gap-2">
          <Title>{title}</Title>
          <div className="w-40 h-[6px] bg-[#7177ff] md:w-32 md:h-[5px] sm:w-10"></div>
        </div>
      )}
      <CardsContainer>
        {Members && Members.length > 0 ? (
          Members.map((member, index) => {
            return <TeamCard key={index} detail={member} />;
          })
        ) : (
          <h1>Data is being updated</h1>
        )}
      </CardsContainer>
    </Wrapper>
  );
};
