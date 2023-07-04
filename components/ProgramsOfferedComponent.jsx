"use client"
import styled from 'styled-components'
import Image from 'next/image'

import Thapathali from '../assets/Thapathali.png'

const Wrapper = styled.div`
    width: 100%;
    min-height: 552px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;

    @media (max-width: 950px) {
        padding: 24px 0 0 0;
    }
`

const Header = styled.div`
    min-width:25%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 0px;
    /* justify-content: center; */
    align-items: flex-start;
`
const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    /* margin-bottom: 12px; */
    color:#181B57;
`
const Line = styled.div`
    height: 4px;
    width: ${props => props.width ? props.width : "300px"};
    background-color: #F97A00;
    border-radius: 6px;
`

const Container = styled.div`
    width: 100%;
    min-height: 525px;
    display: flex;
    flex-direction: ${props => props.index === 1 ? "row" : "row-reverse"};
    gap: 32px;
    justify-content: space-between;
    padding: 0px 64px 12px 64px;

    @media (max-width: 950px) {
        flex-direction: column;
        padding: 0px 32px 12px 32px;
    }

`
const RightContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 75px 0 0px 0;

    @media (max-width: 950px) {
        padding: 12px;
    }
`
const Heading = styled.div`
    font-size: 24px;
    font-weight: 700;
    color:#0D1392;
    text-align: center;

`
const BodyText = styled.div`
    font-size: 18px;
    color: #8A8A8A;
    line-height: 2rem;
    text-align: justify;
`
const LeftContainer = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    @media (max-width: 950px) {
        display: none;
    }
`
const ImageContainer = styled.div`
    width: 80%;
    height: 80%;
    position: relative;
`

const ProgramsOfferedComponent = ({ programs }) => {
    return (
        <>
            <Wrapper>
                <Header>
                    <Title>Programs offered</Title>
                    <Line width={"200px"} />
                </Header>
                {programs.map((program, index) => {
                    return (
                        <Container key={index} index={program.id}>
                            <LeftContainer>
                                <ImageContainer>
                                    <Image src={program.image} layout="fill" objectFit="contain" alt="Campus Chief" />
                                </ImageContainer>
                            </LeftContainer>
                            <RightContainer>
                                <Heading>{program.name}</Heading>
                                <BodyText>
                                    {program.description}
                                </BodyText>
                            </RightContainer>
                        </Container>
                    )
                }
                )}
            </Wrapper>
        </>
    )
}

export default ProgramsOfferedComponent