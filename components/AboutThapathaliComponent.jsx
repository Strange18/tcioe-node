"use client"
import styled from 'styled-components'
import Image from 'next/image'

import Thapathali from '../assets/Thapathali.png'

const Container = styled.div`
    width: 100%;
    min-height: 525px;
    display: flex;
    gap: 32px;
    padding: 12px 64px 12px 64px;

    @media (max-width: 950px) {
        flex-direction: column;
        padding: 12px 32px 12px 32px;
    }

`
const RightContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 75px 0 0px 0;
`
const Heading = styled.div`
    font-size: 24px;
    font-weight: 700;
    color:#090C4C;
    text-align: center;

`
export const BodyText = styled.div`
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

const AboutThapathaliComponent = () => {
    return (
        <>
            <Container>
                <LeftContainer>
                    <Image src={Thapathali} layout="fill" objectFit="contain" alt="Campus Chief" />
                </LeftContainer>
                <RightContainer>
                    <Heading>About Thapathali Campus</Heading>
                    <BodyText>
                        Institute of Engineering Thapathali Campus is a Paradise for Technology. Situated in between the Heart of Capital, it has been providing Undergraduate and Graduate Level of Technical Education. looking back, Thapathali Campus is the first Institute in Nepal Providing Engineering Degrees and technology training since 1930 AD. It is one of the constituent campus of Institute of Engineering under Tribhuvan University, which upgraded its programs to bachelor and master level along the course of time. Campus offers bachelor degree programs in industrial engineering, civil engineering, electronics & communication engineering, mechanical engineering, architecture and automobile engineering and master degree program in earthquake engineering.
                    </BodyText>
                </RightContainer>
            </Container>
        </>
    )
}

export default AboutThapathaliComponent