"use client";
import styled from "styled-components";
import Image from 'next/legacy/image'


const Wrapper = styled.div`
  width: 100%;
  min-height: 552px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 950px) {
    padding: 24px 0 0 0;
  }
`;

const Header = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #181b57;
`;
const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: #f97a00;
`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: ${(props) => (props.index %2 === 0 ? "row-reverse" : "row")};
  gap: 32px;
  justify-content: space-between;
  padding: 0px 64px 12px 64px;

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 0px 32px 12px 32px;
  }
`;
const RightContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 75px 0 0px 0;

  @media (max-width: 950px) {
    padding: 12px;
  }
`;
const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #0d1392;
  text-align: center;
`;
const BodyText = styled.div`
  font-size: 18px;
  color: #8a8a8a;
  line-height: 2rem;
  text-align: justify;
`;
const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 950px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const ProgramsOfferedComponent = ({ programs }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Programs Offered</Title>
          <Line width={"260px"} />
        </Header>
        {programs.map((program, index) => {
          return (
            <Container key={index} index={program.id}>
              <LeftContainer>
                <ImageContainer>
                  <Image
                    src={program.image}
                    layout="fill"
                    objectFit="cover"
                    alt="Campus Chief"
                  />
                </ImageContainer>
              </LeftContainer>
              <RightContainer>
                <Heading>{program.name}</Heading>
                <BodyText>{program.description}</BodyText>
              </RightContainer>
            </Container>
          );
        })}
      </Wrapper>
    </>
  );
};

export default ProgramsOfferedComponent;