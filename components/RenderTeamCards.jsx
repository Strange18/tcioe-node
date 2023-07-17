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
`;

export const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 2em 0;
`;

export const RenderTeamCards = ({ Members, title }) => {
  return (
    <Wrapper>
      {title && (
        <div className="flex flex-col gap-2">
          <Title>{title}</Title>
          <div className="w-40 h-[6px] bg-[#7177ff]"></div>
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
