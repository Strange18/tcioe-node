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
  width: 20%;
  padding-bottom: 0.3em;
  color: #333333;
  border-bottom: 5px solid #7177ff;
`;

export const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 2em 0;
`;

export const RenderTeamCards = ({ Members, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <CardsContainer>
        {/* chek if member is not empty */}
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
