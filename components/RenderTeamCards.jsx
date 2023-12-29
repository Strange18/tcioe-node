"use client";

import TeamCard from "./TeamCard";
import styled from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6em;
  row-gap: 4em;
  flex: 1fr 1fr 1fr;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 764px) {
    font-size: 1.5rem;
  }
  // @media (max-width: 564px) {
  //   font-size: 1rem;
  // }
`;

export const Wrapper = styled.section`
  width: 100%;
  padding: 32px 64px 64px 64px;
  @media (max-width: 764px) {
    padding: 32px;
  }
`;

export const RenderTeamCards = ({ Members, title }) => {
  return (
    <Wrapper>
      {title && (
        <div className="w-fit flex flex-col gap-1 justify-center pb-12">
          <Title>{title}</Title>
          <div className="h-[5px] bg-[#f97a01]"></div>
        </div>
      )}
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